
import React from "react";
import './css/about.css'; 

export default function Sobre() {
  return (
    <section className="about" id="about">
      <div className="title-about">
        <h2>O que é?</h2> run dev
        <p>
          Processo de software é uma sequência lógica de atividades que tem por objetivo final de produzir ou evoluir um produto de software.
        </p>
      </div>
      <ul className="topics">
        <li>
          <i className="fas fa-tasks"></i>
          <div>
            <strong>Atividades</strong>
            <p>
              É uma unidade de trabalho que um indivíduo naquele papel poderá ser solicitado a executar.
            </p>
          </div>
        </li>
        <li>
          <i className="fas fa-user"></i>
          <div>
            <strong>Papel</strong>
            <p>
              Define as responsabilidades ou atribuições de um indivíduo ou grupo de indivíduos que trabalham juntos como uma equipe.
            </p>
          </div>
        </li>
        <li>
          <i className="fa-solid fa-arrows-turn-to-dots"></i>
          <div>
            <strong>Fluxos</strong>
            <p>
              É uma sequência de atividades que produz um resultado de valor observável.
            </p>
          </div>
        </li>
        <li>
          <i className="fas fa-file-alt"></i>
          <div>
            <strong>Artefatos</strong>
            <p>
              É um pedaço de informação que é produzida, modificada ou utilizada em um processo.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
