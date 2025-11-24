import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MobileNav from "../components/layout/MobileNav";
import EmailList from "../components/ui/EmailList";
import EmailPreview from "../components/ui/EmailPreview";

export default function Outbox() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const sentEmails = [
    {
      id: 1,
      to: "Alice Duarte",
      subject: "Projectos Recentes",
      date: "13 Set",
      status: "delivered",
      body: "It is a long established fact that a reader will be distracted...",
      preview:
        "It is a long established fact that a reader will be distracted...",
    },
    {
      id: 2,
      to: "Carlos Lopes",
      subject: "Reunião de Equipe",
      date: "10 Set",
      status: "pending",
      body: "A reunião está agendada para amanhã. Confirma a tua presença?",
      preview: "A reunião está agendada para amanhã...",
    },
    {
      id: 3,
      to: "Alice Duarte",
      subject: "Projectos Recentes",
      date: "13 Set",
      status: "error",
      body: "Ocorreu um erro no envio anterior. Por favor tenta novamente.",
      preview: "Ocorreu um erro no envio anterior...",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white flex flex-col lg:flex-row">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeItem="outbox"
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

        <main className="flex-1 px-4 pb-24 lg:pb-10 lg:px-6 overflow-y-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Emails Enviados
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 h-full">
            {/* Lista de Emails Enviados */}
            <EmailList
              emails={sentEmails}
              selectedEmail={selectedEmail}
              onSelectEmail={setSelectedEmail}
              isOutbox={true}
            />

            {/* Pré-visualização */}
            <EmailPreview
              email={selectedEmail}
              isVisible={!!selectedEmail}
              onBack={() => setSelectedEmail(null)}
              isOutbox={true}
            />
          </div>
        </main>

        <MobileNav activeItem="outbox" />
      </div>

      <style jsx>{`
        .filter-white {
          filter: brightness(0) invert(1);
        }
      `}</style>
    </div>
  );
}
