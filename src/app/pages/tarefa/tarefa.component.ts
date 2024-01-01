import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../model/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss']
})
export class TarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];
  tarefaEditando: Tarefa = { id: 0, titulo: '', descricao: '', equipeId: 0 };
  editando: boolean = false;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefaService.listarTarefas().subscribe((data: Tarefa[]) => {
      this.tarefas = data;
    });
  }

  detalharTarefa(id: number) {
    this.tarefaService.obterTarefaPorId(id).subscribe((data: Tarefa) => {
      // Implemente o que fazer com os detalhes da tarefa, como exibir em um modal
    });
  }

  editarTarefa(tarefa: Tarefa) {
    this.editando = true;
    this.tarefaEditando = { ...tarefa }; // Cria uma cópia para edição
  }

  criarTarefa() {
    this.tarefaService.cadastrarTarefa(this.tarefaEditando).subscribe(() => {
      this.carregarTarefas();
      this.limparFormulario();
    });
  }

  atualizarTarefa() {
    this.tarefaService.atualizarTarefa(this.tarefaEditando.id!, this.tarefaEditando).subscribe(() => {
      this.carregarTarefas();
      this.limparFormulario();
    });
  }

  excluirTarefa(id: number) {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.tarefaService.removerTarefa(id).subscribe(() => {
        this.carregarTarefas();
      });
    }
  }

  limparFormulario() {
    this.editando = false;
    this.tarefaEditando = { id: 0, titulo: '', descricao: '', equipeId: 0 };
  }
}