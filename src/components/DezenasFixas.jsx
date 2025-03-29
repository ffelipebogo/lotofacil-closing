import { useState } from 'react';

export default function DezenasFixas({ dezenasSorteadas, setFixasSorteadas, setFixasNaoSorteadas, tipoDeFixa }) {
  const [input, setInput] = useState('');
  const [erroValidacao, setErroValidacao] = useState('');

  // Função de validação genérica baseada no tipo de fixa (sorteadas ou não sorteadas)
  const validarFixas = (fixas) => {
    if (tipoDeFixa === 'sorteadas') {
      if (fixas.length !== 3) return 'Informe exatamente 3 dezenas.';
      if (fixas.some((d) => d < 1 || d > 25)) return 'As dezenas devem estar entre 1 e 25.';
      if (new Set(fixas).size !== 3) return 'As dezenas não podem estar duplicadas.';
      if (!fixas.every((d) => dezenasSorteadas.includes(d)))
        return 'As dezenas fixas devem estar nas dezenas sorteadas.';
    }

    if (tipoDeFixa === 'naoSorteadas') {
      if (fixas.length !== 2) return 'Informe exatamente 2 dezenas.';
      if (fixas.some((d) => d < 1 || d > 25)) return 'As dezenas devem estar entre 1 e 25.';
      if (new Set(fixas).size !== 2) return 'As dezenas não podem estar duplicadas.';
      if (fixas.some((d) => dezenasSorteadas.includes(d)))
        return 'As dezenas fixas não podem estar nas dezenas sorteadas.';
    }

    return '';
  };

  const handleSubmit = () => {
    if (!input.trim()) {
      if (tipoDeFixa === 'sorteadas') setFixasSorteadas([]);
      if (tipoDeFixa === 'naoSorteadas') setFixasNaoSorteadas([]);
      setErroValidacao('');
      return;
    }

    const fixas = input.trim().split(/[\s,]+/).map(Number);

    const erro = validarFixas(fixas);
    if (erro) {
      setErroValidacao(erro);
      return;
    }

    if (tipoDeFixa === 'sorteadas') {
      setFixasSorteadas(fixas);
    } else if (tipoDeFixa === 'naoSorteadas') {
      setFixasNaoSorteadas(fixas);
    }

    setErroValidacao('');
  };

  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg rounded-xl border border-gray-200 max-w-md mx-auto">
    <h2 className="text-lg font-semibold mb-2 text-indigo-800">
      Informe {tipoDeFixa === 'sorteadas' ? '3 dezenas fixas do sorteio' : '2 dezenas fixas não sorteadas'} ou deixe em branco:
    </h2>

    {/* Informação adicional para o usuário */}
    <p className="text-sm text-gray-600 mb-3">
      Caso não informe, o sistema escolherá os números aleatoriamente.
    </p>

    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder={tipoDeFixa === 'sorteadas' 
        ? 'Exemplo: 1 2 3 (ou deixe em branco)' 
        : 'Exemplo: 4 5 (ou deixe em branco)'}
      className={`border p-2 rounded-lg w-full mb-2 focus:outline-none focus:ring-2 text-indigo-950 
        ${erroValidacao ? 'border-red-500 focus:ring-2 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
    />
    
    {erroValidacao && (
      <span className="text-sm text-red-500 mb-2">{erroValidacao}</span>
    )}
    
    <button
      onClick={handleSubmit}
      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg 
        hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all duration-300"
    >
      Confirmar
    </button>
  </div>
  );
}
