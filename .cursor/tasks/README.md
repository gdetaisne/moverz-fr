# Tasks - Documentation par tâche (moverz.fr)

> Version légère du système `moverz_main/.cursor/tasks`, adaptée au hub unique.

---

## 📁 Structure recommandée

Pour les chantiers importants (blog, migration domaines, marque blanche), on peut créer
un dossier par tâche :

```text
.cursor/tasks/
  [P1]-TASK-BLOG-EXPORT-ARTICLES/
    README.md      → Vue d'ensemble (objectif, scope, priorités)
    context.md     → Contexte (business, SEO)
    progress.md    → Journal des sessions (ce qui a été fait)
    decisions.md   → Décisions importantes
```

Pas besoin d’aller aussi loin que sur `moverz_main` (commits/tests systématiques), mais
on garde la même logique : **1 gros chantier = 1 dossier de doc**.

---

## 🎯 Priorités (visuel)

On peut réutiliser les préfixes :

- `[P0]` = Critique / bloque la prod (rare sur `moverz.fr`)  
- `[P1]` = Important (SEO, migration, contenu coeur)  
- `[P2]` = Normal (finitions, UX, produit)  

Exemples :

```text
.cursor/tasks/
  [P1]-TASK-BLOG-EXPORT-ARTICLES/
  [P1]-TASK-DOMAINS-VAGUE1/
  [P2]-TASK-FORM-MULTI-TENANT/
```

---

## 🔄 Workflow simple

1. Quand un chantier devient un vrai sujet (blog, 301, whitelabel…)  
   → créer un dossier dans `.cursor/tasks/` avec un `README.md` minimal.  
2. Noter rapidement dans `progress.md` ce qui a été fait à chaque session.  
3. Garder `TODO-Lucie.md` synchronisé avec les 2–3 tâches réellement actives.

Objectif : garder la **clarté** de `moverz_main` sans la lourdeur complète du système multi-sites.


