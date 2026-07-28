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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    prisma;
    jwt;
    config;
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async login(dto, context) {
        const email = dto.email.toLowerCase();
        const user = await this.prisma.user.findUnique({ where: { email }, include: { status: true, role: { include: { permissions: { include: { permission: true } } } } } });
        const valid = !!user && user.status.code === 'ACTIVO' && user.status.active && user.role.active && await bcrypt.compare(dto.password, user.passwordHash);
        await this.prisma.loginLog.create({ data: { userId: user?.id, email, success: valid, ipAddress: context.ip, userAgent: context.userAgent, reason: valid ? undefined : 'Credenciales inválidas o usuario inactivo' } });
        if (!valid || !user)
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        const permissions = user.role.permissions.map(item => item.permission.code);
        const payload = { sub: user.id, email: user.email, role: user.role.code };
        return {
            accessToken: await this.jwt.signAsync(payload),
            user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, permissions },
        };
    }
    async me(userId) {
        const user = await this.prisma.user.findUniqueOrThrow({ where: { id: userId }, select: { id: true, email: true, firstName: true, lastName: true, status: { select: { id: true, name: true, code: true } }, role: { include: { permissions: { include: { permission: true } } } } } });
        return { ...user, permissions: user.role.permissions.map(item => item.permission.code), role: { id: user.role.id, name: user.role.name, code: user.role.code } };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService, config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map