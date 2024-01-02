import { Equipe } from "src/app/model/Equipe";

export interface Tarefa {
  
  id: number;
  titulo: string;
  descricao: string;
  equipe: {
    id: number;
  };

}