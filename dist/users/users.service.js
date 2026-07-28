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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list() { return this.prisma.user.findMany({ select: { id: true, email: true, firstName: true, lastName: true, status: { select: { id: true, name: true, code: true, color: true } }, createdAt: true, role: { select: { id: true, name: true, code: true } } }, orderBy: { createdAt: 'desc' } }); }
    async create(dto) {
        if (await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } }))
            throw new common_1.ConflictException('El correo ya está registrado');
        const { password, ...data } = dto;
        const passwordHash = await bcrypt.hash(password, 12);
        return this.prisma.user.create({ data: { ...data, email: data.email.toLowerCase(), passwordHash }, select: { id: true, email: true, firstName: true, lastName: true, status: true, role: true } });
    }
    async update(id, dto) {
        if (!await this.prisma.user.findUnique({ where: { id } }))
            throw new common_1.NotFoundException('Usuario no encontrado');
        const { password, ...data } = dto;
        return this.prisma.user.update({ where: { id }, data: { ...data, email: data.email?.toLowerCase(), ...(password ? { passwordHash: await bcrypt.hash(password, 12) } : {}) }, select: { id: true, email: true, firstName: true, lastName: true, status: true, role: true } });
    }
    async remove(id, currentUserId) {
        if (id === currentUserId)
            throw new common_1.BadRequestException('No puedes eliminar tu propio usuario');
        try {
            await this.prisma.user.delete({ where: { id } });
        }
        catch {
            throw new common_1.BadRequestException('No se puede eliminar un usuario con información relacionada');
        }
        return { message: 'Usuario eliminado' };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map