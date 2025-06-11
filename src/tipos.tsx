export type Contato = {
  icone: string;                           //Ex.: "fa fa-envelope"
  valor: Texto;                            //Ex.: "jeanklann@gmail.com"
  link?: string;                           //Ex.: "mailto:jeanklann@gmail.com"
};

export type Periodo = {
  inicio: Date, 
  fim?: Date,  
}
export type Formacao = {
  instituicao: string | undefined;         //Ex.: UFSC
  nome: Texto;                             //Ex.: Bacharelado em Ciência da Computação
  periodo: Periodo;                    
};

export type Curso = {
  instituicao: string | undefined;         //Ex.: Alura
  nomes: Texto[];                          //Ex.: [C#, JavaScript, TypeScript]
};

export type Habilidade = {
  nome: Texto;                             //Ex.: Linguagens
  valores: string[];                       //Ex.: [JavaScript, TypeScript, C#]
};

export type ExperienciaProfissional = {
    nomeEmpresa: string;                   //Ex.: Benner Sistemas
    cargos: Cargo[],
    imagem?: string[],                     //Ex.: "https://example.com/logo.png" (opcional)
    logo?: string,                         //Ex.: "https://example.com/logo.png" (opcional)
};
export type ExperienciaProfissionalAdicional = {
    nomeEmpresa: string;                   //Ex.: Cetelbras
    titulo: Texto;                         //Ex.: Professor  
    descricao: Texto;
    periodo?: Periodo;                      
};

export type Cargo = {
    nome: Texto;                           //Ex.: Desenvolvedor
    periodo: Periodo,
    descricao: Texto;                      //Ex.: Desenvolvimento de sistemas web
    habilidades: Habilidade[];             //Ex.: [JavaScript, TypeScript, C#, .NET]
    projetos?: Texto[];                    //Ex.: ["Desenvolvido XXX", "Desenvolvido YYY"] (opcional)
};

export type Idioma = {
    lingua: Texto;                         //Ex.: Portugues
    texto: Texto;                          //Ex.: Nativo
};

export type Curriculo = {
    nome: string,                           //Ex.: Jean Carlos Klann  
    contatos: Contato[],         
    resumo: Texto,                          //Ex.: "Desenvolvedor Full Stack com 7 anos de experiência em desenvolvimento de sistemas web."
    resumoMaior: Texto,
    formacao: Formacao[],        
    cursos: Curso[],
    experienciaProfissional: ExperienciaProfissional[],
    experienciaProfissionalAdicional : ExperienciaProfissionalAdicional[],
    idiomas: Idioma[],
    dataNascimento: Date | undefined,       //Ex.: new Date(1993, 11, 01),
    totalLinhas: LinhasPorLingua,           //Ex.: 50 - Utilizado para o currículo clássico
}

export type Palavras = {
  formacao: Texto,
  cursos: Texto,
  experiencia: Texto,
  idiomas: Texto,
  atual: Texto,
  experienciaAdicional: Texto,
  projetos: Texto,
}

export type Texto = {
  ptBr: string, 
  enUs?: string,  // Quando undefined, assumirá o valor de ptBr
}

export type LinhasPorLingua = {
  ptBr: number, 
  enUs?: number,
}

export type Linguas = "ptBr" | "enUs";