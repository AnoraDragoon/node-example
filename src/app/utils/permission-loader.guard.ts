import {  inject } from '@angular/core';
import { CanActivateFn  } from '@angular/router';
import { AuthService } from './auth.service';
import { ErrorService2 } from './error.service2';

export const permissionLoaderGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const errorService = inject(ErrorService2);
  try {
    await authService.init();
    return true;
  }
  catch(error) {
    errorService.show({error, title: 'No se han podido cargar los datos del usuario' });
    return true;
  }
};
