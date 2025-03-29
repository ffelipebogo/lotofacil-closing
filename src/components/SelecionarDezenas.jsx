import { useState, useEffect } from 'react';

export default function SelecionarDezenas({ setDezenasSorteadas, setError, dezenasIniciais = [] }) {
  const [selecionadas, setSelecionadas] = useState(dezenasIniciais);

  useEffect(() => {
    if (JSON.stringify(selecionadas) !== JSON.stringify(dezenasIniciais) && selecionadas.length === 0) {
      setSelecionadas(dezenasIniciais);
    }
  }, [dezenasIniciais]);

  const toggleDezena = (dezena) => {
    if (dezenasIniciais.length === 15) {
      setError('Você esta usando o último sorteio!')
      return
    };
    setSelecionadas((prevSelecionadas) => {
      if (prevSelecionadas.includes(dezena)) {
        return prevSelecionadas.filter((d) => d !== dezena);
      }
      if (prevSelecionadas.length >= 15) {
        setError('Você pode selecionar no máximo 15 dezenas.');
        return prevSelecionadas;
      }
      setError('');
      return [...prevSelecionadas, dezena];
    });
  };

  const confirmarSelecao = () => {
    if (selecionadas.length !== 15) {
      setError('Selecione exatamente 15 dezenas.');
      return;
    }
    setDezenasSorteadas([...selecionadas].sort((a, b) => a - b));
    setError('');
  };

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg rounded-2xl border border-gray-200 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-indigo-800 mb-4">Selecione 15 dezenas:</h2>
      <div className="grid grid-cols-5 gap-2 mb-6">
        {Array.from({ length: 25 }, (_, i) => i + 1).map((dezena) => (
          <button
            key={dezena}
            onClick={() => toggleDezena(dezena)}
            className={`w-12 h-12 rounded-lg flex items-center justify-center font-semibold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              selecionadas.includes(dezena)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
            }`}
          >
            {dezena}
          </button>
        ))}
      </div>
      {
        <h2 className="text-lg font-semibold mb-2 text-indigo-800 bg-gradient-to-r from-blue-100 to-indigo-200 p-2 rounded-lg shadow-sm">
          Quantidade selecionada: {selecionadas.length}
        </h2>
      }
      <button
        onClick={confirmarSelecao}
        disabled={selecionadas.length !== 15}
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-5 rounded-lg hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all duration-300 mt-4"
      >
        Confirmar Seleção
      </button>
    </div>
  );
}
