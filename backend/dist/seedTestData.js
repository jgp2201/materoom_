"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function seedTestData() {
    try {
        console.log('Seeding test data...');
        // Create test users
        const user1 = await prisma.user.upsert({
            where: { email: 'test1@example.com' },
            update: {},
            create: {
                email: 'test1@example.com',
                passwordHash: 'hashedpassword1',
                name: 'Aman Bodila',
            },
        });
        const user2 = await prisma.user.upsert({
            where: { email: 'test2@example.com' },
            update: {},
            create: {
                email: 'test2@example.com',
                passwordHash: 'hashedpassword2',
                name: 'Priya Sharma',
            },
        });
        const user3 = await prisma.user.upsert({
            where: { email: 'test3@example.com' },
            update: {},
            create: {
                email: 'test3@example.com',
                passwordHash: 'hashedpassword3',
                name: 'Rahul Kumar',
            },
        });
        // Create room listings
        await prisma.roomListing.upsert({
            where: { id: 'listing-1' },
            update: {},
            create: {
                id: 'listing-1',
                userId: user1.id,
                location: 'Ahmedabad, Gujarat',
                approxRent: 6000,
                occupancy: 'Shared',
                lookingFor: 'Any',
                highlights: 'WiFi,AC,TV',
                amenities: 'WiFi,AC,TV,Parking',
                phoneVisibility: 'public',
                description: 'Looking for a roommate to share a 2BHK flat in Ahmedabad.',
            },
        });
        await prisma.roomListing.upsert({
            where: { id: 'listing-2' },
            update: {},
            create: {
                id: 'listing-2',
                userId: user2.id,
                location: 'Mumbai, Maharashtra',
                approxRent: 12000,
                occupancy: 'Single',
                lookingFor: 'Female',
                highlights: 'WiFi,AC,TV,Fridge',
                amenities: 'WiFi,AC,TV,Fridge,Security',
                phoneVisibility: 'public',
                description: 'Beautiful 1BHK available for rent in Mumbai.',
            },
        });
        // Create requirements
        await prisma.requirement.upsert({
            where: { id: 'req-1' },
            update: {},
            create: {
                id: 'req-1',
                userId: user3.id,
                location: 'Delhi, NCR',
                approxRent: 9500,
                lookingFor: 'Male',
                occupancy: 'Shared',
                highlights: 'WiFi,AC',
                interestedInPg: true,
                phoneVisibility: 'public',
                interestedInTeams: true,
                description: 'Looking for a room in Delhi with good connectivity.',
            },
        });
        console.log('Test data seeded successfully!');
        console.log('Users created:', { user1: user1.name, user2: user2.name, user3: user3.name });
    }
    catch (error) {
        console.error('Error seeding test data:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
seedTestData();
