import { CanActivateFn } from '@angular/router';

export const equipistaGuard: CanActivateFn = (route, state) => {
  return true;
};
