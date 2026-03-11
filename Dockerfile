# Rebuild 1740402000
# Dockerfile multi-sites Moverz - Hub National
# Version: 2025-11-20
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app
ARG SITE_URL=https://moverz.fr
ENV SITE_URL=${SITE_URL}

# Install dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# Build application
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG SITE_URL=https://moverz.fr
ENV SITE_URL=${SITE_URL}
ENV NEXT_TELEMETRY_DISABLED=1
# Variables publiques Next.js — injectées statiquement au build
ARG NEXT_PUBLIC_GOOGLE_MAPS_KEY=""
ENV NEXT_PUBLIC_GOOGLE_MAPS_KEY=${NEXT_PUBLIC_GOOGLE_MAPS_KEY}
ARG NEXT_PUBLIC_TURNSTILE_SITE_KEY=""
ENV NEXT_PUBLIC_TURNSTILE_SITE_KEY=${NEXT_PUBLIC_TURNSTILE_SITE_KEY}
ARG NEXT_PUBLIC_BACKOFFICE_URL=""
ENV NEXT_PUBLIC_BACKOFFICE_URL=${NEXT_PUBLIC_BACKOFFICE_URL}
ARG NEXT_PUBLIC_API_URL=""
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# Debug: vérifier que les fichiers essentiels sont présents
RUN ls -la && \
    ls -la scripts/ && \
    ls -la lib/ || true

# Build avec logs détaillés
RUN npm run build

# Production runtime
FROM node:20-alpine AS runner
RUN apk add --no-cache dumb-init && \
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

WORKDIR /app
ARG SITE_URL=https://moverz.fr
ENV NODE_ENV=production
ENV PORT=3000
ENV SITE_URL=${SITE_URL}
ENV NEXT_TELEMETRY_DISABLED=1

# Copy standalone server
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy public directory
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

# Use standalone server
CMD ["dumb-init", "node", "server.js"]
