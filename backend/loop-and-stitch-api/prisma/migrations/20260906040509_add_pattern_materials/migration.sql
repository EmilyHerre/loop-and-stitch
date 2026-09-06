-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatternMaterial" (
    "id" SERIAL NOT NULL,
    "patternId" INTEGER NOT NULL,
    "materialId" INTEGER NOT NULL,
    "color" TEXT,
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PatternMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PatternMaterial_patternId_idx" ON "PatternMaterial"("patternId");

-- CreateIndex
CREATE INDEX "PatternMaterial_materialId_idx" ON "PatternMaterial"("materialId");

-- CreateIndex
CREATE UNIQUE INDEX "PatternMaterial_patternId_materialId_color_key" ON "PatternMaterial"("patternId", "materialId", "color");

-- AddForeignKey
ALTER TABLE "PatternMaterial" ADD CONSTRAINT "PatternMaterial_patternId_fkey" FOREIGN KEY ("patternId") REFERENCES "Pattern"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatternMaterial" ADD CONSTRAINT "PatternMaterial_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE CASCADE ON UPDATE CASCADE;
