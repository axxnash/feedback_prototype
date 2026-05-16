require("dotenv").config();

const bcrypt = require("bcrypt");
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient, Role, ApprovalStatus } = require("../generated/prisma");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Add it to backend/.env before running the seed.");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const email = "admin@feedback.local";
  const existingAdmin = await prisma.user.findUnique({ where: { email } });

  if (existingAdmin) {
    console.log("Admin seed already exists.");
    return;
  }

  const hashedPassword = await bcrypt.hash("Admin123!", 10);

  await prisma.user.create({
    data: {
      name: "FeedBack Admin",
      email,
      password: hashedPassword,
      role: Role.ADMIN,
      approvalStatus: ApprovalStatus.APPROVED,
      organizationName: "FeedBack Platform",
      phoneNumber: "0123456789"
    }
  });

  console.log("Seeded admin account:");
  console.log("email:", email);
  console.log("password:", "Admin123!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
