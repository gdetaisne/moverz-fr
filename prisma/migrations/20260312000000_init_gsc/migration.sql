-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "seo";

-- CreateTable
CREATE TABLE "seo"."GscSnapshot" (
    "id" TEXT NOT NULL,
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "days" INTEGER NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "prevStart" TIMESTAMP(3) NOT NULL,
    "prevEnd" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GscSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seo"."GscTotals" (
    "id" TEXT NOT NULL,
    "snapshotId" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" DOUBLE PRECISION NOT NULL,
    "clicksPrev" INTEGER NOT NULL,
    "impressionsPrev" INTEGER NOT NULL,
    "ctrPrev" DOUBLE PRECISION NOT NULL,
    "clicksDelta" INTEGER NOT NULL,
    "clicksPct" DOUBLE PRECISION,
    "impressionsDelta" INTEGER NOT NULL,
    "impressionsPct" DOUBLE PRECISION,

    CONSTRAINT "GscTotals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seo"."GscPageMetric" (
    "id" TEXT NOT NULL,
    "snapshotId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "url" TEXT NOT NULL,
    "cluster" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" DOUBLE PRECISION NOT NULL,
    "position" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "GscPageMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seo"."GscQueryMetric" (
    "id" TEXT NOT NULL,
    "snapshotId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "query" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" DOUBLE PRECISION NOT NULL,
    "position" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "GscQueryMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seo"."GscPageQueryMetric" (
    "id" TEXT NOT NULL,
    "snapshotId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "url" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" DOUBLE PRECISION NOT NULL,
    "position" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "GscPageQueryMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seo"."GscAlert" (
    "id" TEXT NOT NULL,
    "snapshotId" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "cluster" TEXT,
    "message" TEXT NOT NULL,

    CONSTRAINT "GscAlert_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GscSnapshot_fetchedAt_idx" ON "seo"."GscSnapshot"("fetchedAt");

-- CreateIndex
CREATE UNIQUE INDEX "GscSnapshot_periodStart_periodEnd_key" ON "seo"."GscSnapshot"("periodStart", "periodEnd");

-- CreateIndex
CREATE UNIQUE INDEX "GscTotals_snapshotId_key" ON "seo"."GscTotals"("snapshotId");

-- CreateIndex
CREATE INDEX "GscPageMetric_url_date_idx" ON "seo"."GscPageMetric"("url", "date");

-- CreateIndex
CREATE INDEX "GscPageMetric_cluster_date_idx" ON "seo"."GscPageMetric"("cluster", "date");

-- CreateIndex
CREATE INDEX "GscPageMetric_snapshotId_idx" ON "seo"."GscPageMetric"("snapshotId");

-- CreateIndex
CREATE INDEX "GscQueryMetric_query_date_idx" ON "seo"."GscQueryMetric"("query", "date");

-- CreateIndex
CREATE INDEX "GscQueryMetric_snapshotId_idx" ON "seo"."GscQueryMetric"("snapshotId");

-- CreateIndex
CREATE INDEX "GscPageQueryMetric_url_query_idx" ON "seo"."GscPageQueryMetric"("url", "query");

-- CreateIndex
CREATE INDEX "GscPageQueryMetric_url_date_idx" ON "seo"."GscPageQueryMetric"("url", "date");

-- CreateIndex
CREATE INDEX "GscPageQueryMetric_date_idx" ON "seo"."GscPageQueryMetric"("date");

-- CreateIndex
CREATE INDEX "GscPageQueryMetric_snapshotId_idx" ON "seo"."GscPageQueryMetric"("snapshotId");

-- CreateIndex
CREATE INDEX "GscAlert_snapshotId_idx" ON "seo"."GscAlert"("snapshotId");

-- CreateIndex
CREATE INDEX "GscAlert_level_idx" ON "seo"."GscAlert"("level");

-- AddForeignKey
ALTER TABLE "seo"."GscTotals" ADD CONSTRAINT "GscTotals_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "seo"."GscSnapshot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seo"."GscPageMetric" ADD CONSTRAINT "GscPageMetric_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "seo"."GscSnapshot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seo"."GscQueryMetric" ADD CONSTRAINT "GscQueryMetric_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "seo"."GscSnapshot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seo"."GscPageQueryMetric" ADD CONSTRAINT "GscPageQueryMetric_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "seo"."GscSnapshot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seo"."GscAlert" ADD CONSTRAINT "GscAlert_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "seo"."GscSnapshot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
