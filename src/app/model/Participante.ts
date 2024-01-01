export interface Participante {
    id?: number;
    login: string;
    senha: string;
    nome: string;
    telefone: string;
    dataNascimento: string;
    sexo: string;
    escolaridade: string;
    endereco: Endereco;
    permissoes: Permissao[];
    encontros: Encontro[];
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
  export interface Permissao {
    // Defina os detalhes da permissão
  }
  
  export interface Encontro {
    // Defina os detalhes do encontro
  }