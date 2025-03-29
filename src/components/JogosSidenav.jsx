"use client";

import React from 'react';

export default function JogosSidenav({ isOpen, setIsOpen, jogos }) {
  return (
    <div className={`fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <h2 className="text-xl font-bold">Jogos Gerados</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {jogos.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {jogos.map((jogo, index) => (
                <div key={index} className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 shadow-sm">
                  <p className="font-semibold text-indigo-800 text-center sm:text-left">{jogo.join(', ')}</p>
                  <button
                    onClick={() => navigator.clipboard.writeText(jogo.join(', '))}
                    className="mt-2 sm:mt-0 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300"
                  >
                    Copiar
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p className="text-lg">Nenhum jogo gerado ainda</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}