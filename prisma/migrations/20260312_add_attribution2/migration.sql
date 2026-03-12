-- Ajout de la colonne attribution2 sur GscPageMetric
-- Attribution de sous-catégorie : Statique/Dynamique pour villes/corridors/quartiers,
-- catégorie blog pour les articles.
ALTER TABLE seo."GscPageMetric"
  ADD COLUMN IF NOT EXISTS "attribution2" TEXT NOT NULL DEFAULT '';

CREATE INDEX IF NOT EXISTS "GscPageMetric_attribution2_idx"
  ON seo."GscPageMetric"("attribution2");
