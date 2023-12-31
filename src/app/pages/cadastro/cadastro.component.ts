import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroUsuarioComponent {
  user: any = {};
  endereco: any = {};
  submitted = false;
  hasError = false;

  constructor(private userService: UserService, private router: Router) {}

  submitForm(): void {
    const userData = {
      user: this.user,
      endereco: this.endereco
    };

    this.userService.cadastrarUsuario(userData).subscribe({
      next: (data) => {
        console.log('Usuário cadastrado com sucesso', data);
        this.submitted = true;

        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Erro ao cadastrar usuário', error);
        this.hasError = true;
      }
    });
  }
}