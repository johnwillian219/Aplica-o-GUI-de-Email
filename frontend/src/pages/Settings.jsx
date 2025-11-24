import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MobileNav from "../components/layout/MobileNav";
import DeleteAccountModal from "../components/modals/DeleteAccountModal";
import DeleteSuccessModal from "../components/modals/DeleteSuccessModal";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false);

  // Dados do usuário
  const userName = "Ana Souza";
  const userEmail = "ana.souza@mail.com";
  const firstLetter = userName.charAt(0).toUpperCase();

  // Redireciona para a página de alterar password
  const handleChangePassword = () => {
    window.location.href = "/Aplicacao-GUI-de-Email/#/change-password";
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setShowDeleteModal(false);
    setShowDeleteSuccessModal(true);
    localStorage.clear();
    setTimeout(() => {
      window.location.href = "/Aplicacao-GUI-de-Email/#/auth";
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white flex flex-col lg:flex-row">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeItem="settings"
      />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col">
        <Header />

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

        <main className="flex-1 px-4 pb-24 lg:pb-10 lg:px-20 overflow-y-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Definições da Conta
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Perfil */}
            <div className="bg-gradient-to-r from-[#0f1b3a] to-[#0a2e5c] rounded-3xl p-6 lg:p-8 shadow-2xl border border-cyan-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl border-4 border-cyan-300">
                  {firstLetter}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-300">
                    {userName}
                  </h3>
                  <p className="text-cyan-200">{userEmail}</p>
                </div>
              </div>
              <button
                onClick={handleChangePassword}
                className="px-6 py-3 bg-[#1e293b]/80 text-cyan-300 font-bold rounded-2xl border border-cyan-700 hover:bg-[#1e293b] transition-all"
              >
                Alterar Password
              </button>
            </div>

            {/* Preferências */}
            <div className="bg-[#0f1b3a]/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-cyan-800/40">
              <h3 className="text-2xl font-bold text-cyan-300 mb-8">
                Preferências
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">
                  Notificações do Sistema
                </span>
                {/* O sino está no Header */}
              </div>
            </div>

            {/* Eliminar Conta */}
            <div className="text-center">
              <button
                onClick={handleDeleteAccount}
                className="px-12 py-4 bg-red-600/80 text-white font-bold rounded-2xl shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
              >
                Eliminar Conta
              </button>
            </div>
          </div>
        </main>

        {/* Modais */}
        <DeleteAccountModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
        />

        <DeleteSuccessModal isOpen={showDeleteSuccessModal} />

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
