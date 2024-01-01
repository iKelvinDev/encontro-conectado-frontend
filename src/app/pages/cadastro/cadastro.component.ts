import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Participante } from 'src/app/modelo/Participante';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroUsuarioComponent {
  submitted = false;
  hasError = false;
  novoParticipante: Participante = {
    id: 0,
    login: '',
    senha: '',
    nome: '',
    telefone: '',
    dataNascimento: '',
    sexo: '',
    escolaridade: '',
    endereco: {
      cep: '',
      estado: '',
      cidade: '',
      rua: '',
      numero: 0,
      bairro: '',
      complemento: ''
    },
    encontros: []
  };

  constructor(private UserService: UserService, private router: Router,) { }

  cadastrarParticipante(): void {
    this.UserService.criarParticipante(this.novoParticipante).subscribe(
      (data: Participante) => {
        console.log('Participante criado:', data);
        // Limpar os campos após o cadastro bem-sucedido
        this.novoParticipante = {
          id: 0,
          login: '',
          senha: '',
          nome: '',
          telefone: '',
          dataNascimento: '',
          sexo: '',
          escolaridade: '',
          endereco: {
            cep: '',
            estado: '',
            cidade: '',
            rua: '',
            numero: 0,
            bairro: '',
            complemento: ''
          },
          encontros: []
        };
        this.redirecionarParaLogin();
      },
      (error: any) => {
        console.error('Erro ao cadastrar o participante:', error);
      }
    );
  }
  redirecionarParaLogin(): void {
    this.router.navigate(['/login']);
  }
}
