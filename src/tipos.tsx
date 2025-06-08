export type contato = {
  icone: string;                           //Ex.: "fa fa-envelope"
  valor: string;                           //Ex.: "jeanklann@gmail.com"
};

export type periodo = {
  inicio: Date, 
  fim?: Date,  
}
export type formacao = {
  instituicao: string | undefined;         //Ex.: UFSC
  nome: texto;                             //Ex.: Bacharelado em Ciência da Computação
  periodo: periodo;                    
};

export type curso = {
  instituicao: string | undefined;         //Ex.: Alura
  nomes: texto[];                          //Ex.: [C#, JavaScript, TypeScript]
};

export type habilidade = {
  nome: texto;                             //Ex.: Linguagens
  valores: string[];                       //Ex.: [JavaScript, TypeScript, C#]
};

export type experienciaProfissional = {
    nomeEmpresa: string;                   //Ex.: Benner Sistemas
    cargos: cargo[]
};
export type experienciaProfissionalAdicional = {
    nomeEmpresa: string;                   //Ex.: Cetelbras
    titulo: texto;                         //Ex.: Professor  
    descricao: texto;
    periodo: periodo;                      
};

export type cargo = {
    nome: texto;                           //Ex.: Desenvolvedor
    periodo: periodo,
    descricao: texto;                      //Ex.: Desenvolvimento de sistemas web
    habilidades: habilidade[];             //Ex.: [JavaScript, TypeScript, C#, .NET]
};

export type idioma = {
    lingua: texto;                         //Ex.: Portugues
    texto: texto;                          //Ex.: Nativo
};

export type curriculo = {
    nome: string,                           //Ex.: Jean Carlos Klann  
    contatos: contato[],         
    resumo: texto,                          //Ex.: "Desenvolvedor Full Stack com 7 anos de experiência em desenvolvimento de sistemas web."
    formacao: formacao[],        
    cursos: curso[],
    experienciaProfissional: experienciaProfissional[],
    experienciaProfissionalAdicional : experienciaProfissionalAdicional[],
    idiomas: idioma[],
    dataNascimento: Date | undefined,       //Ex.: new Date(1993, 11, 01),
    totalLinhas: linhasPorLingua,           //Ex.: 50 - Utilizado para o currículo clássico
}

export type palavras = {
  formacao: texto,
  cursos: texto,
  experiencia: texto,
  idiomas: texto,
  atual: texto,
  experienciaAdicional: texto,
}

export type texto = {
  ptBr: string, 
  enUs?: string,  // Quando undefined, assumirá o valor de ptBr
}

export type linhasPorLingua = {
  ptBr: number, 
  enUs?: number,
}

export type linguas = "ptBr" | "enUs";