export declare class CreatePatientDto {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    birthDate?: string;
    heightCm?: number;
    allergies?: string[];
    conditions?: string[];
    acquisitionSource?: string;
    sourceDetail?: string;
    notes?: string;
}
export declare class UpdatePatientDto {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    birthDate?: string;
    heightCm?: number;
    allergies?: string[];
    conditions?: string[];
    acquisitionSource?: string;
    sourceDetail?: string;
    notes?: string;
}
