CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL, "nutritionistId" TEXT NOT NULL, "name" TEXT NOT NULL,
    "description" TEXT, "ingredients" JSONB NOT NULL, "instructions" TEXT NOT NULL,
    "servings" INTEGER NOT NULL DEFAULT 1, "preparationMinutes" INTEGER,
    "calories" DECIMAL(8,2), "proteinGrams" DECIMAL(8,2),
    "carbohydrateGrams" DECIMAL(8,2), "fatGrams" DECIMAL(8,2),
    "active" BOOLEAN NOT NULL DEFAULT true, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL, CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "MealPlan" (
    "id" TEXT NOT NULL, "patientId" TEXT NOT NULL, "nutritionistId" TEXT NOT NULL,
    "name" TEXT NOT NULL, "description" TEXT, "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3), "status" TEXT NOT NULL DEFAULT 'BORRADOR',
    "targetCalories" INTEGER, "targetProteinGrams" DECIMAL(8,2),
    "targetCarbohydrateGrams" DECIMAL(8,2), "targetFatGrams" DECIMAL(8,2),
    "meals" JSONB NOT NULL, "recommendations" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "MealPlan_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Goal" (
    "id" TEXT NOT NULL, "patientId" TEXT NOT NULL, "title" TEXT NOT NULL,
    "description" TEXT, "targetValue" DECIMAL(10,2), "currentValue" DECIMAL(10,2),
    "unit" TEXT, "status" TEXT NOT NULL DEFAULT 'EN_PROGRESO', "dueDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "FoodDiaryEntry" (
    "id" TEXT NOT NULL, "patientId" TEXT NOT NULL, "occurredAt" TIMESTAMP(3) NOT NULL,
    "mealType" TEXT NOT NULL, "description" TEXT NOT NULL, "calories" INTEGER,
    "waterMl" INTEGER, "mood" TEXT, "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "FoodDiaryEntry_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "Recipe_nutritionistId_idx" ON "Recipe"("nutritionistId");
CREATE INDEX "MealPlan_patientId_idx" ON "MealPlan"("patientId");
CREATE INDEX "MealPlan_nutritionistId_idx" ON "MealPlan"("nutritionistId");
CREATE INDEX "Goal_patientId_idx" ON "Goal"("patientId");
CREATE INDEX "FoodDiaryEntry_patientId_occurredAt_idx" ON "FoodDiaryEntry"("patientId", "occurredAt");
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_nutritionistId_fkey" FOREIGN KEY ("nutritionistId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "MealPlan" ADD CONSTRAINT "MealPlan_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "MealPlan" ADD CONSTRAINT "MealPlan_nutritionistId_fkey" FOREIGN KEY ("nutritionistId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "FoodDiaryEntry" ADD CONSTRAINT "FoodDiaryEntry_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
