-- CreateTable
CREATE TABLE "Pattern" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "estimatedTime" INTEGER,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pattern_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatternSection" (
    "id" SERIAL NOT NULL,
    "patternId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL,

    CONSTRAINT "PatternSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatternRound" (
    "id" SERIAL NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "instructions" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL,

    CONSTRAINT "PatternRound_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PatternSection_patternId_idx" ON "PatternSection"("patternId");

-- CreateIndex
CREATE INDEX "PatternRound_sectionId_idx" ON "PatternRound"("sectionId");

-- AddForeignKey
ALTER TABLE "PatternSection" ADD CONSTRAINT "PatternSection_patternId_fkey" FOREIGN KEY ("patternId") REFERENCES "Pattern"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatternRound" ADD CONSTRAINT "PatternRound_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "PatternSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
