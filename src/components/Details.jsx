import ArtefatoDetails from './ArtefatoDetails';
import AtividadeDetails from './AtividadeDetails';
import PapelDetails from './PapelDetails';
import './css/details.css'

export default function Details({ atividade, papel, artefato }) {
  return (
    <div className="details-container p-4">
      <AtividadeDetails titulo="Detalhamento da Atividade" dados={atividade} />
      <PapelDetails titulo="Detalhamento do Papel" dados={papel} />
      <ArtefatoDetails titulo="Detalhamento do Artefato" dados={artefato} />
    </div>
  );
}
