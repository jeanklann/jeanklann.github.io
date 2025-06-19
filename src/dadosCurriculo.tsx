import type {Curriculo, Palavras} from './tipos.tsx';
import weg01 from './assets/weg-01.jpg';
import weg02 from './assets/weg-02.jpg';
import benner01 from './assets/benner-01.jpeg';
import senai01 from './assets/senai-01.jpg';
import bennerLogo from './assets/benner-logo.png';
import senaiLogo from './assets/senai-logo.png';
import wegLogo from './assets/weg-logo.png';

export const DadosCurriculo : Curriculo = {
    nome: "Jean Carlos Klann",
    contatos: 
    [
      { icone: "fa fa-home", nome: { ptBr: "Endereço", enUs: "Address" }, valor: { ptBr: "Blumenau/SC", enUs: "Brazil" }, link: "https://maps.app.goo.gl/AYtYW9KHB69RHaWA9" },
      { icone: "fa fa-envelope", nome: { ptBr: "E-mail" }, valor: { ptBr: "jeanklann@gmail.com" }, link: "mailto:jeanklann@gmail.com"},
      { icone: "fa fa-phone", nome: { ptBr: "Telefone", enUs: "Phone" }, valor: { ptBr: "(47) 99202-6836", enUs: "+55 (47) 99202-6836" } },
      { icone: "fa-brands fa-linkedin", nome: { ptBr: "LinkedIn" }, valor: { ptBr: "https://www.linkedin.com/in/jean-carlos-klann/" }, link: "https://www.linkedin.com/in/jean-carlos-klann/" },
      { icone: "fa-brands fa-github", nome: { ptBr: "Github" }, valor: { ptBr: "https://github.com/jeanklann" }, link: "https://github.com/jeanklann" },
    ], 
    resumo: {ptBr: "Desenvolvedor Full Stack", enUs: "Full Stack Developer"},
    resumoMenor: {
      ptBr: "Profissional com mais de 10 anos de experiência em desenvolvimento de sistemas e liderança técnica, especializado em C# e .NET para aplicações corporativas.", 
      enUs: "Professional with over 10 years of experience in system development and technical leadership, specialized in C# and .NET for corporate applications."
    },
    resumoMaior: {
      ptBr: "Profissional com mais de 10 anos de experiência em desenvolvimento de sistemas e liderança técnica. Especializado em C# e .NET para aplicações corporativas, com forte atuação em integrações com APIs, desenvolvimento web e sistemas governamentais (eSocial, CNAB, DIRF). Experiência como educador e desenvolvedor de jogos, com conhecimentos em eletrônica e automação.", 
      enUs: "Professional with over 10 years of experience in system development and technical leadership. Specialized in C# and .NET for corporate applications, with a strong focus on API integrations, web development, and government systems (eSocial, CNAB, DIRF). Experience as an educator and game developer, with knowledge in electronics and automation."
    },
    coverLetterTexto: {
      ptBr: "Sou um profissional com mais de 10 anos de experiência em desenvolvimento de sistemas e liderança técnica. Tenho uma sólida formação em Ciência da Computação e uma vasta experiência em C# e .NET, com forte atuação em integrações com APIs, desenvolvimento web e sistemas governamentais como eSocial, CNAB e DIRF. Além disso, tenho experiência como educador e desenvolvedor de jogos, o que me permite trazer uma perspectiva única para a resolução de problemas complexos.\nNas horas vagas também gosto de desenvolver pequenos jogos na engine Godot ou Unity 3D utilizando C# e gdscript e pequenos aplicativos de apoio, sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. \nAlém da experiência na programação em desenvolvimento de jogos, também faço modelagens 3D para os próprios, utilizando o Blender, além de texturização e animações, fazendo com que eu consiga desenvolver todos os aspectos de um jogo completo em 3D.\nNo passado também já mexi muito com a linguagem Assembly aplicado a microcontroladores, na qual desenvolvi sistemas simples de temporizadores, irrigadores automáticos, entre outros tipos de automações utilizando microcontroladores de linguagens de baixo nivel, como o 8086, além também de já ter desenvolvido projetos semelhantes em Arduino.\nUltimamente ando me desenvolvendo mais em WEB mais especificamente em front-end, como React e Tailwind. Sou apaixonado por tecnologia e estou sempre em busca de novos desafios que me permitam crescer profissionalmente.\nEstou aberto a oportunidades que me permitam aplicar minha experiência em C# e .NET, bem como minha paixão por desenvolvimento de sistemas e liderança técnica. Acredito que posso contribuir significativamente para a sua equipe, trazendo não apenas minhas habilidades técnicas, mas também minha capacidade de liderança e ensino.",
      enUs: "I am a professional with over 10 years of experience in system development and technical leadership. I have a solid background in Computer Science and extensive experience in C# and .NET, with a strong focus on API integrations, web development, and government systems such as eSocial, CNAB, and DIRF. Additionally, I have experience as an educator and game developer, which allows me to bring a unique perspective to solving complex problems.\nIn my spare time, I also enjoy developing small games in the Godot or Unity 3D engine using C# and gdscript, as well as small support applications, always looking to learn new technologies and improve my skills.\nBesides programming in game development, I also do 3D modeling for the games themselves, using Blender for texturing and animations, allowing me to develop all aspects of a complete 3D game.\nIn the past, I have also worked extensively with Assembly language applied to microcontrollers, where I developed simple systems such as timers and automatic irrigation systems using low-level language microcontrollers like the 8086, as well as similar projects in Arduino.\nRecently, I have been focusing more on web development, specifically front-end technologies like React and Tailwind. I am passionate about technology and always seeking new challenges that allow me to grow professionally.\nI am open to opportunities that allow me to apply my experience in C# and .NET, as well as my passion for system development and technical leadership. I believe I can contribute significantly to your team by bringing not only my technical skills but also my leadership and teaching abilities."
      
    },
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
            nome: {ptBr: "Programador / TechLead", enUs: "Developer / TechLead"},
            periodo: {inicio: new Date(2017, 7 - 1)},
            descricao: {ptBr: "Desenvolvedor de sistema RH, voltado para WEB, utilizando C# e .NET. Desenvolvimento de APIs RESTful, integração com sistemas legados e manutenção de sistemas existentes.", enUs: "Developer of HR systems for the web, using C# and .NET. Development of RESTful APIs, integration with legacy systems, and maintenance of existing systems."},
            habilidades: 
            [
                { nome: {ptBr: "Linguagens", enUs: "Languages"}, valores: ["C#", "Delphi", "VBA", "Python", "JavaScript", "HTML", "CSS"] },
                { nome: {ptBr: "SGBDs", enUs: "DBs"}, valores: ["MSSQL Server", "Oracle", "PostgreSQL"] },
                { nome: {ptBr: "Frameworks"}, valores: [".NET", "ASP.NET", "NUnit 3", "Ninject"] },
                { nome: {ptBr: "Ferramentas", enUs: "Tools"}, valores: ["Git", "Visual Studio", "Jenkins", "Postman"] },
                { nome: {ptBr: "Metodologias", enUs: "Methodologies"}, valores: ["Scrum"] },
            ],
            projetos: [
              {
                ptBr: "Desenvolvido o módulo eSocial, em que observa todas as interações do sistema, valida, e as envia para API do eSocial no governo utilizando certificados digitais assim como o versionamento dos leiautes utilizando reflection. Implementação de transmissão e sincronização multithreading.", 
                enUs: "Developed the eSocial module, which monitors all system interactions, validates them, and sends them to the government's eSocial API using digital certificates as well of layout versioning using reflection. Implementation of multithreading transmission and synchronization."
              },
              {
                ptBr: "Construído dashboards de indicadores de recursos humanos, utilizando de AMCharts.", 
                enUs: "Built dashboards of human resources indicator panels, using AMCharts."
              },
              {
                ptBr: "Implementado a integração entre sistemas utilizando APIs RESTful (gestão eletronica de documentos, integração financeira) e desenvolvimento de APIs RESTful para outros sistemas consumirem.", 
                enUs: "Implemented system integration using RESTful APIs (electronic document management, financial integration) and development of RESTful APIs for external system consumption."
              },
              {
                ptBr: "Desenvolvido relatórios utilizando Stimulsoft Reports.",
                enUs: "Developed reports using Stimulsoft Reports."
              },
              {
                ptBr: "Arquitetado e codificado integrações de sistemas de leitura de biometria digital, utilizando o SDK da BioMini.", 
                enUs: "Architected and coded integrations of a digital fingerprint reading system, using the BioMini SDK."
              },
              {
                ptBr: "Refinado e aperfeiçoado arquivos de crédito CNAB para integração com bancos, utilizando o padrão FEBRABAN, assim como o desenvolvimento das rotinas e arquivos de declaração de imposto de renda retido na fonte (DIRF) e rotinas e geração do benefício emergencial (BEm.)", 
                enUs: "Refined and perfected CNAB credit files for integration with banks, using the FEBRABAN standard, as well as the development of routines and files for income tax withheld at source (DIRF) declaration and routines and generation of the emergency benefit (BEm)."
              },
            ],
          },
        ],
        logo: bennerLogo,
        imagem: [benner01],
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
            descricao: {
              ptBr: "Desenvolvimento de jogos digitais, cursos EaD, animações 2D, 3D, programação de sistemas e diagramação de livros didáticos. Também lecionado aulas de Flash com ActionScript 3.0.", 
              enUs: "Development of digital games, e-learning courses, 2D and 3D animations, system programming, and layout design for textbooks. Also taught classes in Flash with ActionScript 3.0."
            },
            habilidades: 
            [
                { nome: {ptBr: "Linguagens", enUs: "Languages"}, valores: ["Java", "C#", "JavaScript", "ActionScript", "HTML", "CSS"] },
                { nome: {ptBr: "Ferramentas", enUs: "Tools"}, valores: ["NetBeans", "Blender", "Unity3D", "Adobe CS"] },
            ],
            projetos: [
              {
                ptBr: "Desenvolvido jogos digitais utilizando Unity3D, C# e Blender.",
                enUs: "Developed digital games using Unity3D, C#, and Blender."
              },
              {
                ptBr: "Construído cursos EaD utilizando SCORM, JavaScript e HTML, assim como as animações em 2D e 3D.",
                enUs: "Built e-learning courses using SCORM, JavaScript, and HTML, as well as 2D and 3D animations."
              },
              {
                ptBr: "Modelado e codificado acionamentos, monitoramentos e controle remoto de motores, servomotores, inversores de frequencia, e CLPs através do protocolo Modbus.",
                enUs: "Modeled and coded remote activations, monitoring, and control of motors, servomotors, frequency inverters, and PLCs using the Modbus protocol."
              },
            ],
          },
        ],
        logo: senaiLogo,
        imagem: [senai01],
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
            projetos: [
              {
                ptBr: "Codificado microcontroladores Intel 8031, 8051 e PICs para controlar matriz de LEDs, displays de 7 segmentos, motores e servomotores.",
                enUs: "Coded microcontrollers Intel 8031, 8051, and PICs to control LED matrices, 7-segment displays, motors, and servomotors."
              },
            ],
          },
        ],
        logo: wegLogo,
        imagem: [weg01, weg02],
      },
    ],
    experienciaProfissionalAdicional:
    [
      {
        nomeEmpresa: "Cetelbras/SaibaJá",
        titulo: {ptBr: "Professor de desenvolvimento de jogos", enUs: "Game Development Teacher"},
        descricao: {ptBr: "Professor de desenvolvimento de jogos, utilizando Portugol Studio, Unity3D e C#.", enUs: "Game development teacher, using Portugol Studio, Unity3D and C#."},
        periodo: {
          inicio: new Date(2018, 1 - 1),
          fim: new Date(2019, 6 - 1),
        },
      },
    ],
    idiomas: 
    [
      { lingua: {ptBr: "Português", enUs: "Portuguese"}, texto: {ptBr: "Nativo", enUs: "Native"}},
      { lingua: {ptBr: "Inglês", enUs: "English"}, texto: {ptBr: "Compreende bem, lê bem, escreve bem e fala razoavelmente", enUs: "Can read, write, and speak"}},
    ],
    habilidadesTecnicas:[
      { nome: {ptBr: "Frontend" }, habilidades: [
        { nome: {ptBr: "Javascript" }, percentual: 80 },
        { nome: {ptBr: "Typescript" }, percentual: 70 },
        { nome: {ptBr: "React" }, percentual: 70 },
        { nome: {ptBr: "CSS" }, percentual: 65 },
      ]},
      { nome: {ptBr: "Backend" }, habilidades: [
        { nome: {ptBr: "C#/DotNet" }, percentual: 95 },
        { nome: {ptBr: "REST APIs" }, percentual: 80 },
        { nome: {ptBr: "Delphi" }, percentual: 60 },
      ]},
      { nome: {ptBr: "Database" }, habilidades: [
        { nome: {ptBr: "MSSQL Server" }, percentual: 90 },
        { nome: {ptBr: "Oracle" }, percentual: 80 },
        { nome: {ptBr: "Postgresql" }, percentual: 75 },
      ]},
      { nome: {ptBr: "Tools & Devops" }, habilidades: [
        { nome: {ptBr: "NUnit 3" }, percentual: 90 },
        { nome: {ptBr: "Git" }, percentual: 85 },
        { nome: {ptBr: "AWS" }, percentual: 65 },
      ]},
    ],
    dataNascimento: new Date(1993, 3 - 1),
    totalLinhas: {ptBr: 75, enUs: 71}, 
    totalLinhasCover: {ptBr: 42, enUs: 39}, 
};

export const PalavrasPadroes : Palavras = {
  formacao: {ptBr: "formação", enUs: "education"},
  cursos: {ptBr: "cursosExtrasCurriculares", enUs: "extraCurricularCourses"},
  experiencia: {ptBr: "experiênciaProfissional", enUs: "professionalExperience"},
  experienciaAdicional: {ptBr: "experiênciaProfissionalAdicional", enUs: "additionalProfessionalExperience"},
  idiomas: {ptBr: "idiomas", enUs: "languages"},
  atual: {ptBr: "Atual", enUs: "Current"},
  projetos: {ptBr: "projetos", enUs: "projects"},
  inicioMenu: {ptBr: "Início", enUs: "Start"},
  contatoMenu: {ptBr: "Contato", enUs: "Contact"},
  sobreMenu: {ptBr: "Sobre mim", enUs: "About me"},
  experienciaMenu: {ptBr: "Experiência", enUs: "Experience"},
  formacaoMenu: {ptBr: "Formação", enUs: "Education"},
  habilidadesMenu: {ptBr: "Habilidades", enUs: "Skills"},
  projetosMenu: {ptBr: "Projetos", enUs: "Projects"},
}
