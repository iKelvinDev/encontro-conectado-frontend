import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/modelo/Equipe';
import { EquipeService } from 'src/app/services/equipe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  equipes: Equipe[] = [];
  submitted = false;
  hasError = false;
  novaEquipe: Equipe = {
    id: 0,
    acessoTarefa: '',
    nome:'',
    tarefas: [], // Inicialize como uma lista vazia
    grupos: [] // Inicialize como uma lista vazia
  };
  equipeDetalhada: Equipe | null = null;
  EquipeEditando = false;
  constructor(private equipeService: EquipeService, private router: Router) { }

  ngOnInit(): void {
    this.carregarEquipes();
  }
  acessarTarefas(): void {
    // Redirecionar para a rota da página de tarefas
    this.router.navigate(['/tarefa']);
  }

  carregarEquipes(): void {
    this.equipeService.listarEquipes().subscribe(
      (data: Equipe[]) => {
        this.equipes = data;
      },
      (error) => {
        console.error('Erro ao carregar equipes:', error);
      }
    );
  }

  criarNovaEquipe(): void {
    this.equipeService.cadastrarEquipe(this.novaEquipe).subscribe(
      () => {
        this.novaEquipe = {
          id: 0,
          acessoTarefa: '',
          nome:'',
          tarefas: [],
          grupos: []
        };
        this.carregarEquipes();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  atualizarEquipe(): void {
    if (this.equipeDetalhada) {
      this.equipeService.atualizarEquipe(this.equipeDetalhada.id, this.equipeDetalhada).subscribe(
        () => {
          this.equipeDetalhada = {
            id: 0,
            acessoTarefa: '',
            nome: '',
            tarefas: [],
            grupos: []
          };
          this.carregarEquipes();
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }

  editarEquipe(equipe: Equipe): void {
    this.equipeDetalhada = { ...equipe }; // Clona a equipe para editar
    this.EquipeEditando = true;
  }

  detalharEquipe(id: number): void {
    this.equipeService.obterEquipePorId(id).subscribe(
      (data: any) => {
        this.equipeDetalhada = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deletarEquipe(id: number): void {
    this.equipeService.removerEquipe(id).subscribe(
      () => {
        console.log('Equipe removida com sucesso!');
        this.carregarEquipes();
      },
      (error) => {
        console.error('Erro ao remover equipe:', error);
      }
    );
  }

  cancelarEdicao(): void {
    this.equipeDetalhada = null;
    this.EquipeEditando = false;
  }
}
