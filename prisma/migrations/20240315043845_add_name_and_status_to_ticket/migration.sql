/*
  Warnings:

  - Added the required column `firstName` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tickets" ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;
