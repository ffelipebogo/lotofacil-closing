import React, { memo, useEffect, useCallback } from 'react';

const EscolhaSorteio = ({
  usarUltimoSorteio,
  setUsarUltimoSorteio,
  setDezenasSorteadas,
  setError
}) => {
  
  const fetchUltimoSorteio = useCallback(async () => {
    try {
      const response = await fetch('https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest');
      if (!response.ok) throw new Error('Erro ao obter o último sorteio.');
      const data = await response.json();
      const dezenas = data.dezenas.map(Number);
      setDezenasSorteadas(dezenas);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  }, [setDezenasSorteadas, setError]);

  useEffect(() => {
    if (usarUltimoSorteio) {
      fetchUltimoSorteio();
    }
  }, []);

  const handleRadioChange = useCallback(
    (value) => {
      setUsarUltimoSorteio(value);
      if (value === true) {
        fetchUltimoSorteio();
      }
    },
    [setUsarUltimoSorteio, fetchUltimoSorteio]
  );

  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-2 text-indigo-800">Escolha a fonte das dezenas:</h2>
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="radio"
            checked={usarUltimoSorteio}
            onChange={() => handleRadioChange(true)}
            className="mr-2"
          />
          <span className="text-indigo-600">Usar último sorteio</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            checked={!usarUltimoSorteio}
            onChange={() => handleRadioChange(false)}
            className="mr-2"
          />
          <span className="text-indigo-600">Informar manualmente</span>
        </label>
      </div>
    </div>
  );
};

export default memo(EscolhaSorteio);
