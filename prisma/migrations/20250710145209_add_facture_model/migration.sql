-- CreateTable
CREATE TABLE "Facture" (
    "id" TEXT NOT NULL,
    "contratId" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "montant" DOUBLE PRECISION NOT NULL,
    "statut" TEXT NOT NULL DEFAULT 'en attente',

    CONSTRAINT "Facture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Facture" ADD CONSTRAINT "Facture_contratId_fkey" FOREIGN KEY ("contratId") REFERENCES "Contrat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
