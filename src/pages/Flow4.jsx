import React from 'react';
import ReactFlow, { Background, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from "../CustomNode"; // Corrected path relative to pages directory
import '../components/css/flow.css'; // Corrected path relative to pages directory

const nodeTypes = { custom: CustomNode };

// Define nodes for Ciclo 4
const nodes = [
  {
    id: 'c4-1',
    type: 'input',
    data: { id: 'c4-1', label: 'Início Ciclo 4' },
    position: { x: 50, y: 200 },
    sourcePosition: Position.Right
  },
  {
    id: 'c4-2',
    type: 'custom',
    data: {
      id: 'c4-2',
      label: 'Planejar Implantação',
      artefato: 'Plano de Implantação (Cronograma, Janelas, Comunicação)',
      papel: 'Gerente de Projeto / Equipe de Infra'
    },
    position: { x: 250, y: 100 }
  },
  {
    id: 'c4-3',
    type: 'custom',
    data: {
      id: 'c4-3',
      label: 'Treinar Usuários e Suporte',
      artefato: 'Manuais, Vídeos, Materiais de Treinamento',
      papel: 'Equipe de Treinamento / Analistas'
    },
    position: { x: 500, y: 100 }
  },
  {
    id: 'c4-4',
    type: 'custom',
    data: {
      id: 'c4-4',
      label: 'Implantar Sistema em Produção',
      artefato: 'Sistema Implantado / Log de Deploy',
      papel: 'Equipe de DevOps / Infraestrutura'
    },
    position: { x: 750, y: 100 }
  },
  {
    id: 'c4-5',
    type: 'custom',
    data: {
      id: 'c4-5',
      label: 'Monitorar Operação',
      artefato: 'Relatórios de Monitoramento, Logs, Alertas',
      papel: 'Equipe de Operações / Suporte'
    },
    position: { x: 750, y: 300 } // Positioned below Implantar for potential feedback loop
  },
  {
    id: 'c4-6',
    type: 'custom',
    data: {
      id: 'c4-6',
      label: 'Registrar Lições Aprendidas',
      artefato: 'Relatório de Lições Aprendidas',
      papel: 'Gerente de Projeto / Equipe'
    },
    position: { x: 1000, y: 200 }
  },
  {
    id: 'c4-7',
    type: 'custom',
    data: {
      id: 'c4-7',
      label: 'Encerrar Projeto',
      artefato: 'Relatório Final, Termo de Aceite, Documentação Arquivada',
      papel: 'Gerente de Projeto / Cliente'
    },
    position: { x: 1250, y: 200 }
  },
  {
    id: 'c4-8',
    type: 'output',
    data: { id: 'c4-8', label: 'Fim Ciclo 4' },
    position: { x: 1500, y: 200 },
    targetPosition: Position.Left
  }
];

// Define edges connecting the nodes for Ciclo 4
const edges = [
  { id: 'ec4-1-2', source: 'c4-1', target: 'c4-2', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'ec4-2-3', source: 'c4-2', target: 'c4-3', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'ec4-3-4', source: 'c4-3', target: 'c4-4', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'ec4-4-5', source: 'c4-4', target: 'c4-5', markerEnd: { type: 'arrow' }, type: 'smoothstep' }, // Deploy leads to Monitoring
  { id: 'ec4-5-6', source: 'c4-5', target: 'c4-6', markerEnd: { type: 'arrow' }, type: 'smoothstep' }, // Monitoring leads to Lessons Learned
  // Optional: Add a feedback loop from Monitoring back to Deploy/Plan if needed
  // { id: 'ec4-5-4', source: 'c4-5', target: 'c4-4', markerEnd: { type: 'arrow' }, type: 'smoothstep', label: 'Incidente Grave' },
  { id: 'ec4-6-7', source: 'c4-6', target: 'c4-7', markerEnd: { type: 'arrow' }, type: 'smoothstep' },
  { id: 'ec4-7-8', source: 'c4-7', target: 'c4-8', markerEnd: { type: 'arrow' }, type: 'smoothstep' }
];

// Component to render the Ciclo 4 diagram
function Ciclo4FlowDiagram() {
  return (
    <div style={{ width: "100%", height: "500px" }}> {/* Adjusted height */}
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background />
      </ReactFlow>
    </div>
  );
}

// Main component exporting the Ciclo 4 flow section
export default function Flow4() { // Renamed component to Flow4 to match filename
  return (
    <section className="flow">
      <div className="title-flow">
        <h2>Processo de Software</h2>
        <p>Ciclo 4: Implantação e Pós-Entrega</p>
      </div>
      <Ciclo4FlowDiagram />
    </section>
  );
}

