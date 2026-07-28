import { AdminService } from './admin.service';
import { MenuItemDto, PermissionDto, RoleDto, StatusDto } from './dto/admin.dto';
export declare class AdminController {
    private admin;
    constructor(admin: AdminService);
    roles(): import(".prisma/client").Prisma.PrismaPromise<({
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
        _count: {
            users: number;
        };
    } & {
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
        active: boolean;
        isSystem: boolean;
    })[]>;
    createRole(dto: RoleDto): Promise<{
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
    }>;
    updateRole(id: string, dto: RoleDto): Promise<{
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
    }>;
    deleteRole(id: string): Promise<{
        message: string;
    }>;
    permissions(): import(".prisma/client").Prisma.PrismaPromise<{
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
        module: string;
    }[]>;
    createPermission(dto: PermissionDto): Promise<{
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
        module: string;
    }>;
    updatePermission(id: string, dto: PermissionDto): Promise<{
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
        module: string;
    }>;
    deletePermission(id: string): Promise<{
        message: string;
    }>;
    loginLogs(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            role: {
                name: string;
            };
            firstName: string;
            lastName: string;
        } | null;
    } & {
        email: string;
        id: string;
        createdAt: Date;
        success: boolean;
        ipAddress: string | null;
        userAgent: string | null;
        reason: string | null;
        userId: string | null;
    })[]>;
    statuses(): import(".prisma/client").Prisma.PrismaPromise<({
        _count: {
            users: number;
        };
    } & {
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
        color: string;
        active: boolean;
        sortOrder: number;
    })[]>;
    createStatus(dto: StatusDto): Promise<{
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
        color: string;
        active: boolean;
        sortOrder: number;
    }>;
    updateStatus(id: string, dto: StatusDto): Promise<{
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
        color: string;
        active: boolean;
        sortOrder: number;
    }>;
    deleteStatus(id: string): Promise<{
        message: string;
    }>;
    navigation(req: any): Promise<{
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            active: boolean;
            sortOrder: number;
            permissionId: string | null;
            icon: string;
            path: string | null;
            parentId: string | null;
        }[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        sortOrder: number;
        permissionId: string | null;
        icon: string;
        path: string | null;
        parentId: string | null;
    }[]>;
    menus(): import(".prisma/client").Prisma.PrismaPromise<({
        permission: {
            id: string;
            name: string;
            code: string;
        } | null;
        _count: {
            children: number;
        };
        parent: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        sortOrder: number;
        permissionId: string | null;
        icon: string;
        path: string | null;
        parentId: string | null;
    })[]>;
    createMenu(dto: MenuItemDto): Promise<{
        permission: {
            description: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            code: string;
            module: string;
        } | null;
        parent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            active: boolean;
            sortOrder: number;
            permissionId: string | null;
            icon: string;
            path: string | null;
            parentId: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        sortOrder: number;
        permissionId: string | null;
        icon: string;
        path: string | null;
        parentId: string | null;
    }>;
    updateMenu(id: string, dto: MenuItemDto): Promise<{
        permission: {
            description: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            code: string;
            module: string;
        } | null;
        parent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            active: boolean;
            sortOrder: number;
            permissionId: string | null;
            icon: string;
            path: string | null;
            parentId: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        active: boolean;
        sortOrder: number;
        permissionId: string | null;
        icon: string;
        path: string | null;
        parentId: string | null;
    }>;
    deleteMenu(id: string): Promise<{
        message: string;
    }>;
}
