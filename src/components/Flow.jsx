import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from "../CustomNode";
import { Position } from "reactflow";
import './css/flow.css'

const nodeTypes = { custom: CustomNode };

const nodes = [
  { id: '1', type: 'input', data: { id: '1', label: 'Início' }, position: { x: 100, y: 228 }, sourcePosition: Position.Right },
  { id: '2', type: "custom", data: { id: '2', label: 'É um projeto novo?', type: "question" }, position: { x: 300, y: 200 } },
  { id: '3', type: "custom", data: { id: '3', label: 'Identificar Stakeholders', artefato: "Lista Descritiva de Stakeholders", papel: "Gestor do Projeto" }, position: { x: 500, y: 100 } },
  { id: '4', type: "custom", data: { id: '4', label: 'Avaliar Necessidades', artefato: "Relatório Analítico das necessidades", papel: "Gestor do Projeto" }, position: { x: 500, y: 300 } },
  { id: '5', type: "custom", data: { id: '5', label: 'Analisar Documentação de Requisitos', artefato: "Anuência documental", papel: "Cliente" }, position: { x: 700, y: 300 } },
  { id: '6', type: "custom", data: { id: '6', label: 'Coletar novos requisitos', artefato: "Especificação de requisitos", papel: "Steakeholders" }, position: { x: 900, y: 300 } },
  { id: '7', type: "custom", data: { id: '7', label: 'Classificar requisitos', artefato: "Relatório de Classificação", papel: "Gestor do Projeto" }, position: { x: 1100, y: 300 } },
  { id: '8', type: "custom", data: { id: '8', label: 'Documentar requisitos', artefato: "Plano de gerenciamento de requisitos", papel: "Gestor do Projeto" }, position: { x: 1300, y: 300 } },
  { id: '9', type: "custom", data: { id: '9', label: 'Validar e Aprovar Requisitos', artefato: "Anuência documental", papel: "Cliente" }, position: { x: 1500, y: 300 } },
  { id: '10', type: "custom", data: { id: '10', label: 'Foi aprovado?', type: "question" }, position: { x: 1700, y: 310 } },
  { id: '11', type: "output", data: { id: '11', label: 'FIM' }, position: { x: 2000, y: 330 }, targetPosition: Position.Left },
  { id: '12', type: "custom", data: { id: '12', label: 'Gerenciar mudanças', artefato: "Relatório de Alterações", papel: "Gestor do Projeto", sourcePosition: Position.Left, targetPosition: Position.Right }, position: { x: 1500, y: 100 } }
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', markerEnd: { type: 'arrow' } },
  { id: 'e2-3', source: '2', target: '3', markerEnd: { type: 'arrow' }, label: 'Sim', type: 'smoothstep' },
  { id: 'e2-4', source: '2', target: '4', markerEnd: { type: 'arrow' }, label: 'Não', type: 'smoothstep' },
  { id: 'e4-5', source: '4', target: '5', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e5-6', source: '5', target: '6', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e6-7', source: '6', target: '7', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e7-8', source: '7', target: '8', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e8-9', source: '8', target: '9', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e9-10', source: '9', target: '10', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e10-11', source: '10', target: '11', markerEnd: { type: 'arrow' }, label: 'Sim', type: 'smoothstep' },
  { id: 'e10-12', source: '10', target: '12', markerEnd: { type: 'arrow' }, label: 'Não', type: 'smoothstep' },
  { id: 'e12-6', source: '12', target: '6', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e3-6', source: '3', target: '7', markerEnd: { type: 'arrow' }, type: 'smoothstep' }
];

// Este é o componente que renderiza o diagrama puro
function FlowDiagram() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Background />
      </ReactFlow>
    </div>
  );
}

export default function Flow() {
  return (
    <section className="flow">
      <div className="title-flow">
        <h2>Processo de Software</h2>
        <p>Ciclo I</p>
      </div>
      <FlowDiagram />
    </section>
  );
}
