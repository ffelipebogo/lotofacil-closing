"use client";

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import EscolhaSorteio from '../components/EscolhaSorteio';
import SelecionarDezenas from '../components/SelecionarDezenas';
import DezenasFixas from '../components/DezenasFixas';
import GerarCombinacoes from '../components/GerarCombinacoes';
import BotaoReset from '../components/BotaoReset';
import RegrasSidenav from '../components/RegrasSidenav';
import JogosSidenav from '../components/JogosSidenav';

export default function Home() {
  const [usarUltimoSorteio, setUsarUltimoSorteio] = useState(true);
  const [dezenasSorteadas, setDezenasSorteadas] = useState([]);
  const [dezenasNaoSorteadas, setDezenasNaoSorteadas] = useState([]);
  const [fixasSorteadas, setFixasSorteadas] = useState([]);
  const [fixasNaoSorteadas, setFixasNaoSorteadas] = useState([]);
  const [jogos, setJogos] = useState([]);
  const [regrasOpen, setRegrasOpen] = useState(false);
  const [jogosSidenavOpen, setJogosSidenavOpen] = useState(false);

  useEffect(() => {
    if (dezenasSorteadas.length === 15) {
      const naoSorteadas = Array.from({ length: 25 }, (_, i) => i + 1)
        .filter(num => !dezenasSorteadas.includes(num))
        .slice(0, 10);
  
      setDezenasNaoSorteadas(naoSorteadas);
    }
  }, [dezenasSorteadas]);

  useEffect(() => {
    if(dezenasSorteadas.length === 15){
      reset()
    }
  }, [!usarUltimoSorteio]);

  const reset = () => {
    setUsarUltimoSorteio(false);
    setDezenasSorteadas([]);
    setFixasSorteadas([]);
    setFixasNaoSorteadas([]);
    setJogos([]);
    setJogosSidenavOpen(false);
  };

  const showError = (message) => {
    if (message){
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Gerador de Combinações Lotofácil
            </h1>
            <button 
              onClick={() => setRegrasOpen(true)}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:from-purple-600 hover:to-indigo-700 shadow-md transition-all duration-300 flex items-center flex-shrink-0 ml-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="whitespace-nowrap">Regras</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
          <EscolhaSorteio
            usarUltimoSorteio={usarUltimoSorteio}
            setUsarUltimoSorteio={setUsarUltimoSorteio}
            dezenasSorteadas={dezenasSorteadas}
            setDezenasSorteadas={setDezenasSorteadas}
            setError={showError}
          />
          {usarUltimoSorteio ? (
            <SelecionarDezenas
              setDezenasSorteadas={setDezenasSorteadas}
              setError={showError}
              dezenasIniciais={dezenasSorteadas}
            />
          ) : (
            <div className="mt-6">
              <SelecionarDezenas setDezenasSorteadas={setDezenasSorteadas} setError={showError} />
            </div>
          )}

          {dezenasSorteadas.length === 15 && (
            <div className="mt-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-2 text-indigo-800">
                  {'Dezenas Selecionadas'}:
                </h2>
                <p className="text-xl font-medium text-blue-800">{dezenasSorteadas.join(', ')}</p>
                <h2 className="text-lg font-semibold mb-2 text-indigo-800">
                  {'Dezenas Não Selecionadas'}:
                </h2>
                <p className="text-xl font-medium text-blue-800">{dezenasNaoSorteadas.join(', ')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm">
                  <DezenasFixas
                    tipoDeFixa={'sorteadas'}
                    dezenasSorteadas={dezenasSorteadas}
                    setFixasSorteadas={setFixasSorteadas}
                  />
                </div>
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm">
                  <DezenasFixas
                    tipoDeFixa={'naoSorteadas'}
                    dezenasSorteadas={dezenasSorteadas}
                    setFixasNaoSorteadas={setFixasNaoSorteadas}
                  />
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <GerarCombinacoes
                  dezenasSorteadas={dezenasSorteadas}
                  fixasSorteadas={fixasSorteadas}
                  fixasNaoSorteadas={fixasNaoSorteadas}
                  setJogos={setJogos}
                  setError={showError}
                  setJogosSidenavOpen={setJogosSidenavOpen}
                  jogos={jogos}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <BotaoReset reset={reset} />
        </div>
      </div>
      
      {/* Sidenav para Regras */}
      <RegrasSidenav isOpen={regrasOpen} setIsOpen={setRegrasOpen} />
      
      {/* Sidenav para Jogos */}
      <JogosSidenav isOpen={jogosSidenavOpen} setIsOpen={setJogosSidenavOpen} jogos={jogos} />
    </div>
  );
}