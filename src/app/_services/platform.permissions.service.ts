import { Inject, Injectable } from "@angular/core";
import { UserSystemRoles, USER_SYSTEM_ROLES } from "@app/_configure/user.system.roles";

@Injectable()
export class PlatformPermissionsService {

    constructor(
        @Inject(USER_SYSTEM_ROLES) private userSystemRoles: UserSystemRoles
      ) {}

    private readonly HAVE_RIGHTS_ADMINISTRATE_PLATFORM = [
        this.userSystemRoles.ADMIN
      ];
}