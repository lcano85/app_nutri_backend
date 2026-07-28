import { CreatePatientDto, UpdatePatientDto } from './dto/patient.dto';
import { PatientsService } from './patients.service';
export declare class PatientsController {
    private patients;
    constructor(patients: PatientsService);
    list(req: any): import(".prisma/client").Prisma.PrismaPromise<({
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
    create(req: any, dto: CreatePatientDto): Promise<{
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
    update(req: any, id: string, dto: UpdatePatientDto): Promise<[{
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
    remove(req: any, id: string): Promise<{
        message: string;
    }>;
}
