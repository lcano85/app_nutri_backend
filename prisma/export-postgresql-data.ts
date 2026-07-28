import { PrismaClient } from '@prisma/client';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const prisma = new PrismaClient();

async function main() {
  const data = {
    statuses: await prisma.status.findMany(),
    roles: await prisma.role.findMany(),
    permissions: await prisma.permission.findMany(),
    rolePermissions: await prisma.rolePermission.findMany(),
    menuItems: await prisma.menuItem.findMany(),
    users: await prisma.user.findMany(),
    loginLogs: await prisma.loginLog.findMany(),
    patients: await prisma.patient.findMany(),
    foods: await prisma.food.findMany(),
    foodSubstitutions: await prisma.foodSubstitution.findMany(),
    measurements: await prisma.measurement.findMany(),
    appointments: await prisma.appointment.findMany(),
    messages: await prisma.message.findMany(),
    payments: await prisma.payment.findMany(),
    educationalResources: await prisma.educationalResource.findMany(),
    patientDocuments: await prisma.patientDocument.findMany(),
    waterLogs: await prisma.waterLog.findMany(),
    activityLogs: await prisma.activityLog.findMany(),
    recipes: await prisma.recipe.findMany(),
    mealPlans: await prisma.mealPlan.findMany(),
    goals: await prisma.goal.findMany(),
    foodDiaryEntries: await prisma.foodDiaryEntry.findMany(),
  };
  const path = join(tmpdir(), 'nutricare-postgresql-data-backup.json');
  await writeFile(path, JSON.stringify(data, null, 2), 'utf8');
  const counts = Object.fromEntries(Object.entries(data).map(([name, rows]) => [name, rows.length]));
  console.log(JSON.stringify({ path, counts }, null, 2));
}

main().finally(() => prisma.$disconnect());
