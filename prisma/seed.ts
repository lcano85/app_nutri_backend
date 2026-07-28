import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
const prisma = new PrismaClient();
async function main() {
  const permissionDefinitions = [
    ['dashboard.view', 'Ver dashboard', 'dashboard'],
    ['users.view', 'Ver usuarios', 'users'], ['users.create', 'Crear usuarios', 'users'], ['users.update', 'Editar usuarios', 'users'], ['users.delete', 'Eliminar usuarios', 'users'],
    ['roles.view', 'Ver perfiles', 'roles'], ['roles.create', 'Crear perfiles', 'roles'], ['roles.update', 'Editar perfiles', 'roles'], ['roles.delete', 'Eliminar perfiles', 'roles'],
    ['permissions.view', 'Ver permisos', 'permissions'], ['permissions.create', 'Crear permisos', 'permissions'], ['permissions.update', 'Editar permisos', 'permissions'], ['permissions.delete', 'Eliminar permisos', 'permissions'],
    ['statuses.view', 'Ver estados', 'statuses'], ['statuses.create', 'Crear estados', 'statuses'], ['statuses.update', 'Editar estados', 'statuses'], ['statuses.delete', 'Eliminar estados', 'statuses'],
    ['menus.view', 'Ver menús', 'menus'], ['menus.create', 'Crear menús', 'menus'], ['menus.update', 'Editar menús', 'menus'], ['menus.delete', 'Eliminar menús', 'menus'],
    ['login-logs.view', 'Ver logs de ingreso', 'login-logs'],
    ['patients.view', 'Ver pacientes', 'patients'], ['patients.create', 'Crear pacientes', 'patients'], ['patients.update', 'Editar pacientes', 'patients'], ['patients.delete', 'Eliminar pacientes', 'patients'],
    ['appointments.view', 'Ver agenda', 'appointments'], ['appointments.create', 'Crear citas', 'appointments'], ['appointments.update', 'Editar citas', 'appointments'], ['appointments.delete', 'Eliminar citas', 'appointments'],
    ['measurements.view', 'Ver mediciones', 'measurements'], ['measurements.create', 'Registrar mediciones', 'measurements'], ['measurements.delete', 'Eliminar mediciones', 'measurements'],
    ['recipes.view', 'Ver recetas', 'recipes'], ['recipes.create', 'Crear recetas', 'recipes'], ['recipes.update', 'Editar recetas', 'recipes'], ['recipes.delete', 'Eliminar recetas', 'recipes'],
    ['plans.view', 'Ver planes', 'plans'], ['plans.create', 'Crear planes', 'plans'], ['plans.update', 'Editar planes', 'plans'], ['plans.delete', 'Eliminar planes', 'plans'],
    ['tracking.view', 'Ver seguimiento', 'tracking'], ['tracking.create', 'Registrar seguimiento', 'tracking'], ['tracking.update', 'Editar seguimiento', 'tracking'], ['tracking.delete', 'Eliminar seguimiento', 'tracking'],
    ['messages.view', 'Ver mensajes', 'messages'], ['messages.create', 'Enviar mensajes', 'messages'], ['settings.view', 'Ver configuración', 'settings'],
    ['foods.view', 'Ver alimentos', 'foods'], ['foods.create', 'Crear alimentos', 'foods'], ['foods.update', 'Editar alimentos', 'foods'], ['foods.delete', 'Eliminar alimentos', 'foods'],
    ['diary.view', 'Ver diario alimentario', 'diary'], ['diary.create', 'Registrar diario alimentario', 'diary'], ['diary.delete', 'Eliminar registros del diario', 'diary'],
    ['payments.view', 'Ver pagos', 'payments'], ['payments.create', 'Registrar pagos', 'payments'], ['payments.update', 'Editar pagos', 'payments'], ['payments.delete', 'Eliminar pagos', 'payments'],
    ['resources.view', 'Ver material educativo', 'resources'], ['resources.create', 'Crear material educativo', 'resources'], ['resources.update', 'Editar material educativo', 'resources'], ['resources.delete', 'Eliminar material educativo', 'resources'],
    ['portal.view', 'Ver portal del paciente', 'portal'],
  ] as const;
  for (const [code, name, module] of permissionDefinitions) {
    await prisma.permission.upsert({ where: { code }, update: { name, module }, create: { code, name, module } });
  }
  const adminRole = await prisma.role.upsert({ where: { code: 'ADMIN' }, update: {}, create: { name: 'Administrador', code: 'ADMIN', description: 'Acceso total al sistema', isSystem: true } });
  const nutritionistRole = await prisma.role.upsert({ where: { code: 'NUTRITIONIST' }, update: {}, create: { name: 'Nutricionista', code: 'NUTRITIONIST', isSystem: true } });
  const patientRole = await prisma.role.upsert({ where: { code: 'PATIENT' }, update: {}, create: { name: 'Paciente', code: 'PATIENT', isSystem: true } });
  const permissions = await prisma.permission.findMany({ select: { id: true } });
  await prisma.rolePermission.createMany({ data: permissions.map(permission => ({ roleId: adminRole.id, permissionId: permission.id })), skipDuplicates: true });
  const menuPermission = await prisma.permission.findUniqueOrThrow({ where: { code: 'menus.view' } });
  const maintenanceMenu = await prisma.menuItem.upsert({ where: { id: 'menu-mantenimiento' }, update: {}, create: { id: 'menu-mantenimiento', name: 'Mantenimiento', icon: 'Wrench', sortOrder: 90 } });
  await prisma.menuItem.upsert({ where: { id: 'menu-administracion-menus' }, update: { permissionId: menuPermission.id }, create: { id: 'menu-administracion-menus', name: 'Menú', icon: 'MenuSquare', path: '/dashboard/menus', sortOrder: 1, parentId: maintenanceMenu.id, permissionId: menuPermission.id } });
  const activeStatus = await prisma.status.upsert({ where: { code: 'ACTIVO' }, update: {}, create: { name: 'Activo', code: 'ACTIVO', description: 'Usuario habilitado para ingresar', color: 'emerald', sortOrder: 1 } });
  await prisma.status.upsert({ where: { code: 'INVITADO' }, update: {}, create: { name: 'Invitado', code: 'INVITADO', description: 'Usuario pendiente de completar su acceso', color: 'amber', sortOrder: 2 } });
  await prisma.status.upsert({ where: { code: 'SUSPENDIDO' }, update: {}, create: { name: 'Suspendido', code: 'SUSPENDIDO', description: 'Acceso temporalmente bloqueado', color: 'red', sortOrder: 3 } });
  const passwordHash = await bcrypt.hash('Admin123!', 12);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@nutricare.local' },
    update: { passwordHash, roleId: adminRole.id, statusId: activeStatus.id },
    create: { email: 'admin@nutricare.local', passwordHash, firstName: 'Admin', lastName: 'NutriCare', roleId: adminRole.id, statusId: activeStatus.id },
  });

  // Datos demostrativos idempotentes. Los identificadores fijos evitan duplicados.
  const demoPasswordHash = await bcrypt.hash('Demo123!', 12);
  await prisma.user.upsert({
    where: { email: 'nutricionista@nutricare.local' },
    update: { passwordHash: demoPasswordHash, roleId: nutritionistRole.id, statusId: activeStatus.id },
    create: { email: 'nutricionista@nutricare.local', passwordHash: demoPasswordHash, firstName: 'Valeria', lastName: 'Ramos', roleId: nutritionistRole.id, statusId: activeStatus.id },
  });
  // El administrador es el profesional responsable del caso demo para que los
  // registros aparezcan inmediatamente en la sesión administrativa habitual.
  const nutritionist = adminUser;
  const clinicalPermissions = await prisma.permission.findMany({
    where: { module: { in: ['dashboard','patients','appointments','measurements','recipes','plans','tracking','messages','foods','diary','payments','resources','portal'] } },
    select: { id: true },
  });
  await prisma.rolePermission.createMany({ data: clinicalPermissions.map(({ id }) => ({ roleId: nutritionistRole.id, permissionId: id })), skipDuplicates: true });

  const patientPeople = [
    { id:'demo-patient-user-maria', email:'maria@nutricare.local', firstName:'María Fernanda', lastName:'López', documentNumber:'74851236', phone:'987654321', birthDate:new Date('1991-04-18'), sex:'Femenino', heightCm:164, allergies:['Maní'], conditions:['Resistencia a la insulina'], dietaryPreferences:['Mediterránea'], acquisitionSource:'REFERIDO', sourceDetail:'Carolina Méndez', notes:'Busca mejorar composición corporal y energía diaria.' },
    { id:'demo-patient-user-diego', email:'diego@nutricare.local', firstName:'Diego', lastName:'Ramírez', documentNumber:'71234568', phone:'986123456', birthDate:new Date('1985-09-03'), sex:'Masculino', heightCm:176, allergies:[], conditions:['Hipertensión'], dietaryPreferences:['Bajo en sodio'], acquisitionSource:'FACEBOOK', sourceDetail:'Campaña de control metabólico', notes:'Realiza caminatas tres veces por semana.' },
    { id:'demo-patient-user-sofia', email:'sofia@nutricare.local', firstName:'Sofía', lastName:'Torres', documentNumber:'70125896', phone:'985412369', birthDate:new Date('1997-12-11'), sex:'Femenino', heightCm:159, allergies:['Lactosa'], conditions:[], dietaryPreferences:['Sin lactosa'], acquisitionSource:'INSTAGRAM', sourceDetail:'Contenido sobre nutrición deportiva', notes:'Objetivo: rendimiento deportivo y ganancia muscular.' },
  ];
  const demoPatients = [];
  for (const person of patientPeople) {
    const user = await prisma.user.upsert({
      where: { email: person.email },
      update: { passwordHash:demoPasswordHash, firstName:person.firstName, lastName:person.lastName, roleId:patientRole.id, statusId:activeStatus.id },
      create: { id:person.id, email:person.email, passwordHash:demoPasswordHash, firstName:person.firstName, lastName:person.lastName, roleId:patientRole.id, statusId:activeStatus.id },
    });
    const patient = await prisma.patient.upsert({
      where: { userId:user.id },
      update: { nutritionistId:nutritionist.id, documentNumber:person.documentNumber, phone:person.phone, birthDate:person.birthDate, sex:person.sex, heightCm:person.heightCm, allergies:person.allergies, conditions:person.conditions, dietaryPreferences:person.dietaryPreferences, acquisitionSource:person.acquisitionSource, sourceDetail:person.sourceDetail, notes:person.notes },
      create: { id:`demo-patient-${person.id}`, userId:user.id, nutritionistId:nutritionist.id, documentNumber:person.documentNumber, phone:person.phone, birthDate:person.birthDate, sex:person.sex, heightCm:person.heightCm, allergies:person.allergies, conditions:person.conditions, dietaryPreferences:person.dietaryPreferences, acquisitionSource:person.acquisitionSource, sourceDetail:person.sourceDetail, notes:person.notes },
    });
    demoPatients.push(patient);
  }
  const [maria, diego, sofia] = demoPatients;
  const now = new Date();
  const daysFromNow = (days:number, hour=9) => { const date = new Date(now); date.setDate(date.getDate()+days); date.setHours(hour,0,0,0); return date; };
  await prisma.loginLog.upsert({where:{id:'demo-login-maria'},update:{createdAt:daysFromNow(-1,19)},create:{id:'demo-login-maria',userId:maria.userId!,email:'maria@nutricare.local',success:true,ipAddress:'127.0.0.1',userAgent:'Aplicación web del paciente',createdAt:daysFromNow(-1,19)}});
  await prisma.loginLog.upsert({where:{id:'demo-login-sofia'},update:{createdAt:daysFromNow(-8,8)},create:{id:'demo-login-sofia',userId:sofia.userId!,email:'sofia@nutricare.local',success:true,ipAddress:'127.0.0.1',userAgent:'Aplicación web del paciente',createdAt:daysFromNow(-8,8)}});

  const foods = [
    { id:'demo-food-oats', name:'Avena en hojuelas', category:'Cereales', servingName:'½ taza', servingGrams:40, calories:152, proteinGrams:5.1, carbohydrateGrams:27.1, fatGrams:2.8, fiberGrams:4.1, sodiumMg:2 },
    { id:'demo-food-rice', name:'Arroz integral cocido', category:'Cereales', servingName:'1 taza', servingGrams:195, calories:216, proteinGrams:5, carbohydrateGrams:44.8, fatGrams:1.8, fiberGrams:3.5, sodiumMg:10 },
    { id:'demo-food-quinoa', name:'Quinua cocida', category:'Cereales', servingName:'1 taza', servingGrams:185, calories:222, proteinGrams:8.1, carbohydrateGrams:39.4, fatGrams:3.6, fiberGrams:5.2, sodiumMg:13 },
    { id:'demo-food-chicken', name:'Pechuga de pollo', category:'Proteínas', servingName:'1 filete', servingGrams:120, calories:198, proteinGrams:37.2, carbohydrateGrams:0, fatGrams:4.3, fiberGrams:0, sodiumMg:89 },
    { id:'demo-food-egg', name:'Huevo sancochado', category:'Proteínas', servingName:'1 unidad', servingGrams:50, calories:78, proteinGrams:6.3, carbohydrateGrams:0.6, fatGrams:5.3, fiberGrams:0, sodiumMg:62 },
    { id:'demo-food-avocado', name:'Palta', category:'Grasas saludables', servingName:'¼ unidad', servingGrams:50, calories:80, proteinGrams:1, carbohydrateGrams:4.3, fatGrams:7.4, fiberGrams:3.4, sodiumMg:4 },
  ];
  for (const food of foods) await prisma.food.upsert({ where:{id:food.id}, update:food, create:food });
  await prisma.foodSubstitution.upsert({
    where:{foodId_substituteFoodId:{foodId:'demo-food-rice',substituteFoodId:'demo-food-quinoa'}},
    update:{equivalentType:'ENERGIA',foodQuantityGrams:195,substituteQuantityGrams:180,notes:'Alternativa con mayor aporte de proteína y fibra.'},
    create:{foodId:'demo-food-rice',substituteFoodId:'demo-food-quinoa',equivalentType:'ENERGIA',foodQuantityGrams:195,substituteQuantityGrams:180,notes:'Alternativa con mayor aporte de proteína y fibra.'},
  });

  const measurements = [
    ['demo-measurement-maria-1',maria.id,-45,72.4,34.2,86], ['demo-measurement-maria-2',maria.id,-15,70.8,32.9,83],
    ['demo-measurement-diego-1',diego.id,-30,89.5,28.1,101], ['demo-measurement-diego-2',diego.id,-7,87.9,27.2,98],
    ['demo-measurement-sofia-1',sofia.id,-21,54.2,22.1,67], ['demo-measurement-sofia-2',sofia.id,-3,55.1,21.8,66],
  ] as const;
  for (const [id,patientId,day,weightKg,bodyFatPct,waistCm] of measurements) await prisma.measurement.upsert({where:{id},update:{measuredAt:daysFromNow(day),weightKg,bodyFatPct,waistCm},create:{id,patientId,measuredAt:daysFromNow(day),weightKg,bodyFatPct,waistCm,notes:'Control antropométrico de demostración.'}});

  const appointments = [
    {id:'demo-appointment-maria',patientId:maria.id,startsAt:daysFromNow(1,9),endsAt:daysFromNow(1,10),status:'CONFIRMED' as const,reason:'Seguimiento mensual',consultationType:'PRESENCIAL'},
    {id:'demo-appointment-diego',patientId:diego.id,startsAt:daysFromNow(1,11),endsAt:daysFromNow(1,12),status:'SCHEDULED' as const,reason:'Control de presión y peso',consultationType:'VIRTUAL',meetingProvider:'GOOGLE_MEET',meetingUrl:'https://meet.google.com/demo-nutricare'},
    {id:'demo-appointment-sofia',patientId:sofia.id,startsAt:daysFromNow(2,15),endsAt:daysFromNow(2,16),status:'CONFIRMED' as const,reason:'Ajuste de plan deportivo',consultationType:'PRESENCIAL'},
  ];
  for (const appointment of appointments) await prisma.appointment.upsert({where:{id:appointment.id},update:{...appointment,nutritionistId:nutritionist.id},create:{...appointment,nutritionistId:nutritionist.id,reminderMinutes:1440}});

  await prisma.recipe.upsert({where:{id:'demo-recipe-bowl'},update:{nutritionistId:nutritionist.id},create:{id:'demo-recipe-bowl',nutritionistId:nutritionist.id,name:'Bowl de quinua y pollo',description:'Almuerzo equilibrado rico en proteína y fibra.',ingredients:[{name:'Quinua cocida',quantity:'180 g'},{name:'Pechuga de pollo',quantity:'120 g'},{name:'Palta',quantity:'50 g'}],instructions:'Servir la quinua, añadir el pollo a la plancha y terminar con palta y vegetales.',servings:1,preparationMinutes:25,calories:520,proteinGrams:44,carbohydrateGrams:48,fatGrams:17}});
  await prisma.mealPlan.upsert({where:{id:'demo-plan-maria'},update:{nutritionistId:nutritionist.id},create:{id:'demo-plan-maria',patientId:maria.id,nutritionistId:nutritionist.id,name:'Plan metabólico inicial',description:'Plan demostrativo de cinco comidas.',startsAt:daysFromNow(-7),endsAt:daysFromNow(21),status:'ACTIVO',targetCalories:1750,targetProteinGrams:105,targetCarbohydrateGrams:190,targetFatGrams:55,meals:{desayuno:'Avena, fruta y huevo',mediaManana:'Yogur sin azúcar',almuerzo:'Pollo, quinua y ensalada',merienda:'Fruta y frutos secos',cena:'Tortilla de vegetales'},recommendations:'Beber 2 litros de agua y respetar horarios.'}});
  await prisma.goal.upsert({where:{id:'demo-goal-maria'},update:{currentValue:70.8},create:{id:'demo-goal-maria',patientId:maria.id,title:'Alcanzar un peso saludable',description:'Reducción progresiva conservando masa muscular.',targetValue:67,currentValue:70.8,unit:'kg',status:'EN_PROGRESO',dueDate:daysFromNow(60)}});
  await prisma.goal.upsert({where:{id:'demo-goal-sofia'},update:{currentValue:55.1},create:{id:'demo-goal-sofia',patientId:sofia.id,title:'Aumentar masa muscular',targetValue:58,currentValue:55.1,unit:'kg',status:'EN_PROGRESO',dueDate:daysFromNow(90)}});
  await prisma.foodDiaryEntry.upsert({where:{id:'demo-diary-maria'},update:{},create:{id:'demo-diary-maria',patientId:maria.id,occurredAt:daysFromNow(0,8),mealType:'DESAYUNO',description:'Avena con arándanos y huevo sancochado',calories:390,waterMl:350,mood:'Con energía',notes:'Cumplió la porción indicada.'}});
  await prisma.waterLog.upsert({where:{id:'demo-water-maria'},update:{occurredAt:daysFromNow(0,10)},create:{id:'demo-water-maria',patientId:maria.id,occurredAt:daysFromNow(0,10),amountMl:500}});
  await prisma.activityLog.upsert({where:{id:'demo-activity-sofia'},update:{occurredAt:daysFromNow(-1,18)},create:{id:'demo-activity-sofia',patientId:sofia.id,occurredAt:daysFromNow(-1,18),activity:'Entrenamiento de fuerza',durationMinutes:55,caloriesBurned:320,notes:'Rutina de tren inferior.'}});
  await prisma.message.upsert({where:{id:'demo-message-maria'},update:{senderId:nutritionist.id},create:{id:'demo-message-maria',patientId:maria.id,senderId:nutritionist.id,content:'¡Muy buen avance! Mantén la hidratación y registra tu cena.',readAt:null}});
  await prisma.payment.upsert({where:{id:'demo-payment-maria'},update:{},create:{id:'demo-payment-maria',patientId:maria.id,concept:'Consulta de seguimiento',amount:120,currency:'PEN',status:'PAGADO',method:'Yape',paidAt:daysFromNow(-2),reference:'DEMO-001'}});
  await prisma.payment.upsert({where:{id:'demo-payment-diego'},update:{},create:{id:'demo-payment-diego',patientId:diego.id,concept:'Consulta virtual',amount:100,currency:'PEN',status:'PENDIENTE',method:'Transferencia',dueDate:daysFromNow(1),reference:'DEMO-002'}});
  await prisma.educationalResource.upsert({where:{id:'demo-resource-hydration'},update:{nutritionistId:nutritionist.id},create:{id:'demo-resource-hydration',nutritionistId:nutritionist.id,title:'Guía práctica de hidratación',category:'Hábitos saludables',type:'ARTICULO',content:'Distribuye el consumo de agua durante el día y aumenta la cantidad según actividad y clima.',active:true}});
  await prisma.patientDocument.upsert({where:{id:'demo-document-maria'},update:{},create:{id:'demo-document-maria',patientId:maria.id,name:'Resultados de laboratorio',category:'Laboratorio',url:'https://example.com/documento-demostrativo.pdf',notes:'Enlace demostrativo, no contiene información real.'}});
  await prisma.loginLog.upsert({where:{id:'demo-login-success'},update:{createdAt:daysFromNow(0,8)},create:{id:'demo-login-success',userId:adminUser.id,email:adminUser.email,success:true,ipAddress:'127.0.0.1',userAgent:'Navegador de demostración',createdAt:daysFromNow(0,8)}});
  await prisma.loginLog.upsert({where:{id:'demo-login-failed'},update:{createdAt:daysFromNow(-1,20)},create:{id:'demo-login-failed',email:'usuario.incorrecto@demo.local',success:false,ipAddress:'127.0.0.1',reason:'Credenciales inválidas',createdAt:daysFromNow(-1,20)}});
}
main().finally(() => prisma.$disconnect());
