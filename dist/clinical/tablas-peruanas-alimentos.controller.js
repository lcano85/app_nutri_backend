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
exports.TablasPeruanasAlimentosController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const permissions_decorator_1 = require("../auth/permissions.decorator");
const permissions_guard_1 = require("../auth/permissions.guard");
const clinical_service_1 = require("./clinical.service");
const clinical_dto_1 = require("./dto/clinical.dto");
let TablasPeruanasAlimentosController = class TablasPeruanasAlimentosController {
    clinicalService;
    constructor(clinicalService) {
        this.clinicalService = clinicalService;
    }
    findAll(page = 1, limit = 20, search = '') {
        return this.clinicalService.tablasPeruanasAlimentos(Math.max(1, page), Math.min(100, Math.max(1, limit)), search.trim());
    }
    categories() {
        return this.clinicalService.categoriasTablasPeruanas();
    }
    findOne(id) {
        return this.clinicalService.tablaPeruanaAlimento(id);
    }
    create(dto) {
        return this.clinicalService.createTablaPeruanaAlimento(dto);
    }
    update(id, dto) {
        return this.clinicalService.updateTablaPeruanaAlimento(id, dto);
    }
    disable(id) {
        return this.clinicalService.disableTablaPeruanaAlimento(id);
    }
};
exports.TablasPeruanasAlimentosController = TablasPeruanasAlimentosController;
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.view'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', new common_1.ParseIntPipe({ optional: true }))),
    __param(1, (0, common_1.Query)('limit', new common_1.ParseIntPipe({ optional: true }))),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], TablasPeruanasAlimentosController.prototype, "findAll", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.view'),
    (0, common_1.Get)('categorias/opciones'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TablasPeruanasAlimentosController.prototype, "categories", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.view'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TablasPeruanasAlimentosController.prototype, "findOne", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinical_dto_1.TablaPeruanaAlimentoDto]),
    __metadata("design:returntype", void 0)
], TablasPeruanasAlimentosController.prototype, "create", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, clinical_dto_1.TablaPeruanaAlimentoDto]),
    __metadata("design:returntype", void 0)
], TablasPeruanasAlimentosController.prototype, "update", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TablasPeruanasAlimentosController.prototype, "disable", null);
exports.TablasPeruanasAlimentosController = TablasPeruanasAlimentosController = __decorate([
    (0, swagger_1.ApiTags)('Tablas Peruanas de Alimentos'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), permissions_guard_1.PermissionsGuard),
    (0, common_1.Controller)('tablas-peruanas-alimentos'),
    __metadata("design:paramtypes", [clinical_service_1.ClinicalService])
], TablasPeruanasAlimentosController);
//# sourceMappingURL=tablas-peruanas-alimentos.controller.js.map