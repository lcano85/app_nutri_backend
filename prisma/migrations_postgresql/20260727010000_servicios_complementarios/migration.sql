ALTER TABLE "Appointment" ADD COLUMN "consultationType" TEXT NOT NULL DEFAULT 'PRESENCIAL';
ALTER TABLE "Appointment" ADD COLUMN "meetingProvider" TEXT;
ALTER TABLE "Appointment" ADD COLUMN "meetingUrl" TEXT;
ALTER TABLE "Appointment" ADD COLUMN "reminderMinutes" INTEGER NOT NULL DEFAULT 1440;

CREATE TABLE "Food" (
 "id" TEXT NOT NULL, "name" TEXT NOT NULL, "category" TEXT, "servingName" TEXT NOT NULL DEFAULT '100 gramos',
 "servingGrams" DECIMAL(8,2) NOT NULL DEFAULT 100, "calories" DECIMAL(8,2) NOT NULL,
 "proteinGrams" DECIMAL(8,2) NOT NULL DEFAULT 0, "carbohydrateGrams" DECIMAL(8,2) NOT NULL DEFAULT 0,
 "fatGrams" DECIMAL(8,2) NOT NULL DEFAULT 0, "fiberGrams" DECIMAL(8,2) NOT NULL DEFAULT 0,
 "sodiumMg" DECIMAL(8,2) NOT NULL DEFAULT 0, "active" BOOLEAN NOT NULL DEFAULT true,
 "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
 CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "FoodSubstitution" (
 "id" TEXT NOT NULL, "foodId" TEXT NOT NULL, "substituteFoodId" TEXT NOT NULL,
 "equivalentType" TEXT NOT NULL DEFAULT 'ENERGIA', "foodQuantityGrams" DECIMAL(8,2) NOT NULL,
 "substituteQuantityGrams" DECIMAL(8,2) NOT NULL, "notes" TEXT,
 CONSTRAINT "FoodSubstitution_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Message" (
 "id" TEXT NOT NULL, "patientId" TEXT NOT NULL, "senderId" TEXT NOT NULL, "content" TEXT NOT NULL,
 "readAt" TIMESTAMP(3), "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Payment" (
 "id" TEXT NOT NULL, "patientId" TEXT NOT NULL, "concept" TEXT NOT NULL, "amount" DECIMAL(10,2) NOT NULL,
 "currency" TEXT NOT NULL DEFAULT 'PEN', "status" TEXT NOT NULL DEFAULT 'PENDIENTE', "method" TEXT,
 "dueDate" TIMESTAMP(3), "paidAt" TIMESTAMP(3), "reference" TEXT,
 "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
 CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "EducationalResource" (
 "id" TEXT NOT NULL, "nutritionistId" TEXT NOT NULL, "title" TEXT NOT NULL, "category" TEXT,
 "type" TEXT NOT NULL DEFAULT 'ARTICULO', "content" TEXT, "url" TEXT, "active" BOOLEAN NOT NULL DEFAULT true,
 "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
 CONSTRAINT "EducationalResource_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "PatientDocument" (
 "id" TEXT NOT NULL, "patientId" TEXT NOT NULL, "name" TEXT NOT NULL, "category" TEXT, "url" TEXT NOT NULL,
 "notes" TEXT, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT "PatientDocument_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "WaterLog" (
 "id" TEXT NOT NULL, "patientId" TEXT NOT NULL, "occurredAt" TIMESTAMP(3) NOT NULL, "amountMl" INTEGER NOT NULL,
 CONSTRAINT "WaterLog_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "ActivityLog" (
 "id" TEXT NOT NULL, "patientId" TEXT NOT NULL, "occurredAt" TIMESTAMP(3) NOT NULL, "activity" TEXT NOT NULL,
 "durationMinutes" INTEGER NOT NULL, "caloriesBurned" INTEGER, "notes" TEXT,
 CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "Food_name_idx" ON "Food"("name"); CREATE INDEX "Food_category_idx" ON "Food"("category");
CREATE UNIQUE INDEX "FoodSubstitution_foodId_substituteFoodId_key" ON "FoodSubstitution"("foodId","substituteFoodId");
CREATE INDEX "Message_patientId_createdAt_idx" ON "Message"("patientId","createdAt");
CREATE INDEX "Payment_patientId_idx" ON "Payment"("patientId");
CREATE INDEX "EducationalResource_nutritionistId_idx" ON "EducationalResource"("nutritionistId");
CREATE INDEX "WaterLog_patientId_occurredAt_idx" ON "WaterLog"("patientId","occurredAt");
CREATE INDEX "ActivityLog_patientId_occurredAt_idx" ON "ActivityLog"("patientId","occurredAt");
ALTER TABLE "FoodSubstitution" ADD CONSTRAINT "FoodSubstitution_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "FoodSubstitution" ADD CONSTRAINT "FoodSubstitution_substituteFoodId_fkey" FOREIGN KEY ("substituteFoodId") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Message" ADD CONSTRAINT "Message_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "EducationalResource" ADD CONSTRAINT "EducationalResource_nutritionistId_fkey" FOREIGN KEY ("nutritionistId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "PatientDocument" ADD CONSTRAINT "PatientDocument_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "WaterLog" ADD CONSTRAINT "WaterLog_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
