import { useState } from 'react';

export default function InputDezenas({ setDezenasSorteadas, setError }) {
  const [input, setInput] = useState('');

  const validarDezenas = (dezenas) => {
    if (dezenas.length !== 15) return 'Informe exatamente 15 dezenas.';
    if (dezenas.some((d) => d < 1 || d > 25)) return 'As dezenas devem estar entre 1 e 25.';
    if (new Set(dezenas).size !== 15) return 'As dezenas não podem estar duplicadas.';
    return '';
  };

  const handleSubmit = () => {
    const dezenas = input.trim().split(/\s+/).map(Number);
    const erro = validarDezenas(dezenas);
    if (erro) {
      setError(erro);
      return;
    }
    setDezenasSorteadas(dezenas);
    setError('');
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Informe 15 dezenas separadas por espaço (ex: 1 2 3 ...)"
        className="border border-gray-300 p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Confirmar
      </button>
    </div>
  );
}