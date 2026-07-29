"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicalService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClinicalService = class ClinicalService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    appointments(userId) { return this.prisma.appointment.findMany({ where: { nutritionistId: userId }, include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } }, orderBy: { startsAt: 'asc' } }); }
    async validateAppointmentSchedule(nutritionistId, d, excludeId) {
        const startsAt = new Date(d.startsAt), endsAt = new Date(d.endsAt);
        if (Number.isNaN(startsAt.getTime()) || Number.isNaN(endsAt.getTime()) || endsAt <= startsAt)
            throw new common_1.BadRequestException('La hora de fin debe ser posterior a la hora de inicio.');
        if (startsAt.toDateString() !== endsAt.toDateString())
            throw new common_1.BadRequestException('La cita debe iniciar y finalizar el mismo día.');
        const durationMinutes = (endsAt.getTime() - startsAt.getTime()) / 60000;
        if (durationMinutes < 15)
            throw new common_1.BadRequestException('La cita debe tener una duración mínima de 15 minutos.');
        if (durationMinutes > 480)
            throw new common_1.BadRequestException('La cita no puede durar más de 8 horas.');
        const conflict = await this.prisma.appointment.findFirst({ where: { nutritionistId, id: excludeId ? { not: excludeId } : undefined, status: { not: 'CANCELLED' }, startsAt: { lt: endsAt }, endsAt: { gt: startsAt } }, include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } } });
        if (conflict) {
            const patient = `${conflict.patient.user?.firstName ?? ''} ${conflict.patient.user?.lastName ?? ''}`.trim();
            throw new common_1.BadRequestException(`El horario se cruza con la cita de ${patient || 'otro paciente'} de ${conflict.startsAt.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })} a ${conflict.endsAt.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}.`);
        }
        return { startsAt, endsAt };
    }
    async createAppointment(userId, d) {
        const dates = await this.validateAppointmentSchedule(userId, d);
        return this.prisma.appointment.create({ data: { ...d, ...dates, nutritionistId: userId, status: d.status || 'SCHEDULED' } });
    }
    async updateAppointment(userId, id, d) {
        const current = await this.prisma.appointment.findUniqueOrThrow({ where: { id } });
        if (current.nutritionistId !== userId)
            throw new common_1.BadRequestException('No tienes permiso para modificar esta cita.');
        const dates = await this.validateAppointmentSchedule(userId, d, id);
        return this.prisma.appointment.update({ where: { id }, data: { ...d, ...dates, status: d.status } });
    }
    deleteAppointment(id) { return this.prisma.appointment.delete({ where: { id } }); }
    measurements(userId) { return this.prisma.measurement.findMany({ where: { patient: { nutritionistId: userId } }, include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } }, orderBy: { measuredAt: 'desc' } }); }
    createMeasurement(d) { return this.prisma.measurement.create({ data: { ...d, measuredAt: d.measuredAt ? new Date(d.measuredAt) : new Date() } }); }
    deleteMeasurement(id) { return this.prisma.measurement.delete({ where: { id } }); }
    recipes(userId) { return this.prisma.recipe.findMany({ where: { nutritionistId: userId }, orderBy: { name: 'asc' } }); }
    createRecipe(userId, d) { return this.prisma.recipe.create({ data: { ...d, nutritionistId: userId } }); }
    updateRecipe(id, d) { return this.prisma.recipe.update({ where: { id }, data: d }); }
    deleteRecipe(id) { return this.prisma.recipe.delete({ where: { id } }); }
    plans(userId) { return this.prisma.mealPlan.findMany({ where: { nutritionistId: userId }, include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } }, orderBy: { createdAt: 'desc' } }); }
    createPlan(userId, d) { return this.prisma.mealPlan.create({ data: { ...d, meals: d.meals, nutritionistId: userId, startsAt: new Date(d.startsAt), endsAt: d.endsAt ? new Date(d.endsAt) : null } }); }
    updatePlan(id, d) { return this.prisma.mealPlan.update({ where: { id }, data: { ...d, meals: d.meals, startsAt: new Date(d.startsAt), endsAt: d.endsAt ? new Date(d.endsAt) : null } }); }
    deletePlan(id) { return this.prisma.mealPlan.delete({ where: { id } }); }
    goals(userId) { return this.prisma.goal.findMany({ where: { patient: { nutritionistId: userId } }, include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } }, orderBy: { createdAt: 'desc' } }); }
    createGoal(d) { return this.prisma.goal.create({ data: { ...d, dueDate: d.dueDate ? new Date(d.dueDate) : null } }); }
    updateGoal(id, d) { return this.prisma.goal.update({ where: { id }, data: { ...d, dueDate: d.dueDate ? new Date(d.dueDate) : null } }); }
    deleteGoal(id) { return this.prisma.goal.delete({ where: { id } }); }
    diary(userId) { return this.prisma.foodDiaryEntry.findMany({ where: { patient: { nutritionistId: userId } }, include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } }, orderBy: { occurredAt: 'desc' } }); }
    createDiary(d) { return this.prisma.foodDiaryEntry.create({ data: { ...d, occurredAt: new Date(d.occurredAt) } }); }
    deleteDiary(id) { return this.prisma.foodDiaryEntry.delete({ where: { id } }); }
    foods() { return this.prisma.food.findMany({ orderBy: [{ category: 'asc' }, { name: 'asc' }] }); }
    createFood(d) { return this.prisma.food.create({ data: d }); }
    updateFood(id, d) { return this.prisma.food.update({ where: { id }, data: d }); }
    deleteFood(id) { return this.prisma.food.delete({ where: { id } }); }
    async tablasPeruanasAlimentos(page, limit, search) {
        const where = search ? { OR: [
                { codigo: { contains: search } },
                { nombre: { contains: search } },
                { categoria: { nombre: { contains: search } } },
            ] } : undefined;
        const [data, total] = await this.prisma.$transaction([
            this.prisma.tablaperuanaalimento.findMany({ where, include: { categoria: true }, orderBy: [{ estado: 'desc' }, { categoria_codigo: 'asc' }, { nombre: 'asc' }], skip: (page - 1) * limit, take: limit }),
            this.prisma.tablaperuanaalimento.count({ where }),
        ]);
        return { data, meta: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) } };
    }
    categoriasTablasPeruanas() { return this.prisma.tablaperuanacategoria.findMany({ where: { estado: 1 }, orderBy: { codigo: 'asc' } }); }
    tablaPeruanaAlimento(id) { return this.prisma.tablaperuanaalimento.findUniqueOrThrow({ where: { id } }); }
    createTablaPeruanaAlimento(d) { return this.prisma.tablaperuanaalimento.create({ data: { ...d, codigo: d.codigo.trim().toUpperCase(), estado: 1 } }); }
    updateTablaPeruanaAlimento(id, d) { return this.prisma.tablaperuanaalimento.update({ where: { id }, data: { ...d, codigo: d.codigo.trim().toUpperCase() } }); }
    disableTablaPeruanaAlimento(id) { return this.prisma.tablaperuanaalimento.update({ where: { id }, data: { estado: 0 } }); }
    async intercambiosAlimentos(page, limit, search) {
        const where = search ? { OR: [
                { codigo: { contains: search } },
                { nombre: { contains: search } },
                { medida_casera: { contains: search } },
                { categoria: { nombre: { contains: search } } },
                { subcategoria: { nombre: { contains: search } } },
            ] } : undefined;
        const [data, total] = await this.prisma.$transaction([
            this.prisma.intercambioalimento.findMany({ where, include: { categoria: true, subcategoria: true }, orderBy: [{ estado: 'desc' }, { categoria_id: 'asc' }, { nombre: 'asc' }], skip: (page - 1) * limit, take: limit }),
            this.prisma.intercambioalimento.count({ where }),
        ]);
        return { data, meta: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) } };
    }
    categoriasIntercambio() { return this.prisma.intercambiocategoria.findMany({ where: { estado: 1 }, include: { subcategorias: { where: { estado: 1 }, orderBy: { id: 'asc' } } }, orderBy: { id: 'asc' } }); }
    intercambioAlimento(id) { return this.prisma.intercambioalimento.findUniqueOrThrow({ where: { id }, include: { categoria: true, subcategoria: true } }); }
    async validateIntercambioCategory(d) {
        const subcategoria = await this.prisma.intercambiosubcategoria.findFirst({ where: { id: d.subcategoria_id, categoria_id: d.categoria_id, estado: 1 } });
        if (!subcategoria)
            throw new common_1.BadRequestException('La lista nutricional no corresponde al grupo seleccionado.');
    }
    async createIntercambioAlimento(d) {
        await this.validateIntercambioCategory(d);
        return this.prisma.intercambioalimento.create({ data: { ...d, codigo: d.codigo.trim().toUpperCase(), estado: 1 } });
    }
    async updateIntercambioAlimento(id, d) {
        await this.validateIntercambioCategory(d);
        return this.prisma.intercambioalimento.update({ where: { id }, data: { ...d, codigo: d.codigo.trim().toUpperCase() } });
    }
    disableIntercambioAlimento(id) { return this.prisma.intercambioalimento.update({ where: { id }, data: { estado: 0 } }); }
    async dosificacionesAlimentos(page, limit, search) {
        const where = search ? { OR: [
                { preparacion: { contains: search } },
                { alimento: { codigo: { contains: search } } },
                { alimento: { nombre: { contains: search } } },
                { alimento: { categoria: { nombre: { contains: search } } } },
            ] } : undefined;
        const [data, total] = await this.prisma.$transaction([
            this.prisma.dosificacionpreparacion.findMany({ where, include: { alimento: { include: { categoria: true } } }, orderBy: [{ estado: 'desc' }, { alimento: { orden: 'asc' } }, { preparacion: 'asc' }], skip: (page - 1) * limit, take: limit }),
            this.prisma.dosificacionpreparacion.count({ where }),
        ]);
        return { data, meta: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) } };
    }
    alimentosDosificacion() { return this.prisma.dosificacionalimento.findMany({ where: { estado: 1 }, include: { categoria: true }, orderBy: { orden: 'asc' } }); }
    dosificacionAlimento(id) { return this.prisma.dosificacionpreparacion.findUniqueOrThrow({ where: { id }, include: { alimento: { include: { categoria: true } } } }); }
    async validateDosificacion(d) {
        if (d.peso_neto_kg > d.peso_bruto_kg)
            throw new common_1.BadRequestException('El peso neto no puede superar el peso bruto.');
        const alimento = await this.prisma.dosificacionalimento.findFirst({ where: { id: d.alimento_id, estado: 1 } });
        if (!alimento)
            throw new common_1.BadRequestException('El alimento seleccionado no está disponible.');
    }
    async createDosificacionAlimento(d) {
        await this.validateDosificacion(d);
        return this.prisma.dosificacionpreparacion.create({ data: { ...d, estado: 1 } });
    }
    async updateDosificacionAlimento(id, d) {
        await this.validateDosificacion(d);
        return this.prisma.dosificacionpreparacion.update({ where: { id }, data: d });
    }
    disableDosificacionAlimento(id) { return this.prisma.dosificacionpreparacion.update({ where: { id }, data: { estado: 0 } }); }
    substitutions() { return this.prisma.foodSubstitution.findMany({ include: { food: true, substituteFood: true } }); }
    createSubstitution(d) { return this.prisma.foodSubstitution.create({ data: d }); }
    deleteSubstitution(id) { return this.prisma.foodSubstitution.delete({ where: { id } }); }
    messages(userId) { return this.prisma.message.findMany({ where: { patient: { nutritionistId: userId } }, include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } }, orderBy: { createdAt: 'desc' } }); }
    createMessage(userId, d) { return this.prisma.message.create({ data: { ...d, senderId: userId } }); }
    deleteMessage(id) { return this.prisma.message.delete({ where: { id } }); }
    payments(userId) { return this.prisma.payment.findMany({ where: { patient: { nutritionistId: userId } }, include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } }, orderBy: { createdAt: 'desc' } }); }
    createPayment(d) { return this.prisma.payment.create({ data: { ...d, dueDate: d.dueDate ? new Date(d.dueDate) : null, paidAt: d.paidAt ? new Date(d.paidAt) : null } }); }
    updatePayment(id, d) { return this.prisma.payment.update({ where: { id }, data: { ...d, dueDate: d.dueDate ? new Date(d.dueDate) : null, paidAt: d.paidAt ? new Date(d.paidAt) : null } }); }
    deletePayment(id) { return this.prisma.payment.delete({ where: { id } }); }
    resources(userId) { return this.prisma.educationalResource.findMany({ where: { nutritionistId: userId }, orderBy: { createdAt: 'desc' } }); }
    createResource(userId, d) { return this.prisma.educationalResource.create({ data: { ...d, nutritionistId: userId } }); }
    updateResource(id, d) { return this.prisma.educationalResource.update({ where: { id }, data: d }); }
    deleteResource(id) { return this.prisma.educationalResource.delete({ where: { id } }); }
    documents(userId) { return this.prisma.patientDocument.findMany({ where: { patient: { nutritionistId: userId } }, include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } }, orderBy: { createdAt: 'desc' } }); }
    createDocument(d) { return this.prisma.patientDocument.create({ data: d }); }
    deleteDocument(id) { return this.prisma.patientDocument.delete({ where: { id } }); }
    waterLogs(userId) { return this.prisma.waterLog.findMany({ where: { patient: { nutritionistId: userId } }, include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } }, orderBy: { occurredAt: 'desc' } }); }
    createWaterLog(d) { return this.prisma.waterLog.create({ data: { ...d, occurredAt: new Date(d.occurredAt) } }); }
    deleteWaterLog(id) { return this.prisma.waterLog.delete({ where: { id } }); }
    activityLogs(userId) { return this.prisma.activityLog.findMany({ where: { patient: { nutritionistId: userId } }, include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } }, orderBy: { occurredAt: 'desc' } }); }
    createActivityLog(d) { return this.prisma.activityLog.create({ data: { ...d, occurredAt: new Date(d.occurredAt) } }); }
    deleteActivityLog(id) { return this.prisma.activityLog.delete({ where: { id } }); }
    portal(patientId) {
        return this.prisma.patient.findUniqueOrThrow({
            where: { id: patientId },
            include: {
                user: { select: { firstName: true, lastName: true, email: true } },
                measurements: { orderBy: { measuredAt: 'desc' }, take: 10 },
                mealPlans: { where: { status: 'ACTIVO' }, orderBy: { createdAt: 'desc' }, take: 1 },
                goals: { orderBy: { createdAt: 'desc' } },
                appointments: { orderBy: { startsAt: 'asc' }, take: 5 },
                diaryEntries: { orderBy: { occurredAt: 'desc' }, take: 10 },
                messages: { orderBy: { createdAt: 'desc' }, take: 10 },
                documents: { orderBy: { createdAt: 'desc' } },
                waterLogs: { orderBy: { occurredAt: 'desc' }, take: 20 },
                activityLogs: { orderBy: { occurredAt: 'desc' }, take: 20 }
            }
        });
    }
};
exports.ClinicalService = ClinicalService;
exports.ClinicalService = ClinicalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClinicalService);
//# sourceMappingURL=clinical.service.js.map