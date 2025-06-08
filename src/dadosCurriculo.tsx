import type {curriculo, palavras} from './tipos.tsx';

export const dados : curriculo = {
    nome: "Jean Carlos Klann",
    contatos: 
    [
      { icone: "fa fa-envelope", valor: "jeanklann@gmail.com" },
      { icone: "fa fa-phone", valor: "+55 (47) 9****-****" },
      { icone: "fa-brands fa-linkedin", valor: "https://www.linkedin.com/in/jean-carlos-klann/" },
      { icone: "fa-brands fa-github", valor: "https://github.com/jeanklann" },
    ], 
    resumo: {ptBr: "Desenvolvedor Full Stack", enUs: "Full Stack Developer"},
    formacao: 
    [
      {
        instituicao: "FURB",
        nome: { ptBr: "Bacharelado em Ciência da Computação", enUs: "Bachelor's Degree in Computer Science" },
        periodo: {
          inicio: new Date(2013, 2 - 1),
          fim: new Date(2017, 9 - 1),
        },
      },
      {
        instituicao: "SENAI",
        nome: {ptBr: "Técnico em informática", enUs: "Technical Course in IT"},
        periodo: {
          inicio: new Date(2011, 1 - 1),
          fim: new Date(2012, 12 - 1),
        },
      },
    ],
    cursos: 
    [
      { instituicao: "Udemy", nomes: [{ptBr: "C#" }, { ptBr: "JavaScript"}] },
      { instituicao: "Origamid", nomes: [{ptBr: "TypeScript"}, {ptBr: "React"}, {ptBr: "Next.js"}] },
      { instituicao: "SENAI", nomes: [{ptBr: "Programador de Sistemas de Informação", enUs: "Informations System Programmer"}, {ptBr: "Administração em Sistema Linux", enUs: "Linux System Administration"}, {ptBr: "Aprendizagem Industrial em Eletrônica", enUs: "Electronic Industrial Aprendice"}, {ptBr: "Aprendizagem Industrial de Suporte e Manutenção de Microcomputadores e Redes Locais", enUs: "Industrial Learning in Microcomputer and Local Network Support and Maintenance"}, {ptBr: "CISCO IT Essentials"}] },
      { instituicao: "Mackenzie", nomes: [{ptBr: "Alice 3"}] },
      { instituicao: "Católica SC", nomes: [{ptBr: "Design em Games", enUs: "Game Design"}] },
      { instituicao: "ENG", nomes: [{ptBr: "Illustrator"}, {ptBr: "Flash Professional"}] },
    ],
    experienciaProfissional:
    [
      {
        nomeEmpresa: "Benner Sistemas S/A",
        cargos: 
        [
          {
            nome: {ptBr: "Programador", enUs: "Developer"},
            periodo: {inicio: new Date(2017, 7 - 1)},
            descricao: {ptBr: "Desenvolvedor de sistema RH, voltado para WEB, utilizando C# e .NET. Desenvolvimento de APIs RESTful, integração com sistemas legados e manutenção de sistemas existentes.", enUs: "Developer of HR systems for the web, using C# and .NET. Development of RESTful APIs, integration with legacy systems, and maintenance of existing systems."},
            habilidades: 
            [
                { nome: {ptBr: "Linguagens", enUs: "Languages"}, valores: ["C#", "Delphi", "VBA", "Python", "JavaScript"] },
                { nome: {ptBr: "SGBDs", enUs: "DBs"}, valores: ["MSSQL Server", "Oracle", "PostgreSQL"] },
                { nome: {ptBr: "Frameworks"}, valores: [".NET", "ASP.NET"] },
                { nome: {ptBr: "Ferramentas", enUs: "Tools"}, valores: ["Git", "Visual Studio"] },
                { nome: {ptBr: "Metodologias", enUs: "Methodologies"}, valores: ["Scrum"] },
            ],
          },
        ],
      },
      {
        nomeEmpresa: "SENAI",
        cargos: 
        [
          {
            nome: {ptBr: "Técnico em Informática", enUs: "IT Technician"},
            periodo: {
              inicio: new Date(2012, 3 - 1), 
              fim: new Date(2017, 6 - 1)
            },
            descricao: {ptBr: "Desenvolvimento de games, cursos EaD, animações 2D, 3D, Programação de sistemas e diagramação de livros didáticos", enUs: "Development of games, e-learning courses, 2D and 3D animations, system programming, and layout design for textbooks."},
            habilidades: 
            [
                { nome: {ptBr: "Linguagens", enUs: "Languages"}, valores: ["Java", "C#", "JavaScript", "ActionScript"] },
                { nome: {ptBr: "Ferramentas", enUs: "Tools"}, valores: ["NetBeans", "Blender", "Unity3D", "Adobe CS"] },
            ],
          },
        ],
      },
      {
        nomeEmpresa: "WEG",
        cargos: 
        [
          {
            nome: {ptBr: "Técnico em Manutenção", enUs: "Maintenance Technician"},
            periodo: {
              inicio: new Date(2012, 1 - 1), 
              fim: new Date(2012, 3 - 1)
            },
            descricao: {ptBr: "Manutenção de máquinas industriais elétricas e eletrônicas, atuando principalmente em prensas hidráulicas.", enUs: "Perform maintenance on electric and electronic machines, mainly in hydraulic press."},
            habilidades: 
            [
                { nome: {ptBr: "Linguagens", enUs: "Languages"}, valores: ["Ladder"] },
            ],
          },
          {
            nome: {ptBr: "Aprendiz em Eletrônica", enUs: "Electronics Apprentice"},
            periodo: {
              inicio: new Date(2010, 1 - 1), 
              fim: new Date(2011, 12 - 1)
            },
            descricao: {ptBr: "Estudar e desenvolver circuitos analógicos e digitais, programar CLPs industriais e manutenção de máquinas eletrônicas.", enUs: "Study and develop analog and digital circuits, programmed industrial PLCs, and perform maintenance on electronic machines."},
            habilidades: 
            [
                { nome: {ptBr: "Linguagens", enUs: "Languages"}, valores: ["Assembly", "Pascal", "Ladder"] },
            ],
          },
        ],
      },
    ],
    experienciaProfissionalAdicional:
    [
      {
        nomeEmpresa: "Cetelbras",
        titulo: {ptBr: "Professor de desenvolvimento de jogos", enUs: "Game Development Teacher"},
        descricao: {ptBr: "Professor de desenvolvimento de jogos, utilizando Portugol Studio, Unity3D e C#.", enUs: "Game development teacher, using Portugol Studio, Unity3D and C#."},
        periodo: {
          inicio: new Date(2018, 1 - 1),
          fim: new Date(2020, 12 - 1),
        },
      },
    ],
    idiomas: 
    [
      { lingua: {ptBr: "Português", enUs: "Portuguese"}, texto: {ptBr: "Nativo", enUs: "Native"}},
      { lingua: {ptBr: "Inglês", enUs: "English"}, texto: {ptBr: "Compreende bem, lê bem, escreve bem e fala razoavelmente", enUs: "Can read, write, and speak"}},
    ],
    dataNascimento: new Date(1993, 3 - 1),
    totalLinhas: {ptBr: 56, enUs: 55}, 
};

export const palavrasPadroes : palavras = {
  formacao: {ptBr: "formação", enUs: "education"},
  cursos: {ptBr: "cursosExtrasCurriculares", enUs: "extraCurricularCourses"},
  experiencia: {ptBr: "experiênciaProfissional", enUs: "professionalExperience"},
  experienciaAdicional: {ptBr: "experiênciaProfissionalAdicional", enUs: "additionalProfessionalExperience"},
  idiomas: {ptBr: "idiomas", enUs: "languages"},
  atual: {ptBr: "Atual", enUs: "Current"},
}
