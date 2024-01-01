import { Encontro } from "./Encontro";

export interface Cronograma {
  id: number;
  nomeAtividade: string;
  diaSemana: DiaSemana;
  data: string; // Formato "dd/MM/yyyy"
  hora: string; // Formato "HH:mm"
  encontro: {
    id: number;
  };
}
export enum DiaSemana {
  SEGUNDA = 'SEGUNDA',
  TERCA = 'TERCA',
  QUARTA = 'QUARTA',
  QUINTA = 'QUINTA',
  SEXTA = 'SEXTA',
  SABADO = 'SABADO',
  DOMINGO = 'DOMINGO',
}
