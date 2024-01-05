import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn } from "@angular/router";
import { FeatureFlagsService } from "./feature-flags.service";

export const featureGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const feature = route.data?.feature;
  if (feature) {
    const featureFlagService = inject(FeatureFlagsService);
    return featureFlagService.isEnabled(feature);
  }
  return true;
}
