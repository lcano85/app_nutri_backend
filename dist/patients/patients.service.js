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
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const prisma_service_1 = require("../prisma/prisma.service");
let PatientsService = class PatientsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list(nutritionistId) {
        return this.prisma.patient.findMany({ where: { nutritionistId }, include: { user: { select: { firstName: true, lastName: true, email: true, loginLogs: { where: { success: true }, orderBy: { createdAt: 'desc' }, take: 1, select: { createdAt: true } } } }, measurements: { orderBy: { measuredAt: 'desc' }, take: 1 } }, orderBy: { createdAt: 'desc' } });
    }
    async create(nutritionistId, dto) {
        if (await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } }))
            throw new common_1.ConflictException('El correo ya está registrado');
        return this.prisma.$transaction(async (tx) => {
            const patientRole = await tx.role.findUniqueOrThrow({ where: { code: 'PATIENT' } });
            const invitedStatus = await tx.status.findUniqueOrThrow({ where: { code: 'INVITADO' } });
            const user = await tx.user.create({ data: { email: dto.email.toLowerCase(), passwordHash: await bcrypt.hash(crypto.randomUUID(), 12), firstName: dto.firstName, lastName: dto.lastName, roleId: patientRole.id, statusId: invitedStatus.id } });
            return tx.patient.create({ data: { userId: user.id, nutritionistId, phone: dto.phone, birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined, heightCm: dto.heightCm, allergies: dto.allergies ?? [], conditions: dto.conditions ?? [], dietaryPreferences: [], acquisitionSource: dto.acquisitionSource, sourceDetail: dto.sourceDetail, notes: dto.notes }, include: { user: true } });
        });
    }
    async update(id, nutritionistId, dto) {
        const found = await this.prisma.patient.findFirst({ where: { id, nutritionistId } });
        if (!found)
            throw new common_1.NotFoundException('Paciente no encontrado');
        return this.prisma.$transaction([
            this.prisma.patient.update({ where: { id }, data: { phone: dto.phone, birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined, heightCm: dto.heightCm, allergies: dto.allergies, conditions: dto.conditions, acquisitionSource: dto.acquisitionSource, sourceDetail: dto.sourceDetail, notes: dto.notes } }),
            ...(found.userId ? [this.prisma.user.update({ where: { id: found.userId }, data: { firstName: dto.firstName, lastName: dto.lastName, email: dto.email?.toLowerCase() } })] : []),
        ]);
    }
    async remove(id, nutritionistId) {
        const found = await this.prisma.patient.findFirst({ where: { id, nutritionistId } });
        if (!found)
            throw new common_1.NotFoundException('Paciente no encontrado');
        await this.prisma.patient.delete({ where: { id } });
        return { message: 'Paciente eliminado' };
    }
};
exports.PatientsService = PatientsService;
exports.PatientsService = PatientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PatientsService);
//# sourceMappingURL=patients.service.js.map