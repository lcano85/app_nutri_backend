import { PrismaService } from '../prisma/prisma.service';
import { CreatePatientDto, UpdatePatientDto } from './dto/patient.dto';
export declare class PatientsService {
    private prisma;
    constructor(prisma: PrismaService);
    list(nutritionistId: string): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            email: string;
            firstName: string;
            lastName: string;
            loginLogs: {
                createdAt: Date;
            }[];
        } | null;
        measurements: {
            id: string;
            notes: string | null;
            measuredAt: Date;
            patientId: string;
            weightKg: import("@prisma/client/runtime/library").Decimal;
            bodyFatPct: import("@prisma/client/runtime/library").Decimal | null;
            waistCm: import("@prisma/client/runtime/library").Decimal | null;
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
    })[]>;
    create(nutritionistId: string, dto: CreatePatientDto): Promise<{
        user: {
            email: string;
            id: string;
            passwordHash: string;
            firstName: string;
            lastName: string;
            roleId: string;
            statusId: string;
            refreshTokenHash: string | null;
            createdAt: Date;
            updatedAt: Date;
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
    }>;
    update(id: string, nutritionistId: string, dto: UpdatePatientDto): Promise<[{
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
    }, ...{
        email: string;
        id: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        roleId: string;
        statusId: string;
        refreshTokenHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]]>;
    remove(id: string, nutritionistId: string): Promise<{
        message: string;
    }>;
}
