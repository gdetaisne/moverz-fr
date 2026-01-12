#!/usr/bin/env bash
set -u

# Read-only incident snapshot for CapRover/Docker Swarm hosts.
# Usage:
#   bash scripts/incident-diagnose.sh moverz-fr 900
#   # args: <serviceSlug> <secondsBack>

SERVICE_SLUG="${1:-moverz-fr}"
SINCE_SECONDS="${2:-900}" # 15min

ts() { date -u +"%Y-%m-%dT%H:%M:%SZ"; }
say() { printf "\n===== %s %s =====\n" "$(ts)" "$*"; }

cmd() {
  # Print command then run it; never fail the whole script.
  printf "\n$ %s\n" "$*"
  ( eval "$*" ) || echo "[warn] command failed (exit $?)"
}

say "host"
cmd "whoami"
cmd "hostname"
cmd "uname -a"
cmd "date -u"

say "resources (host)"
cmd "uptime"
cmd "free -h 2>/dev/null || vm_stat 2>/dev/null || true"
cmd "df -h 2>/dev/null | sed -n '1,20p' || true"

say "docker info"
cmd "docker version 2>/dev/null | sed -n '1,120p'"
cmd "docker info 2>/dev/null | sed -n '1,140p'"

say "swarm services (filter: ${SERVICE_SLUG})"
cmd "docker service ls 2>/dev/null | sed -n '1,60p'"
cmd "docker service ls 2>/dev/null | grep -F \"${SERVICE_SLUG}\" || true"

say "service inspect: srv-captain--${SERVICE_SLUG}"
cmd "docker service inspect srv-captain--${SERVICE_SLUG} --format 'image={{.Spec.TaskTemplate.ContainerSpec.Image}} replicas={{.Spec.Mode.Replicated.Replicas}}' 2>/dev/null"
cmd "docker service ps srv-captain--${SERVICE_SLUG} --no-trunc 2>/dev/null | sed -n '1,80p'"

say "containers (top)"
cmd "docker ps --format 'table {{.ID}}\\t{{.Names}}\\t{{.Image}}\\t{{.Status}}' | sed -n '1,60p'"

say "containers (potential non-caprover)"
cmd "docker ps --format '{{.Names}} {{.Image}}' | egrep -v '^(srv-captain|captain-)' | sed -n '1,80p' || true"

say "docker stats snapshot"
cmd "docker stats --no-stream --format 'table {{.Name}}\\t{{.CPUPerc}}\\t{{.MemUsage}}\\t{{.PIDs}}' | sed -n '1,60p'"

say "find captain-nginx container"
NGINX_CID="$(docker ps --format '{{.ID}} {{.Names}}' 2>/dev/null | awk '$2 ~ /^captain-nginx/ {print $1; exit 0}')"
if [ -n "${NGINX_CID}" ]; then
  echo "captain-nginx CID=${NGINX_CID}"
else
  echo "[warn] captain-nginx not found"
fi

say "nginx errors (last ${SINCE_SECONDS}s)"
if [ -n "${NGINX_CID}" ]; then
  cmd "docker logs --since ${SINCE_SECONDS}s --tail 2000 ${NGINX_CID} | egrep -n 'upstream timed out| 502 | 504 |Connection refused|reset by peer|could not be resolved' | tail -n 200 || true"
else
  echo "[skip] no nginx container"
fi

say "nginx top paths for moverz.fr (last ${SINCE_SECONDS}s)"
if [ -n "${NGINX_CID}" ]; then
  # Avoid fragile awk quoting; grep is enough here.
  cmd "docker logs --since ${SINCE_SECONDS}s --tail 20000 ${NGINX_CID} | grep '\"moverz.fr\"' | egrep -o '\"(GET|POST|HEAD) [^ ]+' | sed 's/^\"//' | sort | uniq -c | sort -nr | head -n 40 || true"
else
  echo "[skip] no nginx container"
fi

say "service logs: srv-captain--${SERVICE_SLUG} (last ${SINCE_SECONDS}s)"
cmd "docker service logs --since ${SINCE_SECONDS}s --tail 400 srv-captain--${SERVICE_SLUG} 2>/dev/null || true"

say "oom / kernel kills (dmesg)"
cmd "dmesg -T 2>/dev/null | egrep -i 'killed process|oom|out of memory' | tail -n 60 || true"

say "done"
echo "If you paste this output into ChatGPT/Cursor, we can diagnose 502/504 vs CPU vs OOM quickly."

