import { DiaSemana } from './../../modelo/Cronograma';
import { Cronograma } from 'src/app/modelo/Cronograma';
import { Component, OnInit } from '@angular/core';
// import { CronogramaDTO } from 'src/app/modelo/Cronograma';
import { CronogramaService } from 'src/app/services/cronograma.service';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss']
})
export class CronogramaComponent {
  cronogramas: Cronograma[] = [];;
  novoCronograma: Cronograma = {
    id: 0,
    nomeAtividade: '',
    diaSemana: DiaSemana.SEGUNDA,
    data: '',
    hora: '',
    encontro: {
      id: 0
    }
  };
  erroCriacaoCronograma = false;
  constructor(private cronogramaService: CronogramaService) { }

  ngOnInit(): void {
    this.carregarCronogramas();
  }

  carregarCronogramas(): void {
    this.cronogramaService.visualizarCronograma().subscribe(
      (data: Cronograma[]) => {
        this.cronogramas = data;
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

  criarNovoCronograma(): void {
    this.cronogramaService.criarCronograma(this.novoCronograma).subscribe(
      () => {
        this.novoCronograma = {
          id: 0,
          nomeAtividade: '',
          diaSemana: DiaSemana.SEGUNDA,
          data: '',
          hora: '',
          encontro: {
            id: 0
          }
        };
        this.carregarCronogramas();
      },
      (error: any) => {
        console.error('Erro ao criar novo cronograma:', error);
      }
    );
  }
}
