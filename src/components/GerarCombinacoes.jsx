export default function GerarCombinacoes({
  dezenasSorteadas,
  fixasSorteadas,
  fixasNaoSorteadas,
  setJogos,
  setError,
  setJogosSidenavOpen,
  jogos
}) {
  const randomSample = (array, n) => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
  };

  const gerar = () => {
    try {
      if (jogos && jogos.length > 0) {
        setJogosSidenavOpen(true);
        return;
      }
      const todasDezenas = Array.from({ length: 25 }, (_, i) => i + 1);
      const dezenasNaoSorteadas = todasDezenas.filter((d) => !dezenasSorteadas.includes(d));

      const fixasS = fixasSorteadas.length === 3 ? fixasSorteadas : randomSample(dezenasSorteadas, 3);
      const fixasNS =
        fixasNaoSorteadas.length === 2 ? fixasNaoSorteadas : randomSample(dezenasNaoSorteadas, 2);

      const restantesSorteadas = dezenasSorteadas.filter((d) => !fixasS.includes(d));
      const grupoA = randomSample(restantesSorteadas, 6);
      const grupoB = restantesSorteadas.filter((d) => !grupoA.includes(d)).slice(0, 6);

      const restantesNaoSorteadas = dezenasNaoSorteadas.filter((d) => !fixasNS.includes(d));
      const grupoR = randomSample(restantesNaoSorteadas, 4);
      const grupoS = restantesNaoSorteadas.filter((d) => !grupoR.includes(d));

      const jogo1 = [...fixasS, ...grupoA, ...fixasNS, ...grupoR].sort((a, b) => a - b);
      const jogo2 = [...fixasS, ...grupoA, ...fixasNS, ...grupoS].sort((a, b) => a - b);
      const jogo3 = [...fixasS, ...grupoB, ...fixasNS, ...grupoR].sort((a, b) => a - b);
      const jogo4 = [...fixasS, ...grupoB, ...fixasNS, ...grupoS].sort((a, b) => a - b);

      setJogos([jogo1, jogo2, jogo3, jogo4]);
      setError('');
      setJogosSidenavOpen(true);
    } catch (err) {
      setError('Erro ao gerar as combinações.');
    }
  };

  return (
    <button
      onClick={gerar}
      className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-indigo-700 shadow-md transition-all duration-300 font-medium text-lg"
    >
      {jogos && jogos.length > 0 ? 'Ver Combinações' : 'Gerar Combinações'}
    </button>
  );
}