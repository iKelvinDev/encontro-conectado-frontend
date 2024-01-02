import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Encontro } from 'src/app/modelo/Encontro'; // Importe o modelo de Encontro
import { EncontroService } from 'src/app/services/encontro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encontro',
  templateUrl: './encontro.component.html',
  styleUrls: ['./encontro.component.scss']
})
export class EncontroComponent implements OnInit {
  encontros: Encontro[] = [];
  submitted = false;
  hasError = false;
  novoencontro: Encontro = {
    id: 0,
    titulo: '',
    ano: 0,
    endereco: {
      cep: '',
      estado: '',
      cidade: '',
      rua: '',
      numero: 0,
      bairro: '',
      complemento: ''
    },
    nomeLocal: '',
    participantes: [],
    cronograma: []
  };
  encontroDetalhado: Encontro | null = null;
  encontroEditando = false;

  constructor(
    private encontroService: EncontroService,
    private router: Router,
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.carregarEncontros();
  }

  carregarEncontros(): void {
    this.encontroService.listarEncontros().subscribe(
      (data: Encontro[]) => {
        this.encontros = data;
      },
      (error: any) => {
        if (error.status === 403) {
          // Tratar o erro 403 aqui
          // Por exemplo, mostrar uma mensagem de erro amigável
        } else {
          console.error(error);
        }
      }
    );
  }

  criarNovoEncontro(): void {
    this.encontroService.criarEncontro(this.novoencontro).subscribe(
      () => {
        this.novoencontro = {
          id: 0,
          titulo: '',
          ano: 0,
          endereco: {
            cep: '',
            estado: '',
            cidade: '',
            rua: '',
            numero: 0,
            bairro: '',
            complemento: ''
          },
          nomeLocal: '',
          participantes: [],
          cronograma: []
        };
        this.carregarEncontros();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  atualizarEncontro(): void {
    if (this.encontroDetalhado) {
      this.encontroService.atualizarEncontro(this.encontroDetalhado.id, this.encontroDetalhado).subscribe(
        () => {
          this.encontroDetalhado = {
            id: 0,
            titulo: '',
            ano: 0,
            endereco: {
              cep: '',
              estado: '',
              cidade: '',
              rua: '',
              numero: 0,
              bairro: '',
              complemento: ''
            },
            nomeLocal: '',
            participantes: [],
            cronograma: []
          };
          this.carregarEncontros();
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }

  editarEncontro(encontro: Encontro): void {
    this.encontroDetalhado = { ...encontro }; // Clona o encontro para editar
    this.encontroEditando = true;
  }

  cancelarEdicao(): void {
    this.encontroDetalhado = null;
    this.encontroEditando = false;
  }
  detalharEncontro(id: number): void {
    this.encontroService.detalharEncontro(id).subscribe(
      (data: any) => {
        this.encontroDetalhado = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  excluirEncontro(id: number): void {
    this.encontroService.excluirEncontro(id).subscribe(
      () => {
        this.carregarEncontros();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onLogoff(): void {
    this.AuthService.logoff();
    this.router.navigate(['/login']);
  }
  profile(): void {
    this.router.navigate(['/profile']);
  }
}
