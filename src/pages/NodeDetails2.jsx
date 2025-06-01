import { useParams } from "react-router-dom";
import "../components/css/details.css";
import Details from "../components/Details";


export default function NodeDetails2() {
  const { id } = useParams();


const detalhesPorId2 = {
  2: {
    atividade: {
      Titulo: "Revisar Requisitos Aprovados",
      Finalidade: "Garantir que todos os requisitos estejam claros, viáveis e alinhados com os objetivos do projeto.",
      "Artefato De Entrada": "Documento de Requisitos",
      "Artefato De Saida": "Documento de Requisitos Revisado",
      "Papel Responsavel": "Analista de Sistemas",
      Ferramentas: "Word, Confluence, JIRA",
      Passos: "Revisar requisitos coletados, identificar ambiguidades, validar com stakeholders."
    },
    papel: {
      Título: "Analista de Sistemas",
      Atribuições: "Analisar requisitos, revisar documentação técnica e validar com o cliente.",
      Escolaridade: "Graduação em Sistemas de Informação ou afins.",
      Conhecimentos: "Engenharia de Requisitos, UML, BPMN, Ferramentas de documentação.",
      Habilidades: "Comunicação, análise crítica, atenção aos detalhes.",
      "Experiencia Mínima": "1-2 anos em análise de sistemas.",
      "Cargo Funcional": "Analista de Requisitos, Analista Funcional"
    },
    artefato: {
      Título: "Documento de Requisitos",
      Código: "C2A1",
      Descrição: "Consolida todos os requisitos do sistema validados até a etapa atual.",
      Papel: "Analista de Sistemas",
      "Incluído em ": "Revisão de Requisitos",
      Ferramentas: "Word, Confluence"
    }
  },
  3: {
    atividade: {
      Titulo: "Definir Arquitetura do Sistema",
      Finalidade: "Estabelecer a base técnica e estrutural do sistema para orientar o desenvolvimento.",
      "Artefato De Entrada": "Documento de Requisitos",
      "Artefato De Saida": "Documento de Arquitetura",
      "Papel Responsavel": "Arquiteto de Software",
      Ferramentas: "Draw.io, Lucidchart, Enterprise Architect",
      Passos: "Definir camadas, tecnologias, padrões arquiteturais e estratégias de integração."
    },
    papel: {
      Título: "Arquiteto de Software",
      Atribuições: "Projetar a estrutura de alto nível do sistema.",
      Escolaridade: "Graduação em Ciência da Computação, Engenharia de Software.",
      Conhecimentos: "Padrões de arquitetura, microserviços, cloud computing.",
      Habilidades: "Visão sistêmica, documentação, liderança técnica.",
      "Experiencia Mínima": "3 anos como desenvolvedor ou arquiteto.",
      "Cargo Funcional": "Arquiteto de Soluções"
    },
    artefato: {
      Título: "Documento de Arquitetura",
      Código: "C2A2",
      Descrição: "Define a arquitetura lógica, técnica e física do sistema.",
      Papel: "Arquiteto de Software",
      "Incluído em ": "Definição Arquitetural",
      Ferramentas: "Lucidchart, Enterprise Architect"
    }
  },
  4: {
    atividade: {
      Titulo: "Modelar Solução",
      Finalidade: "Representar graficamente os fluxos de dados, processos e estrutura do sistema.",
      "Artefato De Entrada": "Documento de Arquitetura",
      "Artefato De Saida": "Modelos UML, ER, BPMN, Wireframes",
      "Papel Responsavel": "Analista / UX Designer",
      Ferramentas: "Figma, Miro, Visual Paradigm",
      Passos: "Criar modelos conceituais, wireframes e validar com stakeholders."
    },
    papel: {
      Título: "Analista de Sistemas / UX Designer",
      Atribuições: "Desenhar modelos e fluxos do sistema.",
      Escolaridade: "Design, Sistemas de Informação, Computação.",
      Conhecimentos: "UML, experiência do usuário, BPMN, prototipação.",
      Habilidades: "Criatividade, organização, empatia.",
      "Experiencia Mínima": "2 anos em análise ou UX.",
      "Cargo Funcional": "UX Designer, Analista Funcional"
    },
    artefato: {
      Título: "Modelos da Solução",
      Código: "C2A3",
      Descrição: "Conjunto de diagramas, modelos e wireframes que representam a solução.",
      Papel: "Analista / UX Designer",
      "Incluído em ": "Modelagem da Solução",
      Ferramentas: "Figma, Miro"
    }
  },
  5: {
    atividade: {
      Titulo: "Planejar Testes de Sistema",
      Finalidade: "Definir estratégias e critérios de aceitação para os testes do sistema.",
      "Artefato De Entrada": "Modelos da Solução",
      "Artefato De Saida": "Plano de Testes",
      "Papel Responsavel": "Analista de Testes",
      Ferramentas: "TestLink, Xray, Excel",
      Passos: "Elaborar plano de testes, mapear casos de teste."
    },
    papel: {
      Título: "Analista de Testes",
      Atribuições: "Garantir a qualidade da solução através da elaboração de testes.",
      Escolaridade: "Sistemas de Informação, Ciência da Computação.",
      Conhecimentos: "Testes funcionais, regressão, ferramentas de testes.",
      Habilidades: "Detalhismo, comunicação, planejamento.",
      "Experiencia Mínima": "2 anos em QA ou testes de software.",
      "Cargo Funcional": "QA, Analista de Testes"
    },
    artefato: {
      Título: "Plano de Testes",
      Código: "C2A4",
      Descrição: "Documento que define os testes a serem realizados no sistema.",
      Papel: "Analista de Testes",
      "Incluído em ": "Planejamento de Testes",
      Ferramentas: "Excel, Xray"
    }
  },
  6: {
    atividade: {
      Titulo: "Validar Projeto com Stakeholders",
      Finalidade: "Verificar se a proposta técnica atende às expectativas.",
      "Artefato De Entrada": "Plano de Testes, Modelos, Arquitetura",
      "Artefato De Saida": "Feedback Formal",
      "Papel Responsavel": "Cliente / Equipe Técnica",
      Ferramentas: "Reuniões, formulários online",
      Passos: "Apresentar projeto, coletar feedbacks, formalizar aprovações."
    },
    papel: {
      Título: "Stakeholders / Equipe Técnica",
      Atribuições: "Analisar solução proposta e validar entregas.",
      Escolaridade: "Variável",
      Conhecimentos: "Negócio, análise de requisitos.",
      Habilidades: "Análise crítica, comunicação.",
      "Experiencia Mínima": "Participação em projetos anteriores.",
      "Cargo Funcional": "Cliente, Patrocinador, Equipe"
    },
    artefato: {
      Título: "Feedback Formal",
      Código: "C2A5",
      Descrição: "Documento com os pareceres dos stakeholders sobre o projeto.",
      Papel: "Cliente / Equipe Técnica",
      "Incluído em ": "Validação Técnica",
      Ferramentas: "Google Forms, Word"
    }
  },
  9: {
    atividade: {
      Titulo: "Revisar Projeto Técnico",
      Finalidade: "Corrigir erros, omissões ou ajustes solicitados na validação.",
      "Artefato De Entrada": "Feedback Formal",
      "Artefato De Saida": "Versão Corrigida do Projeto",
      "Papel Responsavel": "Equipe Técnica",
      Ferramentas: "Confluence, Word",
      Passos: "Revisar arquitetura/modelagem, ajustar documentação."
    },
    papel: {
      Título: "Equipe Técnica",
      Atribuições: "Refinar documentação e modelo da solução.",
      Escolaridade: "TI, Engenharia, Computação",
      Conhecimentos: "Modelagem, arquitetura, requisitos",
      Habilidades: "Trabalho em equipe, revisão técnica",
      "Experiencia Mínima": "2 anos em desenvolvimento ou análise.",
      "Cargo Funcional": "Desenvolvedor, Arquiteto, Analista"
    },
    artefato: {
      Título: "Versão Corrigida do Projeto",
      Código: "C2A6",
      Descrição: "Documento técnico revisado após feedback dos stakeholders.",
      Papel: "Equipe Técnica",
      "Incluído em ": "Ciclo de Revisão Técnica",
      Ferramentas: "Word, Lucidchart"
    }
  }
}
    const dados = detalhesPorId2[id];
    
      if (!dados) {
        return <p>Detalhes não encontrados para o ID: {id}</p>;
      }
    
      return <Details {...dados} />;
    }