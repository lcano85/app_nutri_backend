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
exports.ActivityLogDto = exports.WaterLogDto = exports.PatientDocumentDto = exports.ResourceDto = exports.PaymentDto = exports.MessageDto = exports.FoodSubstitutionDto = exports.DosificacionPreparacionDto = exports.IntercambioAlimentoDto = exports.TablaPeruanaAlimentoDto = exports.FoodDto = exports.DiaryEntryDto = exports.GoalDto = exports.MealPlanDto = exports.RecipeDto = exports.MeasurementDto = exports.AppointmentDto = void 0;
const class_validator_1 = require("class-validator");
class AppointmentDto {
    patientId;
    startsAt;
    endsAt;
    status;
    reason;
    notes;
    consultationType;
    meetingProvider;
    meetingUrl;
    reminderMinutes;
}
exports.AppointmentDto = AppointmentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "patientId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "startsAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "endsAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "consultationType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "meetingProvider", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "meetingUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AppointmentDto.prototype, "reminderMinutes", void 0);
class MeasurementDto {
    patientId;
    measuredAt;
    weightKg;
    bodyFatPct;
    waistCm;
    notes;
}
exports.MeasurementDto = MeasurementDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MeasurementDto.prototype, "patientId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], MeasurementDto.prototype, "measuredAt", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], MeasurementDto.prototype, "weightKg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MeasurementDto.prototype, "bodyFatPct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MeasurementDto.prototype, "waistCm", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MeasurementDto.prototype, "notes", void 0);
class RecipeDto {
    name;
    description;
    ingredients;
    instructions;
    servings;
    preparationMinutes;
    calories;
    proteinGrams;
    carbohydrateGrams;
    fatGrams;
}
exports.RecipeDto = RecipeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], RecipeDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecipeDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], RecipeDto.prototype, "ingredients", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecipeDto.prototype, "instructions", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], RecipeDto.prototype, "servings", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], RecipeDto.prototype, "preparationMinutes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RecipeDto.prototype, "calories", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RecipeDto.prototype, "proteinGrams", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RecipeDto.prototype, "carbohydrateGrams", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RecipeDto.prototype, "fatGrams", void 0);
class MealPlanDto {
    patientId;
    name;
    description;
    startsAt;
    endsAt;
    status;
    targetCalories;
    targetProteinGrams;
    targetCarbohydrateGrams;
    targetFatGrams;
    meals;
    recommendations;
}
exports.MealPlanDto = MealPlanDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MealPlanDto.prototype, "patientId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], MealPlanDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MealPlanDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], MealPlanDto.prototype, "startsAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], MealPlanDto.prototype, "endsAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MealPlanDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], MealPlanDto.prototype, "targetCalories", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MealPlanDto.prototype, "targetProteinGrams", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MealPlanDto.prototype, "targetCarbohydrateGrams", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MealPlanDto.prototype, "targetFatGrams", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], MealPlanDto.prototype, "meals", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MealPlanDto.prototype, "recommendations", void 0);
class GoalDto {
    patientId;
    title;
    description;
    targetValue;
    currentValue;
    unit;
    status;
    dueDate;
}
exports.GoalDto = GoalDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GoalDto.prototype, "patientId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GoalDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GoalDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GoalDto.prototype, "targetValue", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GoalDto.prototype, "currentValue", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GoalDto.prototype, "unit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GoalDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GoalDto.prototype, "dueDate", void 0);
class DiaryEntryDto {
    patientId;
    occurredAt;
    mealType;
    description;
    calories;
    waterMl;
    mood;
    notes;
}
exports.DiaryEntryDto = DiaryEntryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiaryEntryDto.prototype, "patientId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], DiaryEntryDto.prototype, "occurredAt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiaryEntryDto.prototype, "mealType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiaryEntryDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], DiaryEntryDto.prototype, "calories", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], DiaryEntryDto.prototype, "waterMl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiaryEntryDto.prototype, "mood", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiaryEntryDto.prototype, "notes", void 0);
class FoodDto {
    name;
    category;
    servingName;
    servingGrams;
    calories;
    proteinGrams;
    carbohydrateGrams;
    fatGrams;
    fiberGrams;
    sodiumMg;
}
exports.FoodDto = FoodDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FoodDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FoodDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FoodDto.prototype, "servingName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FoodDto.prototype, "servingGrams", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FoodDto.prototype, "calories", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FoodDto.prototype, "proteinGrams", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FoodDto.prototype, "carbohydrateGrams", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FoodDto.prototype, "fatGrams", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FoodDto.prototype, "fiberGrams", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FoodDto.prototype, "sodiumMg", void 0);
class TablaPeruanaAlimentoDto {
    codigo;
    codigo_grupo;
    codigo_numero;
    categoria_codigo;
    nombre;
    grupo;
    estrato;
    energia_kcal;
    energia_kj;
    agua_g;
    proteina_g;
    grasa_total_g;
    carbohidratos_totales_g;
    carbohidratos_disp_g;
    fibra_dietaria_g;
    cenizas_g;
    calcio_mg;
    fosforo_mg;
    hierro_mg;
    zinc_mg;
    sodio_mg;
    potasio_mg;
    betacaroteno_ug;
    vitamina_a_ug;
    tiamina_mg;
    riboflavina_mg;
    niacina_mg;
    vitamina_c_mg;
    acido_folico_ug;
    fuente;
}
exports.TablaPeruanaAlimentoDto = TablaPeruanaAlimentoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], TablaPeruanaAlimentoDto.prototype, "codigo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], TablaPeruanaAlimentoDto.prototype, "codigo_grupo", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "codigo_numero", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], TablaPeruanaAlimentoDto.prototype, "categoria_codigo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], TablaPeruanaAlimentoDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TablaPeruanaAlimentoDto.prototype, "grupo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TablaPeruanaAlimentoDto.prototype, "estrato", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "energia_kcal", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "energia_kj", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "agua_g", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "proteina_g", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "grasa_total_g", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "carbohidratos_totales_g", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "carbohidratos_disp_g", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "fibra_dietaria_g", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "cenizas_g", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "calcio_mg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "fosforo_mg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "hierro_mg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "zinc_mg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "sodio_mg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "potasio_mg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "betacaroteno_ug", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "vitamina_a_ug", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "tiamina_mg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "riboflavina_mg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "niacina_mg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "vitamina_c_mg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TablaPeruanaAlimentoDto.prototype, "acido_folico_ug", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TablaPeruanaAlimentoDto.prototype, "fuente", void 0);
class IntercambioAlimentoDto {
    codigo;
    categoria_id;
    subcategoria_id;
    nombre;
    peso_gramos;
    medida_casera;
    fuente;
}
exports.IntercambioAlimentoDto = IntercambioAlimentoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], IntercambioAlimentoDto.prototype, "codigo", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], IntercambioAlimentoDto.prototype, "categoria_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], IntercambioAlimentoDto.prototype, "subcategoria_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], IntercambioAlimentoDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], IntercambioAlimentoDto.prototype, "peso_gramos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], IntercambioAlimentoDto.prototype, "medida_casera", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IntercambioAlimentoDto.prototype, "fuente", void 0);
class DosificacionPreparacionDto {
    alimento_id;
    preparacion;
    peso_bruto_kg;
    peso_neto_kg;
    energia_kcal;
    proteina_g;
    grasa_g;
    carbohidrato_g;
    hierro_mg;
    retinol_ug;
    porcion_comestible_pct;
    fuente;
}
exports.DosificacionPreparacionDto = DosificacionPreparacionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], DosificacionPreparacionDto.prototype, "alimento_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], DosificacionPreparacionDto.prototype, "preparacion", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DosificacionPreparacionDto.prototype, "peso_bruto_kg", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DosificacionPreparacionDto.prototype, "peso_neto_kg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DosificacionPreparacionDto.prototype, "energia_kcal", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DosificacionPreparacionDto.prototype, "proteina_g", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DosificacionPreparacionDto.prototype, "grasa_g", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DosificacionPreparacionDto.prototype, "carbohidrato_g", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DosificacionPreparacionDto.prototype, "hierro_mg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DosificacionPreparacionDto.prototype, "retinol_ug", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DosificacionPreparacionDto.prototype, "porcion_comestible_pct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DosificacionPreparacionDto.prototype, "fuente", void 0);
class FoodSubstitutionDto {
    foodId;
    substituteFoodId;
    equivalentType;
    foodQuantityGrams;
    substituteQuantityGrams;
    notes;
}
exports.FoodSubstitutionDto = FoodSubstitutionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FoodSubstitutionDto.prototype, "foodId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FoodSubstitutionDto.prototype, "substituteFoodId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FoodSubstitutionDto.prototype, "equivalentType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FoodSubstitutionDto.prototype, "foodQuantityGrams", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FoodSubstitutionDto.prototype, "substituteQuantityGrams", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FoodSubstitutionDto.prototype, "notes", void 0);
class MessageDto {
    patientId;
    content;
}
exports.MessageDto = MessageDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessageDto.prototype, "patientId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessageDto.prototype, "content", void 0);
class PaymentDto {
    patientId;
    concept;
    amount;
    currency;
    status;
    method;
    dueDate;
    paidAt;
    reference;
}
exports.PaymentDto = PaymentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "patientId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "concept", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaymentDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "dueDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "paidAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "reference", void 0);
class ResourceDto {
    title;
    category;
    type;
    content;
    url;
}
exports.ResourceDto = ResourceDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResourceDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResourceDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResourceDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResourceDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResourceDto.prototype, "url", void 0);
class PatientDocumentDto {
    patientId;
    name;
    category;
    url;
    notes;
}
exports.PatientDocumentDto = PatientDocumentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDocumentDto.prototype, "patientId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDocumentDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDocumentDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDocumentDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatientDocumentDto.prototype, "notes", void 0);
class WaterLogDto {
    patientId;
    occurredAt;
    amountMl;
}
exports.WaterLogDto = WaterLogDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WaterLogDto.prototype, "patientId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], WaterLogDto.prototype, "occurredAt", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], WaterLogDto.prototype, "amountMl", void 0);
class ActivityLogDto {
    patientId;
    occurredAt;
    activity;
    durationMinutes;
    caloriesBurned;
    notes;
}
exports.ActivityLogDto = ActivityLogDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActivityLogDto.prototype, "patientId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ActivityLogDto.prototype, "occurredAt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActivityLogDto.prototype, "activity", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ActivityLogDto.prototype, "durationMinutes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ActivityLogDto.prototype, "caloriesBurned", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActivityLogDto.prototype, "notes", void 0);
//# sourceMappingURL=clinical.dto.js.map