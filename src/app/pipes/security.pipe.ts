import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from 'src/app/common/auth.service';
import { Permission } from 'src/app/models/security/permission';

@Pipe({
  name: 'security'
})
export class SecurityPipe implements PipeTransform {

  constructor(private auth: AuthService) { }

  transform(permission: Permission): boolean {
    return this.auth.hasPermission(permission.moduleSectionId, permission.permissionId, permission.moduleId);
  }


}
