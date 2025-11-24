export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#0f1b3a] to-[#0a2e5c] rounded-3xl shadow-2xl border border-cyan-800/50 p-8 max-w-sm w-full text-center">
        <h3 className="text-2xl font-bold text-white mb-6">
          Tens a certeza que queres terminar a sessão?
        </h3>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onConfirm}
            className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transform hover:scale-105 transition-all"
          >
            Sim, Sair
          </button>
          <button
            onClick={onClose}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
