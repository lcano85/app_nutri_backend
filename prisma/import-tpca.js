'use strict';

const { PrismaClient } = require('@prisma/client');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');

const prisma = new PrismaClient();
const sourcePath = resolve(__dirname, 'data', 'tpca-edicion-11.json');
const records = JSON.parse(readFileSync(sourcePath, 'utf8'));

async function main() {
  await prisma.$transaction(async (database) => {
    await database.tablaperuanaalimento.deleteMany({
      where: { origen: 'ins_tpca_11_2023' },
    });

    for (let index = 0; index < records.length; index += 250) {
      await database.tablaperuanaalimento.createMany({
        data: records.slice(index, index + 250),
      });
    }
  }, { timeout: 120000 });

  console.log(`${records.length} registros oficiales cargados en tablaperuanaalimento.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
