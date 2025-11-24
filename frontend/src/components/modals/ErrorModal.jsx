// ErrorModal.jsx
export default function ErrorModal({ isOpen, title, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#0f1b3a] to-[#0a2e5c] rounded-3xl shadow-2xl border border-red-800/50 p-10 max-w-md w-full text-center transform scale-100 animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-red-300 text-lg mb-8">{message}</p>
        <button
          onClick={onClose}
          className="px-10 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:from-red-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
