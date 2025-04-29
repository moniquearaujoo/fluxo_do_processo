import { useParams } from 'react-router-dom';
import '../components/css/details.css';
import Details from '../components/Details';

export default function NodeDetails() {
  const { id } = useParams();

  // Lista de detalhes dos nós
  const detalhesPorId = {
    3: {
    atividade: {
        Titulo: "Identificar Steakholders",
        Finalidade: "Identificar partes interessadas do processo",
        Observações: "",
        "Artefato De Entrada": "Brainstorming e Formulário",
        "Artefato De Saida": "Lista descritiva dos steakholders",
        "Papel Responsavel": "Gestor do Projeto",
        Ferramentas: "Trello, Miro, Jira...",
        Passos: "Realizar um brainstorming com a equipe e utilizar um Formulário para auxiliar no processo de analisar os interesses de cada um."
      },
    papel: {
        Título: "Gestor do Projeto",
        Atribuições: "Analisar o contexto do projeto, liderar reuniões e brainstormings, classificar e revisar lista dos steakeholders caso necessite de ajustes ao longo do projeto.",
        "Atividades Relacionadas": "Identificar Steakeholders, Avaliar Necessidades, Classificar Requisitos, Documentar Requisitos, Gerenciar Mudanças",
        Escolaridade: "Graduação em Administração, Engenharia de Software, Ciência da Computação, Análise de Sistemas ou áreas afins",
        Conhecimentos: "Necessários: Gerenciamento de Projetos – Metodologias tradicionais (PMBOK) e ágeis (Scrum, Kanban). \n Análise de Stakeholders – Identificação, classificação e estratégia de comunicação. \n Gestão de Riscos – Como diferentes stakeholders podem afetar os riscos do projeto. \n Ferramentas de Gerenciamento – Trello, Jira, Notion, Miro, Excel. \n Desejáveis: \n Certificações – PMP (Project Management Professional), PMI-ACP (Agile Certified Practitioner) ou CAPM. \n Liderança e Negociação – Experiência em mediação de conflitos entre stakeholders.",
        Habilidades: " Comunicação Clara e Assertiva; Liderança e Trabalho em Equipe;  Pensamento Estratégico e Visão Sistêmica;  Capacidade Analítica;  Organização e Gestão do Tempo",
        "Experiencia Mínima": "2 anos de experiência em gestão de projetos de software ou TI.",
        "Cargo Funcional": "Project Manager ou Coordenador de Projetos ou Product Owner.",
    },
    artefato: {
        Título: "Lista Descritiva dos Steakeholders",
        Código: "A1A1",
        Descrição: "Documento que identifica todas as partes interessadas em um projeto, descrevendo seu papel, nível de influência e interesse no desenvolvimento do software. Esse artefato é essencial para garantir que as necessidades e expectativas dos stakeholders sejam consideradas ao longo do projeto.",
        Papel: "Gestor do Projeto",
        "Incluído em ": "Identificar Steakeholders",
        Modelos: "",
        Exemplos: "",
        Ferramentas: "Excel, Trello, Miro, Jira...",
    }
    },
    4: {
    atividade: {
        Titulo: "Avaliar Necessidades",
        Finalidade: "Levantar e documentar as necessidades do projeto para embasar decisões estratégicas.",
        Observações: "Essa atividade deve ser conduzida no início do projeto para garantir alinhamento com os objetivos.",
        "Artefato De Entrada": "Demandas do projeto, requisitos iniciais e informações coletadas dos stakeholders.",
        "Artefato De Saida": "Relatório Analítico das Necessidades.",
        "Papel Responsavel": "Gestor do Projeto e/ou Product Owner (P.O.)",
        Ferramentas: "Planilhas de análise, softwares de gestão de projetos (ex.: Jira, Trello, MS Project).",
        Passos: "Coletar informações com stakeholders, identificar as necessidades e requisitos, analisar criticamente as informações, estruturar os dados no Relatório Analítico e validar com os envolvidos.",
        "Passos Alternativos": "Caso as necessidades não estejam claras, realizar entrevistas adicionais ou workshops de definição."
      },
    papel: {
        Título: "Gestor de Projetos",
        Atribuições: "Liderar a avaliação das necessidades do projeto, garantindo alinhamento com os objetivos estratégicos.",
        "Atividades Relacionadas": "Identificar Steakeholders, Avaliar Necessidades, Classificar Requisitos, Documentar Requisitos, Gerenciar Mudanças",
        Escolaridade: "Graduação em Administração, Engenharia, TI ou áreas afins.",
        Conhecimentos: "Necessários: Gestão de Projetos, Metodologias Ágeis, Ferramentas de Gestão (Jira, Trello, Notion, Excel). \n Desejáveis: Experiência com frameworks ágeis (Scrum, Kanban), Modelagem de Processos",
        Habilidades: "Comunicação eficaz, análise crítica, liderança, organização.",
        "Experiencia Mínima": "2 a 3 anos em gestão de projetos ou produtos.",
        "Cargo Funcional": "Gerente de Projetos, Product Owner, Analista de Negócios.",
    },
    artefato: {
        Título: "Relatório Analítico das Necessidades",
        Código: "A2A1",
        Descrição: "Documento que consolida as necessidades identificadas no projeto, servindo como base para planejamento e execução",
        Papel: "Gestor do Projeto ou Product Owner",
        "Incluído em ": "Etapa inicial da gestão de requisitos e planejamento estratégico.",
        Modelos: "Template padrão de Relatório Analítico, com seções para descrição das necessidades, impactos e prioridades.",
        Exemplos: "Relatórios anteriores de projetos similares.",
        Ferramentas: "Processadores de texto (Word, Google Docs), softwares de análise de dados.",
    }
    },
    5: {
    atividade: {
        Titulo: "Analisar e Validar os Requisitos do Cliente",
        Finalidade: "Analisar e Validar os Requisitos do Cliente",
        Observações: "A análise deve garantir que os requisitos estejam alinhados aos objetivos do projeto e sejam documentados corretamente.",
        "Artefato De Entrada": "Documentação de Requisitos Inicial",
        "Artefato De Saida": "Anuência Documental do Cliente",
        "Papel Responsavel": "Cliente",
        Ferramentas: "Planilhas Excel, Documentos PDF, Reuniões de Validação",
        Passos: "Revisão dos requisitos descritos pelo cliente. Verificação da viabilidade técnica e estratégica. Validação formal com o cliente por meio do artefato 'Anuência Documental'."
      },
    papel: {
        Título: "Cliente",
        Atribuições: "",
        "Atividades Relacionadas": "Classificação de Requisitos, Documentação de Requisitos, Gerenciamento de Mudanças",
        Escolaridade: "N/A",
        Conhecimentos: "Necessários: Clareza na definição dos requisitos do projeto; Clareza na definição dos requisitos do projeto; Capacidade de validar soluções propostas; \n Desejáveis: Noções básicas de requisitos técnicos; Visão estratégica sobre impactos no projeto;",
        Habilidades: "Comunicação objetiva, negociação e tomada de decisão baseada em necessidade do negócio",
        "Experiencia Mínima": "Envolvimento direto na definição de requisitos em projetos anteriores",
        "Cargo Funcional": "Stakeholder principal na validação dos requisitos do projeto",
    },
    artefato: {
        Título: "Anuência Documental do Cliente",
        Código: "A3A1",
        Descrição: "Documento formal que confirma a aceitação dos requisitos levantados, garantindo que estão de acordo com as expectativas e necessidades do cliente.",
        Papel: "Cliente",
        "Incluído em ": "Processo de Análise de Requisitos",
        Modelos: "",
        Exemplos: "Termo de Aceite de Requisitos (Documento assinado pelo cliente confirmando requisitos aprovados); Checklist de Validação de Requisitos (Planilha estruturada para aprovação ponto a ponto); Documento de Critérios de Aceitação (Definição das condições mínimas para aprovação dos requisitos).",
        Ferramentas: "Formulários digitais, Assinaturas Eletrônicas",
    }
    },
    6: {
      atividade: {
          Titulo: "Coletar Novos Requisitos",
          Finalidade: "Identificar e documentar requisitos adicionais apresentados pelos stakeholders.",
          Observações: "Os novos requisitos devem ser analisados quanto à viabilidade e impacto no escopo do projeto.",
          "Artefato De Entrada": "Solicitação de Novos Requisitos",
          "Artefato De Saida": "Especificação de Requisitos",
          "Papel Responsavel": "Steakeholders",
          Ferramentas: "Formulários Digitais, Planilhas Excel, Ferramentas de Gestão (Trello, Notion)",
          Passos: "Identificação de demandas adicionais, registro e detalhamento dos requisitos coletados e validação dos requisitos junto às equipes envolvidas."
        },
      papel: {
          Título: "Steakeholder",
          Atribuições: "Solicitar e detalhar novos requisitos do projeto, esclarecer a necessidade e o impacto de cada requisito e validar informações antes da aprovação para implementação.",
          "Atividades Relacionadas": "",
          Escolaridade: "Não exige formação específica, mas conhecimento do negócio ou sistema é recomendável.",
          Conhecimentos: "Necessários: Definição de requisitos funcionais e não funcionais; Impacto dos requisitos no projeto; \n Desejáveis: Noções básicas de engenharia de software e análise de negócios.",
          Habilidades: "Comunicação objetiva e colaboração e visão estratégica sobre impacto dos requisitos.",
          "Experiencia Mínima": "Participação em processos de definição de requisitos em projetos anteriores.",
          "Cargo Funcional": "Representante de interesse no projeto.",
      },
      artefato: {
          Título: "Especificação de Requisitos",
          Código: "A4A1",
          Descrição: "Documento técnico detalhando os novos requisitos coletados, suas justificativas e implicações no projeto.",
          Papel: "Stakeholder",
          "Incluído em ": "Coleta de Requisitos",
          Modelos: "Template de Especificação de Requisitos /Checklist de Validação / Matriz de Priorização",
          Exemplos: "O stakeholder sugere uma melhoria na interface e o requisito é registrado para avaliação técnica.",
          Ferramentas: "Documentos Word, Formulários Digitais, Planilhas Excel",
      }
    },
    7: {
      atividade: {
          Titulo: "Classificação De Requisitos",
          Finalidade: "A classificação de requisitos organiza e prioriza as necessidades do sistema, facilitando o desenvolvimento, a tomada de decisões e a manutenção futura.",
          Observações: "Deve ser clara, flexível e priorizada, garantindo rastreabilidade, evitando ambiguidades e facilitando a evolução do sistema",
          "Artefato De Entrada": "Levantamento de Requisitos",
          "Artefato De Saida": "Relatório de Classificação de Requisitos",
          "Papel Responsavel": "Gestor De Projeto",
          Ferramentas: "JIRA,IBM Engineering DOORS,ReqView,Microsoft Visio,Lucidchart",
          Passos: "1 - Coleta de Requisitos  2 -Análise e Organização  3- Priorização  4-Especificação  5 -Validação  6 - Rastreabilidade  7 -Atualização Contínua",
          "Passos Alternativos": "1 - Modelagem de Requisitos 2- Revisão Iterativa 3- Priorização por Valor de Negócio 4 - Prototipação Rápida 5 - Análise de Impacto"
        },
      papel: {
          Título: "Gestor do Projeto",
          Atribuições: "É responsável por definir o escopo, priorizar requisitos, coordenar stakeholders, gerenciar cronograma e recursos, garantir a qualidade e controlar mudanças, assegurando que os requisitos atendam aos objetivos do projeto.",
          "Atividades Relacionadas": "Identificar Steakeholders, Avaliar Necessidades, Classificar Requisitos, Documentar Requisitos, Gerenciar Mudanças",
          Escolaridade: "Administração,Engenharia,Tecnologia da Informação,Sistemas de Informação,Ciências da Computação,Gestão de Projetos",
          Conhecimentos: "Necessários: Metodologias de Gestão de Projetos; Planejamento e Execução de Projetos; Gestão de Orçamento e/ou Qualidade; \n Desejáveis: Certificações em Gestão de Projetos (PMP, Prince2, Scrum Master); Conhecimentos Avançados em Metodologias Ágeis;",
          Habilidades: "Liderança e Motivação de Equipe,Comunicação Clara e Assertiva,Capacidade de Tomada de Decisão Rápida,Planejamento e Organização,Gestão de Conflitos",
          "Experiencia Mínima": "2 a 3 anos de experiência em gestão de projetos ou análise de requisitos,Conhecimento em ferramentas de gestão de requisitos,Experiência com metodologias ágeis ou tradicionais,Experiência com levantamento e análise de requisitos,Interação com stakeholders.",
          "Cargo Funcional": "Analista de Requisitos",
      },
      artefato: {
          Título: "Relatório de Requisitos",
          Código: "A5A1",
          Descrição: "O Relatório de Requisitos é um documento essencial no processo de desenvolvimento de software, destinado a descrever de forma detalhada as necessidades e expectativas dos stakeholders em relação ao sistema. Ele serve como a base para o planejamento, implementação e testes do projeto, proporcionando clareza e alinhamento entre as partes envolvidas.",
          Papel: "Gestor de Projeto",
          "Incluído em ": "Classificação de Requisitos",
          Modelos: "Modelo de Relatório de Requisitos Funcionais (Basic),Modelo de Relatório de Requisitos por Caso de Uso,Modelo de Relatório de Requisitos Ágil (User Stories),Modelo de Relatório de Requisitos com Prototipagem,Modelo de Relatório de Requisitos por Módulo/Componente",
          Exemplos: "Login do usuário com validação de credenciais.",
          Ferramentas: "JIRA,Confluence,IBM Engineering DOORS,ReqView,Microsoft Word / Google Docs",
      }
    },
    8: {
      atividade: {
          Titulo: "",
          Finalidade: "",
          Observações: "",
          "Artefato De Entrada": "",
          "Artefato De Saida": "",
          "Papel Responsavel": "",
          Ferramentas: "",
          Passos: ""
        },
      papel: {
          Título: "",
          Atribuições: "",
          "Atividades Relacionadas": "",
          Escolaridade: "",
          Conhecimentos: "",
          Habilidades: "",
          "Experiencia Mínima": "",
          "Cargo Funcional": "",
      },
      artefato: {
          Título: "",
          Código: "",
          Descrição: "",
          Papel: "",
          "Incluído em ": "",
          Modelos: "",
          Exemplos: "",
          Ferramentas: "",
      }
    },
    9: {
      atividade: {
          Titulo: "",
          Finalidade: "",
          Observações: "",
          "Artefato De Entrada": "",
          "Artefato De Saida": "",
          "Papel Responsavel": "",
          Ferramentas: "",
          Passos: ""
        },
      papel: {
          Título: "",
          Atribuições: "",
          "Atividades Relacionadas": "",
          Escolaridade: "",
          Conhecimentos: "",
          Habilidades: "",
          "Experiencia Mínima": "",
          "Cargo Funcional": "",
      },
      artefato: {
          Título: "",
          Código: "",
          Descrição: "",
          Papel: "",
          "Incluído em ": "",
          Modelos: "",
          Exemplos: "",
          Ferramentas: "",
      }
    },
    10: {
      atividade: {
          Titulo: "",
          Finalidade: "",
          Observações: "",
          "Artefato De Entrada": "",
          "Artefato De Saida": "",
          "Papel Responsavel": "",
          Ferramentas: "",
          Passos: ""
        },
      papel: {
          Título: "",
          Atribuições: "",
          "Atividades Relacionadas": "",
          Escolaridade: "",
          Conhecimentos: "",
          Habilidades: "",
          "Experiencia Mínima": "",
          "Cargo Funcional": "",
      },
      artefato: {
          Título: "",
          Código: "",
          Descrição: "",
          Papel: "",
          "Incluído em ": "",
          Modelos: "",
          Exemplos: "",
          Ferramentas: "",
      }
    },
  };

  const dados = detalhesPorId[id];

  if (!dados) {
    return <p>Detalhes não encontrados para o ID: {id}</p>;
  }

  return <Details {...dados} />;
}