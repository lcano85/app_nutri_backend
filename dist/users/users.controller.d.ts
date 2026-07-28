import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private users;
    constructor(users: UsersService);
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
    remove(id: string, req: any): Promise<{
        message: string;
    }>;
}
