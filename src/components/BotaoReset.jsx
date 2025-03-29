export default function BotaoReset({ reset }) {
  return (
    <button
      onClick={reset}
      className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 shadow-md transition-all duration-300 mt-6"
    >
      Resetar
    </button>
  );
}
