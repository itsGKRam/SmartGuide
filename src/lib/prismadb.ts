import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const globalPrisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  if (!globalThis.prisma) {
    globalThis.prisma = globalPrisma;
  }
}

export default globalPrisma;
