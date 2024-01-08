import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { FeatureFlagsService } from "./feature-flags.service";
// import { ErrorService2 } from "./error.service2";
// import { redirectAuthenticatedGuard } from "./authentication";

export const featuresLoadedGuard: CanActivateFn = async (route: ActivatedRouteSnapshot,  state: RouterStateSnapshot) => {
  const featureFlagsService = inject(FeatureFlagsService);
  // const errorService = inject(ErrorService2);
  // const autenticated = await redirectAuthenticatedGuard(route, state);
  // if (!autenticated) return false;
  try {
    await featureFlagsService.loadApplicationFeatureFlags();
    return true;
  }
  catch(error) {
    // errorService.show({error, title: 'No se obtuvo la configuración de funcionalidades' });
    return true;
  }
}
