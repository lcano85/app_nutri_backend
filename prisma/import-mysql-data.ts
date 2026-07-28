import { PrismaClient } from '@prisma/client';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const prisma = new PrismaClient();

async function insert(name: string, operation: Promise<{ count:number }>) {
  const result = await operation;
  console.log(`${name}: ${result.count}`);
}

async function main() {
  const path = join(tmpdir(), 'nutricare-postgresql-data-backup.json');
  const data = JSON.parse(await readFile(path, 'utf8'));

  await insert('Estados', prisma.status.createMany({ data:data.statuses, skipDuplicates:true }));
  await insert('Roles', prisma.role.createMany({ data:data.roles, skipDuplicates:true }));
  await insert('Permisos', prisma.permission.createMany({ data:data.permissions, skipDuplicates:true }));
  await insert('Asignaciones de permisos', prisma.rolePermission.createMany({ data:data.rolePermissions, skipDuplicates:true }));
  await insert('Menús principales', prisma.menuItem.createMany({ data:data.menuItems.filter((item:any)=>!item.parentId), skipDuplicates:true }));
  await insert('Submenús', prisma.menuItem.createMany({ data:data.menuItems.filter((item:any)=>item.parentId), skipDuplicates:true }));
  await insert('Usuarios', prisma.user.createMany({ data:data.users, skipDuplicates:true }));
  await insert('Logs de ingreso', prisma.loginLog.createMany({ data:data.loginLogs, skipDuplicates:true }));
  await insert('Pacientes', prisma.patient.createMany({ data:data.patients, skipDuplicates:true }));
  await insert('Alimentos', prisma.food.createMany({ data:data.foods, skipDuplicates:true }));
  await insert('Sustituciones', prisma.foodSubstitution.createMany({ data:data.foodSubstitutions, skipDuplicates:true }));
  await insert('Mediciones', prisma.measurement.createMany({ data:data.measurements, skipDuplicates:true }));
  await insert('Citas', prisma.appointment.createMany({ data:data.appointments, skipDuplicates:true }));
  await insert('Mensajes', prisma.message.createMany({ data:data.messages, skipDuplicates:true }));
  await insert('Pagos', prisma.payment.createMany({ data:data.payments, skipDuplicates:true }));
  await insert('Recursos educativos', prisma.educationalResource.createMany({ data:data.educationalResources, skipDuplicates:true }));
  await insert('Documentos', prisma.patientDocument.createMany({ data:data.patientDocuments, skipDuplicates:true }));
  await insert('Hidratación', prisma.waterLog.createMany({ data:data.waterLogs, skipDuplicates:true }));
  await insert('Actividad física', prisma.activityLog.createMany({ data:data.activityLogs, skipDuplicates:true }));
  await insert('Recetas', prisma.recipe.createMany({ data:data.recipes, skipDuplicates:true }));
  await insert('Planes alimentarios', prisma.mealPlan.createMany({ data:data.mealPlans, skipDuplicates:true }));
  await insert('Objetivos', prisma.goal.createMany({ data:data.goals, skipDuplicates:true }));
  await insert('Diario alimentario', prisma.foodDiaryEntry.createMany({ data:data.foodDiaryEntries, skipDuplicates:true }));
}

main().finally(() => prisma.$disconnect());
