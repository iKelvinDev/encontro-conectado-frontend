import { Tarefa } from 'src/app/model/Tarefa';
import { EncontroParticipante } from 'src/app/model/EncontroParticipante';

export interface Equipe {
  
  id: number;
  acessoTarefa: string;
  nome: string;
  tarefas: Tarefa[];
  grupos: EncontroParticipante[];

}