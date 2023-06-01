-- CreateTable
CREATE TABLE "Show" (
    "id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),

    CONSTRAINT "Cep_pkey" PRIMARY KEY ("id")
);
