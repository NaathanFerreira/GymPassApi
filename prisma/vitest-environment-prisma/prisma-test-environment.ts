import "dotenv/config";

import { randomUUID } from "crypto";
import { execSync } from "node:child_process";
import { Environment } from "vitest";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// rodar comando npm link dentro dessa pasta vitest-environment-prisma para funcionar como se fosse um pacote local para usar como dependencia no
// package.json do projeto raiz

// rodar comando npm link vitest-environment-prisma na raiz do projeto

function generateDatabseUrl(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("Please provide a DATABASE_URL environment variable");
  }

  // postgresql://docker:docker@localhost:5432/apisolid?schema=public
  const url = new URL(process.env.DATABASE_URL);

  // substitui o param schema=public pelo que foi passado por parametro
  url.searchParams.set("schema", schema);

  return url.toString();
}

export default <Environment>{
  name: "prisma",
  // código que será executado antes de cada ARQUIVO de testes
  async setup() {
    const schema = randomUUID();
    const databaseURL = generateDatabseUrl(schema);

    process.env.DATABASE_URL = databaseURL;

    // executa comandos do terminal
    // roda as migrations para o novo banco
    execSync("npx prisma migrate deploy");

    return {
      // executa após os testes
      async teardown() {
        await prisma.$executeRawUnsafe(
          `DROP SCHEMA IF EXISTS "${schema}" CASCADE`
        );

        await prisma.$disconnect();
      },
    };
  },
};
