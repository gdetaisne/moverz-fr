# Incidents / Bugs — historique & suivi

Objectif : garder **un historique clair** des bugs/incidents (prod, build, perf, SEO, etc.) pour accélérer le diagnostic la prochaine fois.

## Comment ajouter un incident

1. Créer un fichier : `YYYY-MM-DD-slug.md` dans ce dossier
2. Copier le contenu de [`_TEMPLATE.md`](./_TEMPLATE.md)
3. Remplir au minimum : **Impact**, **Root cause**, **Fix**, **Prévention**, **Validation**
4. Ajouter une ligne dans l’index ci-dessous

## Index

| Date | Scope | Statut | Résumé | Lien |
|---|---|---|---|---|
| 2026-01-12 | moverz.fr | clos | Incident prod (voir détail) | [`INCIDENT-2026-01-12-moverz-fr.md`](../INCIDENT-2026-01-12-moverz-fr.md) |
| 2026-01-08 | moverz.fr | clos | Outage + revert (perf / timeouts) | [`OUTAGE-2026-01-08-revert-86efc7a.md`](../OUTAGE-2026-01-08-revert-86efc7a.md) |

## Bonnes pratiques (à respecter)

- **Toujours capturer la preuve** :
  - stack trace complète avec `fichier:ligne`
  - requêtes de repro (`curl`, URL, payload)
  - logs pertinents (CapRover / Nginx / app)
- **Timeline** : heure de début, détection, mitigation, résolution
- **Root cause** : technique + pourquoi ça a échappé aux tests/au review
- **Fix** : diff ou commit hash
- **Prévention** : garde-fou concret (test, alerte, doc, limite perf)

