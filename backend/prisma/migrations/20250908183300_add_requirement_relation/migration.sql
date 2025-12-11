-- CreateTable
CREATE TABLE "Requirement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "approxRent" INTEGER NOT NULL,
    "lookingFor" TEXT NOT NULL,
    "occupancy" TEXT NOT NULL,
    "highlights" TEXT,
    "interestedInPg" BOOLEAN NOT NULL,
    "phoneVisibility" TEXT NOT NULL,
    "interestedInTeams" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Requirement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
