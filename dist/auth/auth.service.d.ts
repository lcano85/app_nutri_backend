import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    login(dto: LoginDto, context: {
        ip?: string;
        userAgent?: string;
    }): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: {
                permissions: ({
                    permission: {
                        description: string | null;
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        code: string;
                        module: string;
                    };
                } & {
                    roleId: string;
                    permissionId: string;
                })[];
            } & {
                description: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                code: string;
                active: boolean;
                isSystem: boolean;
            };
            permissions: string[];
        };
    }>;
    me(userId: string): Promise<{
        permissions: string[];
        role: {
            id: string;
            name: string;
            code: string;
        };
        status: {
            id: string;
            name: string;
            code: string;
        };
        email: string;
        id: string;
        firstName: string;
        lastName: string;
    }>;
}
