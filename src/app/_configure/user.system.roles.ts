import { InjectionToken } from '@angular/core';
import { UserSystemRoleType } from '@app/_models/user.system.role.type';

export interface UserSystemRoles {
    ADMIN: UserSystemRoleType;
    USER: UserSystemRoleType;
}

export const USER_SYSTEM_ROLES_VALUES = <UserSystemRoles>{
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export const USER_SYSTEM_ROLES = new InjectionToken('USER_SYSTEM_ROLES');
