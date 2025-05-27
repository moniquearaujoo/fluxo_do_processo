import React from 'react';
import './css/flowHome.css';
import { useNavigate } from 'react-router-dom';


export default function FlowHome() {
    const navigate = useNavigate();
  
    return (
      <section className="flow">
        <h2>Processo de Software</h2>
        <div className="cicle-flow">
        <button onClick={() => navigate('/flow')}>Ciclo I</button>
        </div>
        <div className="cicle-flow">
        <button onClick={() => navigate('/flow2')}>Ciclo II</button>
        </div>
        <div className="cicle-flow">
        <button onClick={() => navigate('/flow3')}>Ciclo III</button>
        </div>
        <div className="cicle-flow">
        <button onClick={() => navigate('/flow4')}>Ciclo IV</button>
        </div>
      </section>
    );
  }