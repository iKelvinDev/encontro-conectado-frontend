import { Encontro } from './Encontro';
import { Participante } from './Participante';
import { Equipe } from './Equipe';

export interface EncontroParticipante {
  id: number;
  nivelAcesso: string;
  encontro: Encontro; // Relacionamento com Encontro
  participante: Participante; // Relacionamento com Participante
  equipe: Equipe; // Relacionamento com Equipe

  // Outros campos e métodos, se necessário
}
