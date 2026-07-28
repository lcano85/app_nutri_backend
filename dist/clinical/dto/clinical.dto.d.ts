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
