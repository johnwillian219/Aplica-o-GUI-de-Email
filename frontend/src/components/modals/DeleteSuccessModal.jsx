export default function DeleteSuccessModal({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-3xl shadow-2xl border border-red-800/50 p-10 max-w-md w-full text-center transform scale-100 animate-in fade-in zoom-in duration-500">
        {/* Ícone vermelho grande com pulso */}
        <div className="w-28 h-28 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <svg
            className="w-20 h-20 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Conta eliminada com sucesso!
        </h3>

        <p className="text-red-200 text-lg mb-10 leading-relaxed">
          Todos os teus dados foram removidos permanentemente.
        </p>

        {/* Barra de progresso animada */}
        <div className="w-24 h-2 bg-red-500/30 rounded-full mx-auto overflow-hidden mb-6">
          <div className="h-full bg-red-500 animate-pulse w-full"></div>
        </div>

        <p className="text-sm text-gray-400">Redirecionando para o login...</p>
      </div>
    </div>
  );
}
