import { Encontro } from 'src/app/model/Encontro';
import { Participante } from 'src/app/model/Participante';
import { Equipe } from 'src/app/model/Equipe';

export interface EncontroParticipante {
  
  id: number;
  nivelAcesso: string;
  encontro: Encontro; // Relacionamento com Encontro
  participante: Participante; // Relacionamento com Participante
  equipe: Equipe; // Relacionamento com Equipe

}