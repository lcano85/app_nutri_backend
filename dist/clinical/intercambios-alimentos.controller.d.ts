import { ClinicalService } from './clinical.service';
import { IntercambioAlimentoDto } from './dto/clinical.dto';
export declare class IntercambiosAlimentosController {
    private readonly clinicalService;
    constructor(clinicalService: ClinicalService);
    findAll(page?: number, limit?: number, search?: string): Promise<{
        data: ({
            categoria: {
                id: number;
                codigo: string;
                nombre: string;
                estado: number;
                creado_en: Date;
                actualizado_en: Date;
            };
            subcategoria: {
                id: number;
                codigo: string;
                nombre: string;
                energia_kcal: import("@prisma/client/runtime/library").Decimal;
                proteina_g: import("@prisma/client/runtime/library").Decimal;
                categoria_id: number;
                estado: number;
                creado_en: Date;
                actualizado_en: Date;
                lipidos_g: import("@prisma/client/runtime/library").Decimal;
                carbohidratos_g: import("@prisma/client/runtime/library").Decimal;
            };
        } & {
            id: string;
            codigo: string;
            nombre: string;
            fuente: string;
            categoria_id: number;
            subcategoria_id: number;
            peso_gramos: import("@prisma/client/runtime/library").Decimal;
            medida_casera: string;
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
        subcategorias: {
            id: number;
            codigo: string;
            nombre: string;
            energia_kcal: import("@prisma/client/runtime/library").Decimal;
            proteina_g: import("@prisma/client/runtime/library").Decimal;
            categoria_id: number;
            estado: number;
            creado_en: Date;
            actualizado_en: Date;
            lipidos_g: import("@prisma/client/runtime/library").Decimal;
            carbohidratos_g: import("@prisma/client/runtime/library").Decimal;
        }[];
    } & {
        id: number;
        codigo: string;
        nombre: string;
        estado: number;
        creado_en: Date;
        actualizado_en: Date;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__intercambioalimentoClient<{
        categoria: {
            id: number;
            codigo: string;
            nombre: string;
            estado: number;
            creado_en: Date;
            actualizado_en: Date;
        };
        subcategoria: {
            id: number;
            codigo: string;
            nombre: string;
            energia_kcal: import("@prisma/client/runtime/library").Decimal;
            proteina_g: import("@prisma/client/runtime/library").Decimal;
            categoria_id: number;
            estado: number;
            creado_en: Date;
            actualizado_en: Date;
            lipidos_g: import("@prisma/client/runtime/library").Decimal;
            carbohidratos_g: import("@prisma/client/runtime/library").Decimal;
        };
    } & {
        id: string;
        codigo: string;
        nombre: string;
        fuente: string;
        categoria_id: number;
        subcategoria_id: number;
        peso_gramos: import("@prisma/client/runtime/library").Decimal;
        medida_casera: string;
        estado: number;
        creado_en: Date;
        actualizado_en: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(dto: IntercambioAlimentoDto): Promise<{
        id: string;
        codigo: string;
        nombre: string;
        fuente: string;
        categoria_id: number;
        subcategoria_id: number;
        peso_gramos: import("@prisma/client/runtime/library").Decimal;
        medida_casera: string;
        estado: number;
        creado_en: Date;
        actualizado_en: Date;
    }>;
    update(id: string, dto: IntercambioAlimentoDto): Promise<{
        id: string;
        codigo: string;
        nombre: string;
        fuente: string;
        categoria_id: number;
        subcategoria_id: number;
        peso_gramos: import("@prisma/client/runtime/library").Decimal;
        medida_casera: string;
        estado: number;
        creado_en: Date;
        actualizado_en: Date;
    }>;
    disable(id: string): import(".prisma/client").Prisma.Prisma__intercambioalimentoClient<{
        id: string;
        codigo: string;
        nombre: string;
        fuente: string;
        categoria_id: number;
        subcategoria_id: number;
        peso_gramos: import("@prisma/client/runtime/library").Decimal;
        medida_casera: string;
        estado: number;
        creado_en: Date;
        actualizado_en: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
