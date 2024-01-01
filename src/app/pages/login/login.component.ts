import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router) {}
  login = '';
  hide = false;
  senha = '';
  mensagemErro = '';

  isPasswordVisible = false;

  get buttonText(): string {
    return this.hide ? 'Esconder a senha' : 'Exibir a senha';
  }
  ngOnInit(): void {
    this.mensagemErro = '';
    // Limpa o token do localStorage, se existir
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }
  toggleVisibility(): void {
    this.hide = !this.hide;
  }

onLogin(): void {
  this.mensagemErro = '';
    // Limpa o token do localStorage, se existir
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }

  this.authService.login(this.login, this.senha).subscribe(
    (response) => {
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        console.log('Token armazenado no localStorage:', response.token);
        const participanteId = response.participanteId;

        this.authService.setParticipanteId(participanteId);
        this.router.navigate(['/profile']);
      } else {
        const token = response.json();
        if (!token) {
          this.mensagemErro = 'Login ou senha inválidos.';
        } else {
          this.mensagemErro = 'Ocorreu um erro ao processar o login. Por favor, tente novamente.';
        }
      }
    },
    (error) => {
      console.error('Erro ao realizar o login:', error);
      if (error.status === 401) {
        this.mensagemErro = 'Credenciais inválidas. Por favor, verifique seu login e senha.';
      } else {
        this.mensagemErro = 'Ocorreu um erro ao processar o login. Por favor, tente novamente.';
      }
    },
  );
}
}