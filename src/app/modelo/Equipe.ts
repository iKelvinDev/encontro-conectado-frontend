import { Tarefa } from './Tarefa';
import { EncontroParticipante } from './EncontroParticipante';

export interface Equipe {
  id: number;
  acessoTarefa: string;
  nome: string;
  tarefas: Tarefa[];
  grupos: EncontroParticipante[];

}
