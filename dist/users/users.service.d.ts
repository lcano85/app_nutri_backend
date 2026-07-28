import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    list(): import(".prisma/client").Prisma.PrismaPromise<{
        status: {
            id: string;
            name: string;
            code: string;
            color: string;
        };
        role: {
            id: string;
            name: string;
            code: string;
        };
        email: string;
        id: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
    }[]>;
    create(dto: CreateUserDto): Promise<{
        status: {
            description: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            code: string;
            color: string;
            active: boolean;
            sortOrder: number;
        };
        role: {
            description: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            code: string;
            active: boolean;
            isSystem: boolean;
        };
        email: string;
        id: string;
        firstName: string;
        lastName: string;
    }>;
    update(id: string, dto: UpdateUserDto): Promise<{
        status: {
            description: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            code: string;
            color: string;
            active: boolean;
            sortOrder: number;
        };
        role: {
            description: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            code: string;
            active: boolean;
            isSystem: boolean;
        };
        email: string;
        id: string;
        firstName: string;
        lastName: string;
    }>;
    remove(id: string, currentUserId: string): Promise<{
        message: string;
    }>;
}
