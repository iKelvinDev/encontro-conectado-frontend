import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SeguimistaGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userType = this.authService.getUserType();

    if (userType === 'seguimista') {
      return true;
    } else {
      if (this.router.url !== '/login') {
        this.router.navigate(['/']);
      }
      return false;
    }
  }
}