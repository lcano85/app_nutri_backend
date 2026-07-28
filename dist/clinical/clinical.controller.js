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
exports.ClinicalController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const permissions_decorator_1 = require("../auth/permissions.decorator");
const permissions_guard_1 = require("../auth/permissions.guard");
const clinical_service_1 = require("./clinical.service");
const clinical_dto_1 = require("./dto/clinical.dto");
let ClinicalController = class ClinicalController {
    c;
    constructor(c) {
        this.c = c;
    }
    appointments(r) { return this.c.appointments(r.user.id); }
    createAppointment(r, d) { return this.c.createAppointment(r.user.id, d); }
    updateAppointment(r, id, d) { return this.c.updateAppointment(r.user.id, id, d); }
    deleteAppointment(id) { return this.c.deleteAppointment(id); }
    measurements(r) { return this.c.measurements(r.user.id); }
    createMeasurement(d) { return this.c.createMeasurement(d); }
    deleteMeasurement(id) { return this.c.deleteMeasurement(id); }
    recipes(r) { return this.c.recipes(r.user.id); }
    createRecipe(r, d) { return this.c.createRecipe(r.user.id, d); }
    updateRecipe(id, d) { return this.c.updateRecipe(id, d); }
    deleteRecipe(id) { return this.c.deleteRecipe(id); }
    plans(r) { return this.c.plans(r.user.id); }
    createPlan(r, d) { return this.c.createPlan(r.user.id, d); }
    updatePlan(id, d) { return this.c.updatePlan(id, d); }
    deletePlan(id) { return this.c.deletePlan(id); }
    goals(r) { return this.c.goals(r.user.id); }
    createGoal(d) { return this.c.createGoal(d); }
    updateGoal(id, d) { return this.c.updateGoal(id, d); }
    deleteGoal(id) { return this.c.deleteGoal(id); }
    diary(r) { return this.c.diary(r.user.id); }
    createDiary(d) { return this.c.createDiary(d); }
    deleteDiary(id) { return this.c.deleteDiary(id); }
    foods() { return this.c.foods(); }
    createFood(d) { return this.c.createFood(d); }
    updateFood(id, d) { return this.c.updateFood(id, d); }
    deleteFood(id) { return this.c.deleteFood(id); }
    substitutions() { return this.c.substitutions(); }
    createSubstitution(d) { return this.c.createSubstitution(d); }
    deleteSubstitution(id) { return this.c.deleteSubstitution(id); }
    messages(r) { return this.c.messages(r.user.id); }
    createMessage(r, d) { return this.c.createMessage(r.user.id, d); }
    deleteMessage(id) { return this.c.deleteMessage(id); }
    payments(r) { return this.c.payments(r.user.id); }
    createPayment(d) { return this.c.createPayment(d); }
    updatePayment(id, d) { return this.c.updatePayment(id, d); }
    deletePayment(id) { return this.c.deletePayment(id); }
    resources(r) { return this.c.resources(r.user.id); }
    createResource(r, d) { return this.c.createResource(r.user.id, d); }
    updateResource(id, d) { return this.c.updateResource(id, d); }
    deleteResource(id) { return this.c.deleteResource(id); }
    documents(r) { return this.c.documents(r.user.id); }
    createDocument(d) { return this.c.createDocument(d); }
    deleteDocument(id) { return this.c.deleteDocument(id); }
    waterLogs(r) { return this.c.waterLogs(r.user.id); }
    createWaterLog(d) { return this.c.createWaterLog(d); }
    deleteWaterLog(id) { return this.c.deleteWaterLog(id); }
    activityLogs(r) { return this.c.activityLogs(r.user.id); }
    createActivityLog(d) { return this.c.createActivityLog(d); }
    deleteActivityLog(id) { return this.c.deleteActivityLog(id); }
    portal(id) { return this.c.portal(id); }
};
exports.ClinicalController = ClinicalController;
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('appointments.view'),
    (0, common_1.Get)('appointments'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "appointments", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('appointments.create'),
    (0, common_1.Post)('appointments'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, clinical_dto_1.AppointmentDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createAppointment", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('appointments.update'),
    (0, common_1.Patch)('appointments/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, clinical_dto_1.AppointmentDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "updateAppointment", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('appointments.delete'),
    (0, common_1.Delete)('appointments/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteAppointment", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('measurements.view'),
    (0, common_1.Get)('measurements'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "measurements", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('measurements.create'),
    (0, common_1.Post)('measurements'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinical_dto_1.MeasurementDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createMeasurement", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('measurements.delete'),
    (0, common_1.Delete)('measurements/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteMeasurement", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('recipes.view'),
    (0, common_1.Get)('recipes'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "recipes", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('recipes.create'),
    (0, common_1.Post)('recipes'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, clinical_dto_1.RecipeDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createRecipe", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('recipes.update'),
    (0, common_1.Patch)('recipes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, clinical_dto_1.RecipeDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "updateRecipe", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('recipes.delete'),
    (0, common_1.Delete)('recipes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteRecipe", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('plans.view'),
    (0, common_1.Get)('plans'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "plans", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('plans.create'),
    (0, common_1.Post)('plans'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, clinical_dto_1.MealPlanDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createPlan", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('plans.update'),
    (0, common_1.Patch)('plans/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, clinical_dto_1.MealPlanDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "updatePlan", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('plans.delete'),
    (0, common_1.Delete)('plans/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deletePlan", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('tracking.view'),
    (0, common_1.Get)('goals'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "goals", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('tracking.create'),
    (0, common_1.Post)('goals'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinical_dto_1.GoalDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createGoal", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('tracking.update'),
    (0, common_1.Patch)('goals/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, clinical_dto_1.GoalDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "updateGoal", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('tracking.delete'),
    (0, common_1.Delete)('goals/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteGoal", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('diary.view'),
    (0, common_1.Get)('food-diary'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "diary", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('diary.create'),
    (0, common_1.Post)('food-diary'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinical_dto_1.DiaryEntryDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createDiary", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('diary.delete'),
    (0, common_1.Delete)('food-diary/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteDiary", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.view'),
    (0, common_1.Get)('foods'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "foods", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.create'),
    (0, common_1.Post)('foods'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinical_dto_1.FoodDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createFood", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.update'),
    (0, common_1.Patch)('foods/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, clinical_dto_1.FoodDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "updateFood", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.delete'),
    (0, common_1.Delete)('foods/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteFood", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.view'),
    (0, common_1.Get)('food-substitutions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "substitutions", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.create'),
    (0, common_1.Post)('food-substitutions'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinical_dto_1.FoodSubstitutionDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createSubstitution", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('foods.delete'),
    (0, common_1.Delete)('food-substitutions/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteSubstitution", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('messages.view'),
    (0, common_1.Get)('messages'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "messages", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('messages.create'),
    (0, common_1.Post)('messages'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, clinical_dto_1.MessageDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createMessage", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('messages.create'),
    (0, common_1.Delete)('messages/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteMessage", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('payments.view'),
    (0, common_1.Get)('payments'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "payments", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('payments.create'),
    (0, common_1.Post)('payments'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinical_dto_1.PaymentDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createPayment", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('payments.update'),
    (0, common_1.Patch)('payments/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, clinical_dto_1.PaymentDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "updatePayment", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('payments.delete'),
    (0, common_1.Delete)('payments/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deletePayment", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('resources.view'),
    (0, common_1.Get)('resources'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "resources", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('resources.create'),
    (0, common_1.Post)('resources'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, clinical_dto_1.ResourceDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createResource", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('resources.update'),
    (0, common_1.Patch)('resources/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, clinical_dto_1.ResourceDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "updateResource", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('resources.delete'),
    (0, common_1.Delete)('resources/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteResource", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('patients.view'),
    (0, common_1.Get)('patient-documents'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "documents", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('patients.update'),
    (0, common_1.Post)('patient-documents'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinical_dto_1.PatientDocumentDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createDocument", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('patients.update'),
    (0, common_1.Delete)('patient-documents/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteDocument", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('tracking.view'),
    (0, common_1.Get)('water-logs'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "waterLogs", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('tracking.create'),
    (0, common_1.Post)('water-logs'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinical_dto_1.WaterLogDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createWaterLog", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('tracking.delete'),
    (0, common_1.Delete)('water-logs/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteWaterLog", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('tracking.view'),
    (0, common_1.Get)('activity-logs'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "activityLogs", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('tracking.create'),
    (0, common_1.Post)('activity-logs'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinical_dto_1.ActivityLogDto]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "createActivityLog", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('tracking.delete'),
    (0, common_1.Delete)('activity-logs/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "deleteActivityLog", null);
__decorate([
    (0, permissions_decorator_1.RequirePermissions)('portal.view'),
    (0, common_1.Get)('portal/:patientId'),
    __param(0, (0, common_1.Param)('patientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicalController.prototype, "portal", null);
exports.ClinicalController = ClinicalController = __decorate([
    (0, swagger_1.ApiTags)('Gestión clínica'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), permissions_guard_1.PermissionsGuard),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [clinical_service_1.ClinicalService])
], ClinicalController);
//# sourceMappingURL=clinical.controller.js.map