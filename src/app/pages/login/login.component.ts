import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 nome = '';
 cpf = '';
 email = '';
 id = '';

  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({
      email: this.email,
      senha: this.senha
    }).subscribe((response) => {
      this.router.navigate(['/encontros']);
    });
  }
}
