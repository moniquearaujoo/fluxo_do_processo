
import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from "../CustomNode";
import { Position } from "reactflow";
import '../components/css/flow.css'

const nodeTypes = { custom: CustomNode };


const nodesCiclo2 = [
  { id: '1', type: 'input', data: { id: '1', label: 'Início - Análise e Projeto da Solução' }, position: { x: 100, y: 100 }, sourcePosition: Position.Right },

  { id: '2', type: 'custom', data: { id: '2', label: 'Revisar Requisitos Aprovados', artefato: "Documento de Requisitos", papel: "Analista de Sistemas" }, position: { x: 350, y: 100 } },

  { id: '3', type: 'custom', data: { id: '3', label: 'Definir Arquitetura do Sistema', artefato: "Documento de Arquitetura", papel: "Arquiteto de Software" }, position: { x: 600, y: 100 } },

  { id: '4', type: 'custom', data: { id: '4', label: 'Modelar Solução', artefato: "Diagramas UML/ER/BPMN, Wireframes", papel: "Analista/UX Designer" }, position: { x: 850, y: 100 } },

  { id: '5', type: 'custom', data: { id: '5', label: 'Planejar Testes de Sistema', artefato: "Plano de Testes", papel: "Analista de Testes" }, position: { x: 1100, y: 100 } },

  { id: '6', type: 'custom', data: { id: '6', label: 'Validar Projeto com Stakeholders', artefato: "Feedback Formal", papel: "Cliente / Equipe Técnica" }, position: { x: 1350, y: 100 } },

  { id: '7', type: 'custom', data: { id: '7', label: 'Projeto Técnico Aprovado?', type: 'question' }, position: { x: 1600, y: 100 } },

  { id: '8', type: 'output', data: { id: '8', label: 'Avançar para Construção' }, position: { x: 1850, y: 60 }, targetPosition: Position.Left },

  { id: '9', type: 'custom', data: { id: '9', label: 'Revisar Projeto Técnico', artefato: "Versão Corrigida do Projeto", papel: "Equipe Técnica" }, position: { x: 1850, y: 140 } }
];
const edgesCiclo2 = [
  { id: 'e1-2', source: '1', target: '2', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e2-3', source: '2', target: '3', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e3-4', source: '3', target: '4', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e4-5', source: '4', target: '5', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e5-6', source: '5', target: '6', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e6-7', source: '6', target: '7', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e7-8', source: '7', target: '8', markerEnd: { type: 'arrow' }, type: 'smoothstep', label: 'Sim' },
  { id: 'e7-9', source: '7', target: '9', markerEnd: { type: 'arrow' }, type: 'smoothstep', label: 'Não' },
  { id: 'e9-3', source: '9', target: '3', markerEnd: { type: 'arrow' }, type: 'smoothstep' }
];

function FlowDiagram() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ReactFlow nodes={nodesCiclo2} edges={edgesCiclo2} nodeTypes={nodeTypes}>
        <Background />
      </ReactFlow>
    </div>
  );
}

export default function Flow2() {
  return (
    <section className="flow">
      <div className="title-flow">
        <h2>Processo de Software</h2>
        <p>Ciclo II</p>
      </div>
      <FlowDiagram />
    </section>
  );
}
