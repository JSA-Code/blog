import { PrismaClient } from "@prisma/client";
import env from "@/utils/env";

// How does this section work?
declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // How does global variable work?
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;
