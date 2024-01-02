import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SeguimistaGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    this.authService.getUserType().subscribe(userType => {
      if (userType === 'seguimista') {
        // Continue com a navegação
        return true;
      } else {
        if (this.router.url !== '/login') {
          this.router.navigate(['/']);
        }
        // Bloqueia a navegação
        return false;
      }
    });

    // Por padrão, bloqueia a navegação até que o tipo de usuário seja obtido
    return false;
  }
}
