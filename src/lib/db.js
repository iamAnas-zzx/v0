import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis;

const connectionString = process.env.DATABASE_URL;

const adapter = connectionString ? new PrismaPg(connectionString) : undefined;

const db =
  globalForPrisma.prisma instanceof PrismaClient
    ? globalForPrisma.prisma
    : new PrismaClient({
        adapter,
        log: ["query", "error", "warn", "info"],
      });

if (process.env.NODE_ENV === "development") {
  globalForPrisma.prisma = db;
}

export default db;