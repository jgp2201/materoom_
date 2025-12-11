-- CreateTable
CREATE TABLE "RoomListing" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "approxRent" INTEGER NOT NULL,
    "occupancy" TEXT NOT NULL,
    "highlights" TEXT,
    "amenities" TEXT,
    "phoneVisibility" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RoomListing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
