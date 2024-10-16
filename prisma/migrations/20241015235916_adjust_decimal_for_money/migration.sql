/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Decimal(12,2)`.
  - You are about to alter the column `discountPrice` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Decimal(12,2)`.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "discountPrice" SET DATA TYPE DECIMAL(12,2);
