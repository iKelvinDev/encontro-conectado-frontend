import { Component, OnInit } from '@angular/core';
import { Equipe } from '../../model/Equipe';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  equipes: Equipe[] = [];
  equipeEditando: Equipe = { id: 0, acessoTarefa: '', nome: '' };
  editando: boolean = false;

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.carregarEquipes();
  }

  carregarEquipes() {
    this.equipeService.listarEquipes().subscribe((data: Equipe[]) => {
      this.equipes = data;
    });
  }

  detalharEquipe(id: number) {
    this.equipeService.obterEquipePorId(id).subscribe((data: Equipe) => {
      // Implemente o que fazer com os detalhes da equipe, como exibir em um modal
    });
  }

  editarEquipe(equipe: Equipe) {
    this.editando = true;
    this.equipeEditando = { ...equipe }; // Cria uma cópia para edição
  }

  criarEquipe() {
    this.equipeService.cadastrarEquipe(this.equipeEditando).subscribe(() => {
      this.carregarEquipes();
      this.limparFormulario();
    });
  }

  atualizarEquipe() {
    this.equipeService.atualizarEquipe(this.equipeEditando.id!, this.equipeEditando).subscribe(() => {
      this.carregarEquipes();
      this.limparFormulario();
    });
  }

  excluirEquipe(id: number) {
    if (confirm('Tem certeza que deseja excluir esta equipe?')) {
      this.equipeService.removerEquipe(id).subscribe(() => {
        this.carregarEquipes();
      });
    }
  }

  limparFormulario() {
    this.editando = false;
    this.equipeEditando = { id: 0, acessoTarefa: '', nome: '' };
  }
}