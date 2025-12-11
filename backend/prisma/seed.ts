import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'demo@materoom.local' },
    update: {},
    create: { email: 'demo@materoom.local', passwordHash, name: 'Demo User' },
  });

  const count = await prisma.property.count();
  if (count === 0) {
    await prisma.property.createMany({
      data: [
        { title: 'Cozy Studio', description: 'Great starter place', price: 8000, location: 'Downtown', bedrooms: 1, bathrooms: 1, areaSqFt: 400 },
        { title: 'Family Home', description: 'Spacious and bright', price: 25000, location: 'Suburbs', bedrooms: 3, bathrooms: 2, areaSqFt: 1500 },
        { title: 'Modern Loft', description: 'Open concept living', price: 18000, location: 'City Center', bedrooms: 2, bathrooms: 1, areaSqFt: 900 },
      ],
    });
  }

  console.log('Seed complete. User id:', user.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


