// components/RegrasSidenav.jsx
"use client"

import { useEffect } from "react";

export default function RegrasSidenav({ isOpen, setIsOpen }) {
  // Fechar sidenav ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && !event.target.closest(".sidenav") && !event.target.closest(".open-sidenav-btn")) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Overlay translúcido quando o sidenav está aberto */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-10 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidenav */}
      <div 
        className={`sidenav fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-2xl z-20 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full overflow-auto">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Como funciona ?</h2>
            <button 
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/** Seções das regras */}
            {[
              {
                title: "Escolha as dezenas de base:",
                items: [
                  "O sistema trabalha com um total de 25 dezenas.",
                  "Você pode usar as dezenas do último sorteio clicando em 'Obter Último Sorteio'.",
                  "Se preferir, insira manualmente as 15 dezenas sorteadas e clique em 'Confirmar'."
                ]
              },
              {
                title: "Defina as dezenas fixas, se desejar:",
                items: [
                  "3 dezenas fixas sorteadas: Escolha entre as dezenas do último sorteio (opcional).",
                  "2 dezenas fixas não sorteadas: Escolha entre as dezenas restantes (opcional).",
                  "Caso não sejam definidas, o sistema escolherá aleatoriamente."
                ]
              },
              {
                title: "Divisão das dezenas para os jogos:",
                items: [
                  "As dezenas sorteadas que não forem fixas são divididas em dois grupos: Grupo A (6 dezenas) e Grupo B (restantes, até 6 dezenas).",
                  "As dezenas não sorteadas que não forem fixas são divididas em Grupo R (4 dezenas) e Grupo S (restantes)."
                ]
              },
              {
                title: "Montagem dos jogos:",
                items: [
                  "O sistema cria quatro combinações diferentes com base nas dezenas fixas e grupos formados:",
                  "Jogo 1: Fixas sorteadas + Grupo A + Fixas não sorteadas + Grupo R.",
                  "Jogo 2: Fixas sorteadas + Grupo A + Fixas não sorteadas + Grupo S.",
                  "Jogo 3: Fixas sorteadas + Grupo B + Fixas não sorteadas + Grupo R.",
                  "Jogo 4: Fixas sorteadas + Grupo B + Fixas não sorteadas + Grupo S."
                ]
              },
              {
                title: "Próximos Passos:",
                items: [
                  "Clique em 'Gerar Combinações' para criar os quatro jogos.",
                  "As combinações aparecerão na tela. Clique no botão 'Copiar' ao lado de cada uma para copiar o texto.",
                  "Para começar de novo, clique em 'Resetar'."
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-indigo-800">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">{idx + 1}</span>
                      <span className="text-indigo-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}