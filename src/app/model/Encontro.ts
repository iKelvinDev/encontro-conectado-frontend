import { Cronograma } from 'src/app/model/Cronograma';

export interface Encontro {
  id: number;
  titulo: string;
  ano: number;
  endereco: Endereco;
  nomeLocal: string;
  participantes: Participante[];
  cronograma: Cronograma[];
}

export interface Endereco {
  cep: string;
  estado: string;
  cidade: string;
  rua: string;
  numero: number;
  bairro: string;
  complemento: string;
}

export interface Participante {
  id: number;
  nome: string;
  // Propriedades relevantes do Participante
}

/* export interface Cronograma {
  nome: string;
}
 */