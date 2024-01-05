import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { FeatureFlagsService } from './feature-flags.service';
import { AuthService } from './auth.service';
import { Permission } from '../models/security/permission';

/**
 * Check if user has necessary permission for ActivatedRoute
 *
 * @param route
 * @returns CanActivateFn<boolean>
 */
export const permissionsGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  return featureSecurityGuard(route, null); // TODO: Remove this logic when featureflag will be deprecated
  // TODO: uncomment next logic when featureflag will be deprecated
  // const permissions = route.data?.permissions as Permission;
  // return inject(AuthService).hasPermission(permissions.moduleSectionId, permissions.permissionId, permissions.moduleId);
};

// TODO: Remove this logic when featureflag will be deprecated
export const hasPermissionGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const permission = route.data?.permission as Permission;
  if (!permission) {
    return true;
  }
  const result = inject(AuthService).hasPermission(permission.moduleSectionId, permission.permissionId, permission.moduleId);
  return result;
};

// TODO: Remove this logic when featureflag will be deprecated
export const featureSecurityGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const feature = route.data?.securityFeature;
  if (feature) {
    const isPermissionSecurityEnabled = inject(FeatureFlagsService).isEnabled(feature);
    return isPermissionSecurityEnabled ? hasPermissionGuard(route, null) : true;
  }
  return true;
}
