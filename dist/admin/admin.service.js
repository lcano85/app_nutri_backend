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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    roles() { return this.prisma.role.findMany({ include: { _count: { select: { users: true } }, permissions: { include: { permission: true } } }, orderBy: { name: 'asc' } }); }
    async createRole(dto) {
        const { permissionIds, ...role } = dto;
        try {
            return await this.prisma.role.create({ data: { ...role, code: role.code.toUpperCase(), permissions: { create: permissionIds.map(permissionId => ({ permissionId })) } }, include: { permissions: { include: { permission: true } } } });
        }
        catch {
            throw new common_1.ConflictException('El nombre o código del perfil ya existe');
        }
    }
    async updateRole(id, dto) {
        const found = await this.prisma.role.findUnique({ where: { id } });
        if (!found)
            throw new common_1.NotFoundException('Perfil no encontrado');
        const { permissionIds, ...role } = dto;
        return this.prisma.$transaction(async (tx) => {
            await tx.rolePermission.deleteMany({ where: { roleId: id } });
            return tx.role.update({ where: { id }, data: { ...role, code: role.code.toUpperCase(), permissions: { create: permissionIds.map(permissionId => ({ permissionId })) } }, include: { permissions: { include: { permission: true } } } });
        });
    }
    async deleteRole(id) {
        const role = await this.prisma.role.findUnique({ where: { id }, include: { _count: { select: { users: true } } } });
        if (!role)
            throw new common_1.NotFoundException('Perfil no encontrado');
        if (role.isSystem || role._count.users)
            throw new common_1.BadRequestException('No se puede eliminar un perfil del sistema o con usuarios');
        await this.prisma.role.delete({ where: { id } });
        return { message: 'Perfil eliminado' };
    }
    permissions() { return this.prisma.permission.findMany({ orderBy: [{ module: 'asc' }, { name: 'asc' }] }); }
    async createPermission(dto) {
        try {
            return await this.prisma.permission.create({ data: dto });
        }
        catch {
            throw new common_1.ConflictException('El código del permiso ya existe');
        }
    }
    async updatePermission(id, dto) { return this.prisma.permission.update({ where: { id }, data: dto }); }
    async deletePermission(id) { await this.prisma.permission.delete({ where: { id } }); return { message: 'Permiso eliminado' }; }
    loginLogs() { return this.prisma.loginLog.findMany({ include: { user: { select: { firstName: true, lastName: true, role: { select: { name: true } } } } }, orderBy: { createdAt: 'desc' }, take: 500 }); }
    statuses() { return this.prisma.status.findMany({ include: { _count: { select: { users: true } } }, orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }] }); }
    async createStatus(dto) {
        try {
            return await this.prisma.status.create({ data: { ...dto, code: dto.code.toUpperCase() } });
        }
        catch {
            throw new common_1.ConflictException('El nombre o código del estado ya existe');
        }
    }
    async updateStatus(id, dto) {
        if (!await this.prisma.status.findUnique({ where: { id } }))
            throw new common_1.NotFoundException('Estado no encontrado');
        return this.prisma.status.update({ where: { id }, data: { ...dto, code: dto.code.toUpperCase() } });
    }
    async deleteStatus(id) {
        const status = await this.prisma.status.findUnique({ where: { id }, include: { _count: { select: { users: true } } } });
        if (!status)
            throw new common_1.NotFoundException('Estado no encontrado');
        if (status._count.users)
            throw new common_1.BadRequestException('No se puede eliminar un estado asignado a usuarios');
        await this.prisma.status.delete({ where: { id } });
        return { message: 'Estado eliminado' };
    }
    menus() { return this.prisma.menuItem.findMany({ include: { permission: { select: { id: true, name: true, code: true } }, parent: { select: { id: true, name: true } }, _count: { select: { children: true } } }, orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }] }); }
    async navigation(userId) {
        const user = await this.prisma.user.findUniqueOrThrow({ where: { id: userId }, select: { role: { select: { permissions: { select: { permissionId: true } } } } } });
        const permissionIds = new Set(user.role.permissions.map(item => item.permissionId));
        const items = await this.prisma.menuItem.findMany({ where: { active: true }, orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }] });
        const allowed = items.filter(item => !item.permissionId || permissionIds.has(item.permissionId));
        return allowed.filter(item => !item.parentId).map(parent => ({ ...parent, children: allowed.filter(child => child.parentId === parent.id) })).filter(parent => parent.path || parent.children.length);
    }
    async createMenu(dto) {
        if (dto.parentId && dto.parentId === '')
            dto.parentId = undefined;
        return this.prisma.menuItem.create({ data: { ...dto, path: dto.path || null, parentId: dto.parentId || null, permissionId: dto.permissionId || null }, include: { permission: true, parent: true } });
    }
    async updateMenu(id, dto) {
        if (id === dto.parentId)
            throw new common_1.BadRequestException('Un menú no puede ser su propio padre');
        return this.prisma.menuItem.update({ where: { id }, data: { ...dto, path: dto.path || null, parentId: dto.parentId || null, permissionId: dto.permissionId || null }, include: { permission: true, parent: true } });
    }
    async deleteMenu(id) {
        await this.prisma.menuItem.delete({ where: { id } });
        return { message: 'Menú eliminado' };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map