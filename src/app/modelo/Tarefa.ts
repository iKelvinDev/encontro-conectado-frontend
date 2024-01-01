import { Equipe } from "./Equipe";

export interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  equipe: {
    id: number;
  };

}
