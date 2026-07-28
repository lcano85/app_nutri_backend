import { ClinicalService } from './clinical.service';
import { ActivityLogDto, AppointmentDto, DiaryEntryDto, FoodDto, FoodSubstitutionDto, GoalDto, MealPlanDto, MeasurementDto, MessageDto, PatientDocumentDto, PaymentDto, RecipeDto, ResourceDto, WaterLogDto } from './dto/clinical.dto';
export declare class ClinicalController {
    private c;
    constructor(c: ClinicalService);
    appointments(r: any): import(".prisma/client").Prisma.PrismaPromise<({
        patient: {
            user: {
                firstName: string;
                lastName: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            phone: string | null;
            birthDate: Date | null;
            heightCm: import("@prisma/client/runtime/library").Decimal | null;
            allergies: import("@prisma/client/runtime/library").JsonValue;
            conditions: import("@prisma/client/runtime/library").JsonValue;
            acquisitionSource: string | null;
            sourceDetail: string | null;
            notes: string | null;
            nutritionistId: string;
            documentNumber: string | null;
            sex: string | null;
            dietaryPreferences: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        reason: string | null;
        notes: string | null;
        nutritionistId: string;
        patientId: string;
        startsAt: Date;
        endsAt: Date;
        consultationType: string;
        meetingProvider: string | null;
        meetingUrl: string | null;
        reminderMinutes: number;
    })[]>;
    createAppointment(r: any, d: AppointmentDto): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        reason: string | null;
        notes: string | null;
        nutritionistId: string;
        patientId: string;
        startsAt: Date;
        endsAt: Date;
        consultationType: string;
        meetingProvider: string | null;
        meetingUrl: string | null;
        reminderMinutes: number;
    }>;
    updateAppointment(r: any, id: string, d: AppointmentDto): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        reason: string | null;
        notes: string | null;
        nutritionistId: string;
        patientId: string;
        startsAt: Date;
        endsAt: Date;
        consultationType: string;
        meetingProvider: string | null;
        meetingUrl: string | null;
        reminderMinutes: number;
    }>;
    deleteAppointment(id: string): import(".prisma/client").Prisma.Prisma__AppointmentClient<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        reason: string | null;
        notes: string | null;
        nutritionistId: string;
        patientId: string;
        startsAt: Date;
        endsAt: Date;
        consultationType: string;
        meetingProvider: string | null;
        meetingUrl: string | null;
        reminderMinutes: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    measurements(r: any): import(".prisma/client").Prisma.PrismaPromise<({
        patient: {
            user: {
                firstName: string;
                lastName: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            phone: string | null;
            birthDate: Date | null;
            heightCm: import("@prisma/client/runtime/library").Decimal | null;
            allergies: import("@prisma/client/runtime/library").JsonValue;
            conditions: import("@prisma/client/runtime/library").JsonValue;
            acquisitionSource: string | null;
            sourceDetail: string | null;
            notes: string | null;
            nutritionistId: string;
            documentNumber: string | null;
            sex: string | null;
            dietaryPreferences: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: string;
        notes: string | null;
        measuredAt: Date;
        patientId: string;
        weightKg: import("@prisma/client/runtime/library").Decimal;
        bodyFatPct: import("@prisma/client/runtime/library").Decimal | null;
        waistCm: import("@prisma/client/runtime/library").Decimal | null;
    })[]>;
    createMeasurement(d: MeasurementDto): import(".prisma/client").Prisma.Prisma__MeasurementClient<{
        id: string;
        notes: string | null;
        measuredAt: Date;
        patientId: string;
        weightKg: import("@prisma/client/runtime/library").Decimal;
        bodyFatPct: import("@prisma/client/runtime/library").Decimal | null;
        waistCm: import("@prisma/client/runtime/library").Decimal | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteMeasurement(id: string): import(".prisma/client").Prisma.Prisma__MeasurementClient<{
        id: string;
        notes: string | null;
        measuredAt: Date;
        patientId: string;
        weightKg: import("@prisma/client/runtime/library").Decimal;
        bodyFatPct: import("@prisma/client/runtime/library").Decimal | null;
        waistCm: import("@prisma/client/runtime/library").Decimal | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    recipes(r: any): import(".prisma/client").Prisma.PrismaPromise<{
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        nutritionistId: string;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        instructions: string;
        servings: number;
        preparationMinutes: number | null;
        calories: import("@prisma/client/runtime/library").Decimal | null;
        proteinGrams: import("@prisma/client/runtime/library").Decimal | null;
        carbohydrateGrams: import("@prisma/client/runtime/library").Decimal | null;
        fatGrams: import("@prisma/client/runtime/library").Decimal | null;
    }[]>;
    createRecipe(r: any, d: RecipeDto): import(".prisma/client").Prisma.Prisma__RecipeClient<{
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        nutritionistId: string;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        instructions: string;
        servings: number;
        preparationMinutes: number | null;
        calories: import("@prisma/client/runtime/library").Decimal | null;
        proteinGrams: import("@prisma/client/runtime/library").Decimal | null;
        carbohydrateGrams: import("@prisma/client/runtime/library").Decimal | null;
        fatGrams: import("@prisma/client/runtime/library").Decimal | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    updateRecipe(id: string, d: RecipeDto): import(".prisma/client").Prisma.Prisma__RecipeClient<{
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        nutritionistId: string;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        instructions: string;
        servings: number;
        preparationMinutes: number | null;
        calories: import("@prisma/client/runtime/library").Decimal | null;
        proteinGrams: import("@prisma/client/runtime/library").Decimal | null;
        carbohydrateGrams: import("@prisma/client/runtime/library").Decimal | null;
        fatGrams: import("@prisma/client/runtime/library").Decimal | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteRecipe(id: string): import(".prisma/client").Prisma.Prisma__RecipeClient<{
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        nutritionistId: string;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        instructions: string;
        servings: number;
        preparationMinutes: number | null;
        calories: import("@prisma/client/runtime/library").Decimal | null;
        proteinGrams: import("@prisma/client/runtime/library").Decimal | null;
        carbohydrateGrams: import("@prisma/client/runtime/library").Decimal | null;
        fatGrams: import("@prisma/client/runtime/library").Decimal | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    plans(r: any): import(".prisma/client").Prisma.PrismaPromise<({
        patient: {
            user: {
                firstName: string;
                lastName: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            phone: string | null;
            birthDate: Date | null;
            heightCm: import("@prisma/client/runtime/library").Decimal | null;
            allergies: import("@prisma/client/runtime/library").JsonValue;
            conditions: import("@prisma/client/runtime/library").JsonValue;
            acquisitionSource: string | null;
            sourceDetail: string | null;
            notes: string | null;
            nutritionistId: string;
            documentNumber: string | null;
            sex: string | null;
            dietaryPreferences: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        status: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nutritionistId: string;
        patientId: string;
        startsAt: Date;
        endsAt: Date | null;
        targetCalories: number | null;
        targetProteinGrams: import("@prisma/client/runtime/library").Decimal | null;
        targetCarbohydrateGrams: import("@prisma/client/runtime/library").Decimal | null;
        targetFatGrams: import("@prisma/client/runtime/library").Decimal | null;
        meals: import("@prisma/client/runtime/library").JsonValue;
        recommendations: string | null;
    })[]>;
    createPlan(r: any, d: MealPlanDto): import(".prisma/client").Prisma.Prisma__MealPlanClient<{
        status: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nutritionistId: string;
        patientId: string;
        startsAt: Date;
        endsAt: Date | null;
        targetCalories: number | null;
        targetProteinGrams: import("@prisma/client/runtime/library").Decimal | null;
        targetCarbohydrateGrams: import("@prisma/client/runtime/library").Decimal | null;
        targetFatGrams: import("@prisma/client/runtime/library").Decimal | null;
        meals: import("@prisma/client/runtime/library").JsonValue;
        recommendations: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    updatePlan(id: string, d: MealPlanDto): import(".prisma/client").Prisma.Prisma__MealPlanClient<{
        status: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nutritionistId: string;
        patientId: string;
        startsAt: Date;
        endsAt: Date | null;
        targetCalories: number | null;
        targetProteinGrams: import("@prisma/client/runtime/library").Decimal | null;
        targetCarbohydrateGrams: import("@prisma/client/runtime/library").Decimal | null;
        targetFatGrams: import("@prisma/client/runtime/library").Decimal | null;
        meals: import("@prisma/client/runtime/library").JsonValue;
        recommendations: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deletePlan(id: string): import(".prisma/client").Prisma.Prisma__MealPlanClient<{
        status: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nutritionistId: string;
        patientId: string;
        startsAt: Date;
        endsAt: Date | null;
        targetCalories: number | null;
        targetProteinGrams: import("@prisma/client/runtime/library").Decimal | null;
        targetCarbohydrateGrams: import("@prisma/client/runtime/library").Decimal | null;
        targetFatGrams: import("@prisma/client/runtime/library").Decimal | null;
        meals: import("@prisma/client/runtime/library").JsonValue;
        recommendations: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    goals(r: any): import(".prisma/client").Prisma.PrismaPromise<({
        patient: {
            user: {
                firstName: string;
                lastName: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            phone: string | null;
            birthDate: Date | null;
            heightCm: import("@prisma/client/runtime/library").Decimal | null;
            allergies: import("@prisma/client/runtime/library").JsonValue;
            conditions: import("@prisma/client/runtime/library").JsonValue;
            acquisitionSource: string | null;
            sourceDetail: string | null;
            notes: string | null;
            nutritionistId: string;
            documentNumber: string | null;
            sex: string | null;
            dietaryPreferences: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        status: string;
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        patientId: string;
        targetValue: import("@prisma/client/runtime/library").Decimal | null;
        currentValue: import("@prisma/client/runtime/library").Decimal | null;
        unit: string | null;
        dueDate: Date | null;
    })[]>;
    createGoal(d: GoalDto): import(".prisma/client").Prisma.Prisma__GoalClient<{
        status: string;
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        patientId: string;
        targetValue: import("@prisma/client/runtime/library").Decimal | null;
        currentValue: import("@prisma/client/runtime/library").Decimal | null;
        unit: string | null;
        dueDate: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    updateGoal(id: string, d: GoalDto): import(".prisma/client").Prisma.Prisma__GoalClient<{
        status: string;
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        patientId: string;
        targetValue: import("@prisma/client/runtime/library").Decimal | null;
        currentValue: import("@prisma/client/runtime/library").Decimal | null;
        unit: string | null;
        dueDate: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteGoal(id: string): import(".prisma/client").Prisma.Prisma__GoalClient<{
        status: string;
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        patientId: string;
        targetValue: import("@prisma/client/runtime/library").Decimal | null;
        currentValue: import("@prisma/client/runtime/library").Decimal | null;
        unit: string | null;
        dueDate: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    diary(r: any): import(".prisma/client").Prisma.PrismaPromise<({
        patient: {
            user: {
                firstName: string;
                lastName: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            phone: string | null;
            birthDate: Date | null;
            heightCm: import("@prisma/client/runtime/library").Decimal | null;
            allergies: import("@prisma/client/runtime/library").JsonValue;
            conditions: import("@prisma/client/runtime/library").JsonValue;
            acquisitionSource: string | null;
            sourceDetail: string | null;
            notes: string | null;
            nutritionistId: string;
            documentNumber: string | null;
            sex: string | null;
            dietaryPreferences: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        description: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        patientId: string;
        calories: number | null;
        occurredAt: Date;
        mealType: string;
        waterMl: number | null;
        mood: string | null;
    })[]>;
    createDiary(d: DiaryEntryDto): import(".prisma/client").Prisma.Prisma__FoodDiaryEntryClient<{
        description: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        patientId: string;
        calories: number | null;
        occurredAt: Date;
        mealType: string;
        waterMl: number | null;
        mood: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteDiary(id: string): import(".prisma/client").Prisma.Prisma__FoodDiaryEntryClient<{
        description: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        patientId: string;
        calories: number | null;
        occurredAt: Date;
        mealType: string;
        waterMl: number | null;
        mood: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    foods(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        calories: import("@prisma/client/runtime/library").Decimal;
        proteinGrams: import("@prisma/client/runtime/library").Decimal;
        carbohydrateGrams: import("@prisma/client/runtime/library").Decimal;
        fatGrams: import("@prisma/client/runtime/library").Decimal;
        category: string | null;
        servingName: string;
        servingGrams: import("@prisma/client/runtime/library").Decimal;
        fiberGrams: import("@prisma/client/runtime/library").Decimal;
        sodiumMg: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    createFood(d: FoodDto): import(".prisma/client").Prisma.Prisma__FoodClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        calories: import("@prisma/client/runtime/library").Decimal;
        proteinGrams: import("@prisma/client/runtime/library").Decimal;
        carbohydrateGrams: import("@prisma/client/runtime/library").Decimal;
        fatGrams: import("@prisma/client/runtime/library").Decimal;
        category: string | null;
        servingName: string;
        servingGrams: import("@prisma/client/runtime/library").Decimal;
        fiberGrams: import("@prisma/client/runtime/library").Decimal;
        sodiumMg: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    updateFood(id: string, d: FoodDto): import(".prisma/client").Prisma.Prisma__FoodClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        calories: import("@prisma/client/runtime/library").Decimal;
        proteinGrams: import("@prisma/client/runtime/library").Decimal;
        carbohydrateGrams: import("@prisma/client/runtime/library").Decimal;
        fatGrams: import("@prisma/client/runtime/library").Decimal;
        category: string | null;
        servingName: string;
        servingGrams: import("@prisma/client/runtime/library").Decimal;
        fiberGrams: import("@prisma/client/runtime/library").Decimal;
        sodiumMg: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteFood(id: string): import(".prisma/client").Prisma.Prisma__FoodClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        calories: import("@prisma/client/runtime/library").Decimal;
        proteinGrams: import("@prisma/client/runtime/library").Decimal;
        carbohydrateGrams: import("@prisma/client/runtime/library").Decimal;
        fatGrams: import("@prisma/client/runtime/library").Decimal;
        category: string | null;
        servingName: string;
        servingGrams: import("@prisma/client/runtime/library").Decimal;
        fiberGrams: import("@prisma/client/runtime/library").Decimal;
        sodiumMg: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    substitutions(): import(".prisma/client").Prisma.PrismaPromise<({
        food: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            active: boolean;
            calories: import("@prisma/client/runtime/library").Decimal;
            proteinGrams: import("@prisma/client/runtime/library").Decimal;
            carbohydrateGrams: import("@prisma/client/runtime/library").Decimal;
            fatGrams: import("@prisma/client/runtime/library").Decimal;
            category: string | null;
            servingName: string;
            servingGrams: import("@prisma/client/runtime/library").Decimal;
            fiberGrams: import("@prisma/client/runtime/library").Decimal;
            sodiumMg: import("@prisma/client/runtime/library").Decimal;
        };
        substituteFood: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            active: boolean;
            calories: import("@prisma/client/runtime/library").Decimal;
            proteinGrams: import("@prisma/client/runtime/library").Decimal;
            carbohydrateGrams: import("@prisma/client/runtime/library").Decimal;
            fatGrams: import("@prisma/client/runtime/library").Decimal;
            category: string | null;
            servingName: string;
            servingGrams: import("@prisma/client/runtime/library").Decimal;
            fiberGrams: import("@prisma/client/runtime/library").Decimal;
            sodiumMg: import("@prisma/client/runtime/library").Decimal;
        };
    } & {
        id: string;
        notes: string | null;
        foodId: string;
        substituteFoodId: string;
        equivalentType: string;
        foodQuantityGrams: import("@prisma/client/runtime/library").Decimal;
        substituteQuantityGrams: import("@prisma/client/runtime/library").Decimal;
    })[]>;
    createSubstitution(d: FoodSubstitutionDto): import(".prisma/client").Prisma.Prisma__FoodSubstitutionClient<{
        id: string;
        notes: string | null;
        foodId: string;
        substituteFoodId: string;
        equivalentType: string;
        foodQuantityGrams: import("@prisma/client/runtime/library").Decimal;
        substituteQuantityGrams: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteSubstitution(id: string): import(".prisma/client").Prisma.Prisma__FoodSubstitutionClient<{
        id: string;
        notes: string | null;
        foodId: string;
        substituteFoodId: string;
        equivalentType: string;
        foodQuantityGrams: import("@prisma/client/runtime/library").Decimal;
        substituteQuantityGrams: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    messages(r: any): import(".prisma/client").Prisma.PrismaPromise<({
        patient: {
            user: {
                firstName: string;
                lastName: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            phone: string | null;
            birthDate: Date | null;
            heightCm: import("@prisma/client/runtime/library").Decimal | null;
            allergies: import("@prisma/client/runtime/library").JsonValue;
            conditions: import("@prisma/client/runtime/library").JsonValue;
            acquisitionSource: string | null;
            sourceDetail: string | null;
            notes: string | null;
            nutritionistId: string;
            documentNumber: string | null;
            sex: string | null;
            dietaryPreferences: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: string;
        createdAt: Date;
        patientId: string;
        content: string;
        senderId: string;
        readAt: Date | null;
    })[]>;
    createMessage(r: any, d: MessageDto): import(".prisma/client").Prisma.Prisma__MessageClient<{
        id: string;
        createdAt: Date;
        patientId: string;
        content: string;
        senderId: string;
        readAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteMessage(id: string): import(".prisma/client").Prisma.Prisma__MessageClient<{
        id: string;
        createdAt: Date;
        patientId: string;
        content: string;
        senderId: string;
        readAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    payments(r: any): import(".prisma/client").Prisma.PrismaPromise<({
        patient: {
            user: {
                firstName: string;
                lastName: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            phone: string | null;
            birthDate: Date | null;
            heightCm: import("@prisma/client/runtime/library").Decimal | null;
            allergies: import("@prisma/client/runtime/library").JsonValue;
            conditions: import("@prisma/client/runtime/library").JsonValue;
            acquisitionSource: string | null;
            sourceDetail: string | null;
            notes: string | null;
            nutritionistId: string;
            documentNumber: string | null;
            sex: string | null;
            dietaryPreferences: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        patientId: string;
        dueDate: Date | null;
        concept: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        method: string | null;
        paidAt: Date | null;
        reference: string | null;
    })[]>;
    createPayment(d: PaymentDto): import(".prisma/client").Prisma.Prisma__PaymentClient<{
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        patientId: string;
        dueDate: Date | null;
        concept: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        method: string | null;
        paidAt: Date | null;
        reference: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    updatePayment(id: string, d: PaymentDto): import(".prisma/client").Prisma.Prisma__PaymentClient<{
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        patientId: string;
        dueDate: Date | null;
        concept: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        method: string | null;
        paidAt: Date | null;
        reference: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deletePayment(id: string): import(".prisma/client").Prisma.Prisma__PaymentClient<{
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        patientId: string;
        dueDate: Date | null;
        concept: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        method: string | null;
        paidAt: Date | null;
        reference: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    resources(r: any): import(".prisma/client").Prisma.PrismaPromise<{
        type: string;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        active: boolean;
        nutritionistId: string;
        category: string | null;
        content: string | null;
        url: string | null;
    }[]>;
    createResource(r: any, d: ResourceDto): import(".prisma/client").Prisma.Prisma__EducationalResourceClient<{
        type: string;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        active: boolean;
        nutritionistId: string;
        category: string | null;
        content: string | null;
        url: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    updateResource(id: string, d: ResourceDto): import(".prisma/client").Prisma.Prisma__EducationalResourceClient<{
        type: string;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        active: boolean;
        nutritionistId: string;
        category: string | null;
        content: string | null;
        url: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteResource(id: string): import(".prisma/client").Prisma.Prisma__EducationalResourceClient<{
        type: string;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        active: boolean;
        nutritionistId: string;
        category: string | null;
        content: string | null;
        url: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    documents(r: any): import(".prisma/client").Prisma.PrismaPromise<({
        patient: {
            user: {
                firstName: string;
                lastName: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            phone: string | null;
            birthDate: Date | null;
            heightCm: import("@prisma/client/runtime/library").Decimal | null;
            allergies: import("@prisma/client/runtime/library").JsonValue;
            conditions: import("@prisma/client/runtime/library").JsonValue;
            acquisitionSource: string | null;
            sourceDetail: string | null;
            notes: string | null;
            nutritionistId: string;
            documentNumber: string | null;
            sex: string | null;
            dietaryPreferences: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: string;
        createdAt: Date;
        name: string;
        notes: string | null;
        patientId: string;
        category: string | null;
        url: string;
    })[]>;
    createDocument(d: PatientDocumentDto): import(".prisma/client").Prisma.Prisma__PatientDocumentClient<{
        id: string;
        createdAt: Date;
        name: string;
        notes: string | null;
        patientId: string;
        category: string | null;
        url: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteDocument(id: string): import(".prisma/client").Prisma.Prisma__PatientDocumentClient<{
        id: string;
        createdAt: Date;
        name: string;
        notes: string | null;
        patientId: string;
        category: string | null;
        url: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    waterLogs(r: any): import(".prisma/client").Prisma.PrismaPromise<({
        patient: {
            user: {
                firstName: string;
                lastName: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            phone: string | null;
            birthDate: Date | null;
            heightCm: import("@prisma/client/runtime/library").Decimal | null;
            allergies: import("@prisma/client/runtime/library").JsonValue;
            conditions: import("@prisma/client/runtime/library").JsonValue;
            acquisitionSource: string | null;
            sourceDetail: string | null;
            notes: string | null;
            nutritionistId: string;
            documentNumber: string | null;
            sex: string | null;
            dietaryPreferences: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: string;
        patientId: string;
        occurredAt: Date;
        amountMl: number;
    })[]>;
    createWaterLog(d: WaterLogDto): import(".prisma/client").Prisma.Prisma__WaterLogClient<{
        id: string;
        patientId: string;
        occurredAt: Date;
        amountMl: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteWaterLog(id: string): import(".prisma/client").Prisma.Prisma__WaterLogClient<{
        id: string;
        patientId: string;
        occurredAt: Date;
        amountMl: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    activityLogs(r: any): import(".prisma/client").Prisma.PrismaPromise<({
        patient: {
            user: {
                firstName: string;
                lastName: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            phone: string | null;
            birthDate: Date | null;
            heightCm: import("@prisma/client/runtime/library").Decimal | null;
            allergies: import("@prisma/client/runtime/library").JsonValue;
            conditions: import("@prisma/client/runtime/library").JsonValue;
            acquisitionSource: string | null;
            sourceDetail: string | null;
            notes: string | null;
            nutritionistId: string;
            documentNumber: string | null;
            sex: string | null;
            dietaryPreferences: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: string;
        notes: string | null;
        patientId: string;
        occurredAt: Date;
        activity: string;
        durationMinutes: number;
        caloriesBurned: number | null;
    })[]>;
    createActivityLog(d: ActivityLogDto): import(".prisma/client").Prisma.Prisma__ActivityLogClient<{
        id: string;
        notes: string | null;
        patientId: string;
        occurredAt: Date;
        activity: string;
        durationMinutes: number;
        caloriesBurned: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteActivityLog(id: string): import(".prisma/client").Prisma.Prisma__ActivityLogClient<{
        id: string;
        notes: string | null;
        patientId: string;
        occurredAt: Date;
        activity: string;
        durationMinutes: number;
        caloriesBurned: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    portal(id: string): import(".prisma/client").Prisma.Prisma__PatientClient<{
        user: {
            email: string;
            firstName: string;
            lastName: string;
        } | null;
        mealPlans: {
            status: string;
            description: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            nutritionistId: string;
            patientId: string;
            startsAt: Date;
            endsAt: Date | null;
            targetCalories: number | null;
            targetProteinGrams: import("@prisma/client/runtime/library").Decimal | null;
            targetCarbohydrateGrams: import("@prisma/client/runtime/library").Decimal | null;
            targetFatGrams: import("@prisma/client/runtime/library").Decimal | null;
            meals: import("@prisma/client/runtime/library").JsonValue;
            recommendations: string | null;
        }[];
        measurements: {
            id: string;
            notes: string | null;
            measuredAt: Date;
            patientId: string;
            weightKg: import("@prisma/client/runtime/library").Decimal;
            bodyFatPct: import("@prisma/client/runtime/library").Decimal | null;
            waistCm: import("@prisma/client/runtime/library").Decimal | null;
        }[];
        appointments: {
            status: import(".prisma/client").$Enums.AppointmentStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            reason: string | null;
            notes: string | null;
            nutritionistId: string;
            patientId: string;
            startsAt: Date;
            endsAt: Date;
            consultationType: string;
            meetingProvider: string | null;
            meetingUrl: string | null;
            reminderMinutes: number;
        }[];
        goals: {
            status: string;
            description: string | null;
            title: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            patientId: string;
            targetValue: import("@prisma/client/runtime/library").Decimal | null;
            currentValue: import("@prisma/client/runtime/library").Decimal | null;
            unit: string | null;
            dueDate: Date | null;
        }[];
        diaryEntries: {
            description: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            patientId: string;
            calories: number | null;
            occurredAt: Date;
            mealType: string;
            waterMl: number | null;
            mood: string | null;
        }[];
        messages: {
            id: string;
            createdAt: Date;
            patientId: string;
            content: string;
            senderId: string;
            readAt: Date | null;
        }[];
        documents: {
            id: string;
            createdAt: Date;
            name: string;
            notes: string | null;
            patientId: string;
            category: string | null;
            url: string;
        }[];
        waterLogs: {
            id: string;
            patientId: string;
            occurredAt: Date;
            amountMl: number;
        }[];
        activityLogs: {
            id: string;
            notes: string | null;
            patientId: string;
            occurredAt: Date;
            activity: string;
            durationMinutes: number;
            caloriesBurned: number | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        phone: string | null;
        birthDate: Date | null;
        heightCm: import("@prisma/client/runtime/library").Decimal | null;
        allergies: import("@prisma/client/runtime/library").JsonValue;
        conditions: import("@prisma/client/runtime/library").JsonValue;
        acquisitionSource: string | null;
        sourceDetail: string | null;
        notes: string | null;
        nutritionistId: string;
        documentNumber: string | null;
        sex: string | null;
        dietaryPreferences: import("@prisma/client/runtime/library").JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
