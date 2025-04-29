export default function ArtefatoDetails({ titulo, dados }) {
    return (
      <div className="detail-section border rounded-lg p-4 mb-6 shadow-md bg-white">
        <h2 className="text-lg font-bold mb-3">{titulo}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {Object.entries(dados).map(([chave, valor]) => (
            <div key={chave}>
              <p className="font-semibold">{chave}:</p>
              <p>{valor}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
  