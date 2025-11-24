import { useState } from "react";
import { useNotifications } from "../hooks/useNotifications";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MobileNav from "../components/layout/MobileNav";
import SuccessModal from "../components/modals/SuccessModal";
import ErrorModal from "../components/modals/ErrorModal";

export default function ChangePassword() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setErrorMessage("Todos os campos são obrigatórios");
      setShowErrorModal(true);
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("As novas palavras-passe não coincidem");
      setShowErrorModal(true);
      return;
    }

    if (newPassword.length < 6) {
      setErrorMessage("A nova palavra-passe deve ter pelo menos 6 caracteres");
      setShowErrorModal(true);
      return;
    }

    // Tudo certo → sucesso!
    setShowSuccessModal(true);

    // Após 2 segundos, volta para Settings
    setTimeout(() => {
      window.location.href = "/Aplicacao-GUI-de-Email/#/settings";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeItem="settings"
      />

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col">
        {/* Header com notificações globais */}
        <Header />

        {/* Botão menu mobile */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-3 left-3 z-50 p-2.5 bg-cyan-600/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-400/30"
        >
          <img
            src="/icons/menu.svg"
            alt="Menu"
            className="w-6 h-6 filter-white"
          />
        </button>

        {/* Conteúdo principal */}
        <main className="flex-1 px-4 pb-24 lg:pb-10 lg:px-32 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Alterar Palavra-Passe
            </h2>

            {/* Formulário */}
            <div className="bg-[#0f1b3a]/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-cyan-800/40 p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <input
                  type="password"
                  placeholder="Palavra-passe atual"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="w-full px-6 py-5 bg-[#1e293b]/70 border border-cyan-800/50 rounded-2xl text-white placeholder-cyan-500 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all text-lg"
                />

                <input
                  type="password"
                  placeholder="Nova palavra-passe"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength="6"
                  className="w-full px-6 py-5 bg-[#1e293b]/70 border border-cyan-800/50 rounded-2xl text-white placeholder-cyan-500 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all text-lg"
                />

                <input
                  type="password"
                  placeholder="Confirmar nova palavra-passe"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength="6"
                  className="w-full px-6 py-5 bg-[#1e293b]/70 border border-cyan-800/50 rounded-2xl text-white placeholder-cyan-500 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all text-lg"
                />

                {/* Botão Submeter */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300"
                  >
                    Alterar Palavra-Passe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        {/* Modais */}
        <SuccessModal
          isOpen={showSuccessModal}
          title="Palavra-passe alterada!"
          message="A tua conta está agora mais segura."
          onClose={() => setShowSuccessModal(false)}
        />

        <ErrorModal
          isOpen={showErrorModal}
          title="Erro"
          message={errorMessage}
          onClose={() => setShowErrorModal(false)}
        />

        {/* Navegação inferior mobile */}
        <MobileNav activeItem="settings" />
      </div>

      <style jsx>{`
        .filter-white {
          filter: brightness(0) invert(1);
        }
      `}</style>
    </div>
  );
}
