export declare class RoleDto {
    name: string;
    code: string;
    description?: string;
    active?: boolean;
    permissionIds: string[];
}
export declare class PermissionDto {
    name: string;
    code: string;
    module: string;
    description?: string;
}
export declare class StatusDto {
    name: string;
    code: string;
    description?: string;
    color: string;
    active?: boolean;
    sortOrder: number;
}
export declare class MenuItemDto {
    name: string;
    icon: string;
    path?: string;
    sortOrder: number;
    active?: boolean;
    parentId?: string;
    permissionId?: string;
}
