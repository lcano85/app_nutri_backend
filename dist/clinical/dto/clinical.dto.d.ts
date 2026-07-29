export declare class AppointmentDto {
    patientId: string;
    startsAt: string;
    endsAt: string;
    status?: string;
    reason?: string;
    notes?: string;
    consultationType?: string;
    meetingProvider?: string;
    meetingUrl?: string;
    reminderMinutes?: number;
}
export declare class MeasurementDto {
    patientId: string;
    measuredAt?: string;
    weightKg: number;
    bodyFatPct?: number;
    waistCm?: number;
    notes?: string;
}
export declare class RecipeDto {
    name: string;
    description?: string;
    ingredients: Array<{
        name: string;
        quantity: string;
    }>;
    instructions: string;
    servings: number;
    preparationMinutes?: number;
    calories?: number;
    proteinGrams?: number;
    carbohydrateGrams?: number;
    fatGrams?: number;
}
export declare class MealPlanDto {
    patientId: string;
    name: string;
    description?: string;
    startsAt: string;
    endsAt?: string;
    status?: string;
    targetCalories?: number;
    targetProteinGrams?: number;
    targetCarbohydrateGrams?: number;
    targetFatGrams?: number;
    meals: Record<string, unknown>;
    recommendations?: string;
}
export declare class GoalDto {
    patientId: string;
    title: string;
    description?: string;
    targetValue?: number;
    currentValue?: number;
    unit?: string;
    status?: string;
    dueDate?: string;
}
export declare class DiaryEntryDto {
    patientId: string;
    occurredAt: string;
    mealType: string;
    description: string;
    calories?: number;
    waterMl?: number;
    mood?: string;
    notes?: string;
}
export declare class FoodDto {
    name: string;
    category?: string;
    servingName: string;
    servingGrams: number;
    calories: number;
    proteinGrams: number;
    carbohydrateGrams: number;
    fatGrams: number;
    fiberGrams?: number;
    sodiumMg?: number;
}
export declare class TablaPeruanaAlimentoDto {
    codigo: string;
    codigo_grupo: string;
    codigo_numero: number;
    categoria_codigo: string;
    nombre: string;
    grupo?: string;
    estrato?: string;
    energia_kcal?: number;
    energia_kj?: number;
    agua_g?: number;
    proteina_g?: number;
    grasa_total_g?: number;
    carbohidratos_totales_g?: number;
    carbohidratos_disp_g?: number;
    fibra_dietaria_g?: number;
    cenizas_g?: number;
    calcio_mg?: number;
    fosforo_mg?: number;
    hierro_mg?: number;
    zinc_mg?: number;
    sodio_mg?: number;
    potasio_mg?: number;
    betacaroteno_ug?: number;
    vitamina_a_ug?: number;
    tiamina_mg?: number;
    riboflavina_mg?: number;
    niacina_mg?: number;
    vitamina_c_mg?: number;
    acido_folico_ug?: number;
    fuente?: string;
}
export declare class IntercambioAlimentoDto {
    codigo: string;
    categoria_id: number;
    subcategoria_id: number;
    nombre: string;
    peso_gramos: number;
    medida_casera: string;
    fuente?: string;
}
export declare class DosificacionPreparacionDto {
    alimento_id: string;
    preparacion: string;
    peso_bruto_kg: number;
    peso_neto_kg: number;
    energia_kcal?: number;
    proteina_g?: number;
    grasa_g?: number;
    carbohidrato_g?: number;
    hierro_mg?: number;
    retinol_ug?: number;
    porcion_comestible_pct?: number;
    fuente?: string;
}
export declare class FoodSubstitutionDto {
    foodId: string;
    substituteFoodId: string;
    equivalentType: string;
    foodQuantityGrams: number;
    substituteQuantityGrams: number;
    notes?: string;
}
export declare class MessageDto {
    patientId: string;
    content: string;
}
export declare class PaymentDto {
    patientId: string;
    concept: string;
    amount: number;
    currency?: string;
    status?: string;
    method?: string;
    dueDate?: string;
    paidAt?: string;
    reference?: string;
}
export declare class ResourceDto {
    title: string;
    category?: string;
    type: string;
    content?: string;
    url?: string;
}
export declare class PatientDocumentDto {
    patientId: string;
    name: string;
    category?: string;
    url: string;
    notes?: string;
}
export declare class WaterLogDto {
    patientId: string;
    occurredAt: string;
    amountMl: number;
}
export declare class ActivityLogDto {
    patientId: string;
    occurredAt: string;
    activity: string;
    durationMinutes: number;
    caloriesBurned?: number;
    notes?: string;
}
