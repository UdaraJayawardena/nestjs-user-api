import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('udara@123', 10);

  const user = await prisma.user.create({
    data: {
      email: 'udara123@gmail.com',
      username: 'udara123',
      password: hashedPassword,
    },
  });

  console.log('Seeding complete! Default User created:', user);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
