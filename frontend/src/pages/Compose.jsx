import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MobileNav from "../components/layout/MobileNav";
import SuccessModal from "../components/modals/SuccessModal";
import ErrorModal from "../components/modals/ErrorModal";

export default function Compose() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Estados para modais
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSend = (e) => {
    e?.preventDefault();
    setErrorMessage("");

    if (!to || !subject || !message) {
      setErrorMessage("Preencha todos os campos!");
      setShowErrorModal(true);
      return;
    }

    // Simulação de envio bem-sucedido
    setShowSuccessModal(true);

    // Limpa o formulário
    setTo("");
    setSubject("");
    setMessage("");

    // Após 2 segundos, volta para Inbox ou Outbox
    setTimeout(() => {
      window.location.href = "/Aplicacao-GUI-de-Email/#/outbox";
    }, 2000);
  };

  const handleCancel = () => {
    if (
      message &&
      !confirm("Tem certeza que quer cancelar? A mensagem será perdida.")
    ) {
      return;
    }
    window.location.href = "/Aplicacao-GUI-de-Email/#/inbox";
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeItem="escrever"
      />

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col">
        {/* Header */}
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
        <main className="flex-1 px-10 pb-24 lg:pb-10 lg:px-20 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Novo Email
            </h2>

            {/* Card do formulário */}
            <div className="bg-[#0f1b3a]/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-cyan-800/40 p-6 lg:p-10">
              <form onSubmit={handleSend} className="space-y-7">
                {/* Para */}
                <div>
                  <input
                    type="email"
                    placeholder="Para"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full px-6 py-3 bg-[#1e293b]/70 border border-cyan-800/50 rounded-2xl text-white placeholder-cyan-500 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all text-lg"
                  />
                </div>

                {/* Assunto */}
                <div>
                  <input
                    type="text"
                    placeholder="Assunto"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-6 py-3 bg-[#1e293b]/70 border border-cyan-800/50 rounded-2xl text-white placeholder-cyan-500 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all text-lg"
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <textarea
                    rows="8"
                    placeholder="Mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-6 py-3 bg-[#1e293b]/70 border border-cyan-800/50 rounded-2xl text-white placeholder-cyan-500 resize-none focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all text-lg"
                  />
                </div>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <button
                    type="submit"
                    className="px-12 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300"
                  >
                    Enviar
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-12 py-3 bg-[#1e293b]/70 text-cyan-300 font-bold rounded-2xl border border-cyan-800/50 hover:bg-[#1e293b] transition-all"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        {/* Modal de Sucesso */}
        <SuccessModal
          isOpen={showSuccessModal}
          title="Email enviado com sucesso!"
          message="O destinatário receberá em breve."
          onClose={() => setShowSuccessModal(false)}
        />

        {/* Modal de Erro */}
        <ErrorModal
          isOpen={showErrorModal}
          title="Erro ao enviar"
          message={errorMessage}
          onClose={() => setShowErrorModal(false)}
        />

        {/* Navegação inferior mobile */}
        <MobileNav activeItem="escrever" />
      </div>

      <style jsx>{`
        .filter-white {
          filter: brightness(0) invert(1);
        }
      `}</style>
    </div>
  );
}
