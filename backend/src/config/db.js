const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("../../generated/prisma");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Add it to backend/.env before starting the server.");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({ adapter });

module.exports = prisma;
