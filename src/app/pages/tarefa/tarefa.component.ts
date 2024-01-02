import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/model/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss']
})
export class TarefaComponent implements OnInit {
  tarefas: Tarefa[] = [];
  submitted = false;
  hasError = false;
  novaTarefa: Tarefa = {
    id: 0,
    titulo: '',
    descricao: '',
    equipe: {
      id: 0
    }
  };
  tarefaDetalhada: Tarefa | null = null;
  TarefaEditando = false;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefaService.listarTarefas().subscribe(
      (data: Tarefa[]) => {
        this.tarefas = data;
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

  criarNovaTarefa(): void {
    this.tarefaService.cadastrarTarefa(this.novaTarefa).subscribe(
      () => {
        this.novaTarefa = {
          id: 0,
          titulo: '',
          descricao: '',
          equipe: {
          id: 0
          }
        };
        this.carregarTarefas();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  atualizarTarefa(): void {
    if (this.tarefaDetalhada) {
      this.tarefaService.atualizarTarefa(this.tarefaDetalhada.id, this.tarefaDetalhada).subscribe(
        () => {
          this.tarefaDetalhada = {
            id: 0,
            titulo: '',
            descricao: '',
            equipe: {
              id: 0
            }
          };
          this.carregarTarefas();
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }

  editarTarefa(tarefa: Tarefa): void {
    this.tarefaDetalhada = { ...tarefa }; // Clona a tarefa para editar
    this.TarefaEditando = true;
  }

  cancelarEdicao(): void {
    this.tarefaDetalhada = null;
    this.TarefaEditando = false;
  }

  excluirTarefa(id: number): void {
    this.tarefaService.deletarTarefa(id).subscribe(
      () => {
        this.carregarTarefas();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}