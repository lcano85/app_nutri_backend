import { ClinicalService } from './clinical.service';
import { DosificacionPreparacionDto } from './dto/clinical.dto';
export declare class DosificacionAlimentosController {
    private readonly service;
    constructor(service: ClinicalService);
    findAll(page?: number, limit?: number, search?: string): Promise<{
        data: ({
            alimento: {
                categoria: {
                    id: number;
                    codigo: string;
                    nombre: string;
                    estado: number;
                    creado_en: Date;
                    actualizado_en: Date;
                };
            } & {
                id: string;
                codigo: string;
                nombre: string;
                categoria_id: number;
                estado: number;
                creado_en: Date;
                actualizado_en: Date;
                orden: number;
            };
        } & {
            id: string;
            energia_kcal: import("@prisma/client/runtime/library").Decimal | null;
            proteina_g: import("@prisma/client/runtime/library").Decimal | null;
            hierro_mg: import("@prisma/client/runtime/library").Decimal | null;
            fuente: string;
            alimento_id: string;
            preparacion: string;
            peso_bruto_kg: import("@prisma/client/runtime/library").Decimal;
            peso_neto_kg: import("@prisma/client/runtime/library").Decimal;
            grasa_g: import("@prisma/client/runtime/library").Decimal | null;
            carbohidrato_g: import("@prisma/client/runtime/library").Decimal | null;
            retinol_ug: import("@prisma/client/runtime/library").Decimal | null;
            porcion_comestible_pct: import("@prisma/client/runtime/library").Decimal | null;
            estado: number;
            creado_en: Date;
            actualizado_en: Date;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    options(): import(".prisma/client").Prisma.PrismaPromise<({
        categoria: {
            id: number;
            codigo: string;
            nombre: string;
            estado: number;
            creado_en: Date;
            actualizado_en: Date;
        };
    } & {
        id: string;
        codigo: string;
        nombre: string;
        categoria_id: number;
        estado: number;
        creado_en: Date;
        actualizado_en: Date;
        orden: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__dosificacionpreparacionClient<{
        alimento: {
            categoria: {
                id: number;
                codigo: string;
                nombre: string;
                estado: number;
                creado_en: Date;
                actualizado_en: Date;
            };
        } & {
            id: string;
            codigo: string;
            nombre: string;
            categoria_id: number;
            estado: number;
            creado_en: Date;
            actualizado_en: Date;
            orden: number;
        };
    } & {
        id: string;
        energia_kcal: import("@prisma/client/runtime/library").Decimal | null;
        proteina_g: import("@prisma/client/runtime/library").Decimal | null;
        hierro_mg: import("@prisma/client/runtime/library").Decimal | null;
        fuente: string;
        alimento_id: string;
        preparacion: string;
        peso_bruto_kg: import("@prisma/client/runtime/library").Decimal;
        peso_neto_kg: import("@prisma/client/runtime/library").Decimal;
        grasa_g: import("@prisma/client/runtime/library").Decimal | null;
        carbohidrato_g: import("@prisma/client/runtime/library").Decimal | null;
        retinol_ug: import("@prisma/client/runtime/library").Decimal | null;
        porcion_comestible_pct: import("@prisma/client/runtime/library").Decimal | null;
        estado: number;
        creado_en: Date;
        actualizado_en: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(dto: DosificacionPreparacionDto): Promise<{
        id: string;
        energia_kcal: import("@prisma/client/runtime/library").Decimal | null;
        proteina_g: import("@prisma/client/runtime/library").Decimal | null;
        hierro_mg: import("@prisma/client/runtime/library").Decimal | null;
        fuente: string;
        alimento_id: string;
        preparacion: string;
        peso_bruto_kg: import("@prisma/client/runtime/library").Decimal;
        peso_neto_kg: import("@prisma/client/runtime/library").Decimal;
        grasa_g: import("@prisma/client/runtime/library").Decimal | null;
        carbohidrato_g: import("@prisma/client/runtime/library").Decimal | null;
        retinol_ug: import("@prisma/client/runtime/library").Decimal | null;
        porcion_comestible_pct: import("@prisma/client/runtime/library").Decimal | null;
        estado: number;
        creado_en: Date;
        actualizado_en: Date;
    }>;
    update(id: string, dto: DosificacionPreparacionDto): Promise<{
        id: string;
        energia_kcal: import("@prisma/client/runtime/library").Decimal | null;
        proteina_g: import("@prisma/client/runtime/library").Decimal | null;
        hierro_mg: import("@prisma/client/runtime/library").Decimal | null;
        fuente: string;
        alimento_id: string;
        preparacion: string;
        peso_bruto_kg: import("@prisma/client/runtime/library").Decimal;
        peso_neto_kg: import("@prisma/client/runtime/library").Decimal;
        grasa_g: import("@prisma/client/runtime/library").Decimal | null;
        carbohidrato_g: import("@prisma/client/runtime/library").Decimal | null;
        retinol_ug: import("@prisma/client/runtime/library").Decimal | null;
        porcion_comestible_pct: import("@prisma/client/runtime/library").Decimal | null;
        estado: number;
        creado_en: Date;
        actualizado_en: Date;
    }>;
    disable(id: string): import(".prisma/client").Prisma.Prisma__dosificacionpreparacionClient<{
        id: string;
        energia_kcal: import("@prisma/client/runtime/library").Decimal | null;
        proteina_g: import("@prisma/client/runtime/library").Decimal | null;
        hierro_mg: import("@prisma/client/runtime/library").Decimal | null;
        fuente: string;
        alimento_id: string;
        preparacion: string;
        peso_bruto_kg: import("@prisma/client/runtime/library").Decimal;
        peso_neto_kg: import("@prisma/client/runtime/library").Decimal;
        grasa_g: import("@prisma/client/runtime/library").Decimal | null;
        carbohidrato_g: import("@prisma/client/runtime/library").Decimal | null;
        retinol_ug: import("@prisma/client/runtime/library").Decimal | null;
        porcion_comestible_pct: import("@prisma/client/runtime/library").Decimal | null;
        estado: number;
        creado_en: Date;
        actualizado_en: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
