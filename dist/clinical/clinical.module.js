"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicalModule = void 0;
const common_1 = require("@nestjs/common");
const permissions_guard_1 = require("../auth/permissions.guard");
const clinical_controller_1 = require("./clinical.controller");
const clinical_service_1 = require("./clinical.service");
const tablas_peruanas_alimentos_controller_1 = require("./tablas-peruanas-alimentos.controller");
const intercambios_alimentos_controller_1 = require("./intercambios-alimentos.controller");
const dosificacion_alimentos_controller_1 = require("./dosificacion-alimentos.controller");
let ClinicalModule = class ClinicalModule {
};
exports.ClinicalModule = ClinicalModule;
exports.ClinicalModule = ClinicalModule = __decorate([
    (0, common_1.Module)({ controllers: [clinical_controller_1.ClinicalController, tablas_peruanas_alimentos_controller_1.TablasPeruanasAlimentosController, intercambios_alimentos_controller_1.IntercambiosAlimentosController, dosificacion_alimentos_controller_1.DosificacionAlimentosController], providers: [clinical_service_1.ClinicalService, permissions_guard_1.PermissionsGuard] })
], ClinicalModule);
//# sourceMappingURL=clinical.module.js.map