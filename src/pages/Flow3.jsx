import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from "../CustomNode";
import { Position } from "reactflow";
import '../components/css/flow.css'

const nodeTypes = { custom: CustomNode };

const nodes3 = [
    { id: '1', type: 'input', data: { id: '1', label: 'Início' }, position: { x: 100, y: 200 }, sourcePosition: Position.Right },
  
    { id: '2', type: 'custom', data: { id: '2', label: 'Preparar ambiente de desenvolvimento', artefato: 'Infraestrutura configurada', papel: 'Equipe Técnica' }, position: { x: 300, y: 200 }, sourcePosition: Position.Right, targetPosition: Position.Left },
  
    { id: '3', type: 'custom', data: { id: '3', label: 'Implementar funcionalidades', artefato: 'Código-fonte', papel: 'Desenvolvedores' }, position: { x: 500, y: 200 }, sourcePosition: Position.Right, targetPosition: Position.Left },
  
    { id: '4', type: 'custom', data: { id: '4', label: 'Executar testes unitários', artefato: 'Relatório de testes unitários', papel: 'Desenvolvedores' }, position: { x: 700, y: 200 }, sourcePosition: Position.Right, targetPosition: Position.Left },
  
    { id: '5', type: 'custom', data: { id: '5', label: 'Executar testes de sistema', artefato: 'Relatório de testes', papel: 'Equipe de QA' }, position: { x: 900, y: 200 }, sourcePosition: Position.Right, targetPosition: Position.Left },
    
    { id: '7', type: 'custom', data: { id: '7', label: 'Testes de aceite do cliente', artefato: 'Checklists de aceite', papel: 'Cliente' }, position: { x: 1100, y: 200 }, sourcePosition: Position.Right, targetPosition: Position.Left },
  
    { id: '8', type: 'custom', data: { id: '8', label: 'Sistema aprovado?', type: 'question' }, position: { x: 1300, y: 400 }, sourcePosition: Position.Right, targetPosition: Position.Left },
  
    { id: '9', type: 'custom', data: { id: '9', label: 'Aprovação final do sistema', artefato: 'Documento de aceite final', papel: 'Cliente' }, position: { x: 1600, y: 380 }, sourcePosition: Position.Right, targetPosition: Position.Left },
  
    { id: '10', type: 'output', data: { id: '10', label: 'FIM' }, position: { x: 1900, y: 415 }, targetPosition: Position.Left }
  ];

const edges3 = [
  { id: 'e1-2', source: '1', target: '2', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e2-3', source: '2', target: '3', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e3-4', source: '3', target: '4', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e4-5', source: '4', target: '5', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e5-7', source: '5', target: '7', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e7-8', source: '7', target: '8', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'e8-9', source: '8', target: '9', markerEnd: { type: 'arrow' }, label: 'Sim', type: 'smoothstep' },
  { id: 'e8-3', source: '8', target: '3', markerEnd: { type: 'arrow' }, label: 'Não', type: 'smoothstep' },
  { id: 'e9-10', source: '9', target: '10', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
];

function FlowDiagram() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactFlow nodes={nodes3} edges={edges3} nodeTypes={nodeTypes}>
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
        <p>Ciclo 3: Construção e Testes</p>
      </div>
      <FlowDiagram />
    </section>
  );
}