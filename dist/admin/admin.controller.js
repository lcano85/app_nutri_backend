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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const permissions_decorator_1 = require("../auth/permissions.decorator");
const permissions_guard_1 = require("../auth/permissions.guard");
const admin_service_1 = require("./admin.service");
const admin_dto_1 = require("./dto/admin.dto");
let AdminController = class AdminController {
    admin;
    constructor(admin) {
        this.admin = admin;
    }
    roles() { return this.admin.roles(); }
    createRole(dto) { return this.admin.createRole(dto); }
    updateRole(id, dto) { return this.admin.updateRole(id, dto); }
    deleteRole(id) { return this.admin.deleteRole(id); }
    permissions() { return this.admin.permissions(); }
    createPermission(dto) { return this.admin.createPermission(dto); }
    updatePermission(id, dto) { return this.admin.updatePermission(id, dto); }
    deletePermission(id) { return this.admin.deletePermission(id); }
    loginLogs() { return this.admin.loginLogs(); }
    statuses() { return this.admin.statuses(); }
    createStatus(dto) { return this.admin.createStatus(dto); }
    updateStatus(id, dto) { return this.admin.updateStatus(id, dto); }
    deleteStatus(id) { return this.admin.deleteStatus(id); }
    navigation(req) { return this.admin.navigation(req.user.id); }
    menus() { return this.admin.menus(); }
    createMenu(dto) { return this.admin.createMenu(dto); }
    updateMenu(id, dto) { return this.admin.updateMenu(id, dto); }
    deleteMenu(id) { return this.admin.deleteMenu(id); }
};
exports.AdminController = AdminController;
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('roles.view'),
    (0, common_1.Get)('roles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "roles", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('roles.create'),
    (0, common_1.Post)('roles'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.RoleDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createRole", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('roles.update'),
    (0, common_1.Patch)('roles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, admin_dto_1.RoleDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateRole", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('roles.delete'),
    (0, common_1.Delete)('roles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "deleteRole", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('permissions.view'),
    (0, common_1.Get)('permissions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "permissions", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('permissions.create'),
    (0, common_1.Post)('permissions'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.PermissionDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createPermission", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('permissions.update'),
    (0, common_1.Patch)('permissions/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, admin_dto_1.PermissionDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updatePermission", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('permissions.delete'),
    (0, common_1.Delete)('permissions/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "deletePermission", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('login-logs.view'),
    (0, common_1.Get)('login-logs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "loginLogs", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('statuses.view'),
    (0, common_1.Get)('statuses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "statuses", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('statuses.create'),
    (0, common_1.Post)('statuses'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.StatusDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createStatus", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('statuses.update'),
    (0, common_1.Patch)('statuses/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, admin_dto_1.StatusDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateStatus", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('statuses.delete'),
    (0, common_1.Delete)('statuses/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "deleteStatus", null);
__decorate([
    (0, common_1.Get)('menus/navigation'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "navigation", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('menus.view'),
    (0, common_1.Get)('menus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "menus", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('menus.create'),
    (0, common_1.Post)('menus'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.MenuItemDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createMenu", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('menus.update'),
    (0, common_1.Patch)('menus/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, admin_dto_1.MenuItemDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateMenu", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('menus.delete'),
    (0, common_1.Delete)('menus/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "deleteMenu", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('Administración'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), permissions_guard_1.PermissionsGuard),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map