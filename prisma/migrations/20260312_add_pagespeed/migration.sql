-- CreateTable
CREATE TABLE "seo"."PagespeedResult" (
    "id" TEXT NOT NULL,
    "checkedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,
    "impressions" INTEGER NOT NULL,
    "httpStatus" INTEGER,
    "inSitemap" BOOLEAN NOT NULL DEFAULT false,
    "scoreMobile" INTEGER,
    "scoreDesktop" INTEGER,
    "lcpMobile" DOUBLE PRECISION,
    "clsMobile" DOUBLE PRECISION,
    "inpMobile" DOUBLE PRECISION,
    "psiError" TEXT,

    CONSTRAINT "PagespeedResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PagespeedResult_checkedAt_idx" ON "seo"."PagespeedResult"("checkedAt");

-- CreateIndex
CREATE INDEX "PagespeedResult_url_idx" ON "seo"."PagespeedResult"("url");
