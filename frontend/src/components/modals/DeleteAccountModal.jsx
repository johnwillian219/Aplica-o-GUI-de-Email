export default function DeleteAccountModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#0f1b3a] to-[#0a2e5c] rounded-3xl shadow-2xl border border-red-800/50 p-10 max-w-md w-full text-center transform scale-100 animate-in fade-in zoom-in duration-300">
        {/* Ícone de aviso vermelho */}
        <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-16 h-16 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          Eliminar conta permanentemente?
        </h3>
        <p className="text-red-300 text-lg mb-8">
          Esta ação não pode ser desfeita. Todos os teus emails, configurações e
          dados serão apagados para sempre.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onConfirm}
            className="px-10 py-4 bg-red-600 text-white font-bold rounded-2xl shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-200"
          >
            Sim, Eliminar Tudo
          </button>
          <button
            onClick={onClose}
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-lg hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-200"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
