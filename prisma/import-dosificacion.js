const { PrismaClient } = require('@prisma/client');
const data = require('./data/dosificacion-alimentos-2005.json');

const prisma = new PrismaClient();

async function main() {
  for (const category of data.categories) {
    await prisma.dosificacioncategoria.upsert({
      where: { id: category.id },
      update: { codigo: category.codigo, nombre: category.nombre, estado: 1 },
      create: { ...category, estado: 1 },
    });
  }
  let total = 0;
  for (const food of data.foods) {
    const alimentoId = `dosificacion-alimento-${String(food.orden).padStart(3, '0')}`;
    await prisma.dosificacionalimento.upsert({
      where: { codigo: food.codigo },
      update: { orden: food.orden, categoria_id: food.categoria_id, nombre: food.nombre, estado: 1 },
      create: { id: alimentoId, codigo: food.codigo, orden: food.orden, categoria_id: food.categoria_id, nombre: food.nombre },
    });
    for (const [index, row] of food.dosificaciones.entries()) {
      const id = `dosificacion-${String(food.orden).padStart(3, '0')}-${String(index + 1).padStart(2, '0')}`;
      await prisma.dosificacionpreparacion.upsert({
        where: { id },
        update: { ...row, alimento_id: alimentoId, fuente: data.fuente, estado: 1 },
        create: { id, ...row, alimento_id: alimentoId, fuente: data.fuente, estado: 1 },
      });
      total++;
    }
  }
  console.log(`Importados ${data.categories.length} grupos, ${data.foods.length} alimentos y ${total} dosificaciones.`);
}

main().finally(() => prisma.$disconnect());
