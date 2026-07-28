import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    login(dto: LoginDto, req: any): Promise<{
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
    me(req: any): Promise<{
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
