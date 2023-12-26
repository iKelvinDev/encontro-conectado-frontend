import { CanActivateFn } from '@angular/router';

export const equipeDirigenteGuard: CanActivateFn = (route, state) => {
  return true;
};
