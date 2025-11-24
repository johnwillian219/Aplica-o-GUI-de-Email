import { useState, useEffect } from "react";
import { useNotifications } from "../hooks/useNotifications";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MobileNav from "../components/layout/MobileNav";
import EmailList from "../components/ui/EmailList";
import EmailPreview from "../components/ui/EmailPreview";

export default function Inbox() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [favoriteEmails, setFavoriteEmails] = useState(new Set());

  // Carrega favoritos salvos
  useEffect(() => {
    const saved = localStorage.getItem("favoriteEmails");
    if (saved) setFavoriteEmails(new Set(JSON.parse(saved)));
  }, []);

  // Salva favoritos toda vez que mudar
  useEffect(() => {
    localStorage.setItem("favoriteEmails", JSON.stringify([...favoriteEmails]));
  }, [favoriteEmails]);

  const toggleFavorite = (emailId) => {
    setFavoriteEmails((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(emailId)) newSet.delete(emailId);
      else newSet.add(emailId);
      return newSet;
    });
  };

  const emails = [
    {
      id: 1,
      from: "João Lopes",
      subject: "Projectos Recentes",
      date: "13 Set",
      body: "Olá, aqui vai o relatório dos projectos recentes. Estamos a avançar bem...",
      preview: "Olá, aqui vai o relatório dos projectos recentes...",
    },
    {
      id: 2,
      from: "Maria Gomes",
      subject: "Reunião de Equipe",
      date: "10 Set",
      body: "A reunião está marcada para amanhã às 10h. Não te esqueças!",
      preview: "A reunião está marcada para amanhã às 10h...",
    },
    {
      id: 3,
      from: "Alice Duarte",
      subject: "Projectos Recentes",
      date: "13 Set",
      body: "It is a long established fact that a reader will be distracted by the readable content...",
      preview:
        "It is a long established fact that a reader will be distracted...",
    },
    {
      id: 4,
      from: "Pedro Silva",
      subject: "Atualização do Sistema",
      date: "09 Set",
      body: "O sistema foi atualizado com novas funcionalidades. Testa quando puderes.",
      preview: "O sistema foi atualizado com novas funcionalidades...",
    },
    {
      id: 5,
      from: "Pedro Silva",
      subject: "Atualização do Sistema",
      date: "09 Set",
      body: "O sistema foi atualizado com novas funcionalidades. Testa quando puderes.",
      preview: "O sistema foi atualizado com novas funcionalidades...",
    },
    {
      id: 6,
      from: "Pedro Silva",
      subject: "Atualização do Sistema",
      date: "09 Set",
      body: "O sistema foi atualizado com novas funcionalidades. Testa quando puderes.",
      preview: "O sistema foi atualizado com novas funcionalidades...",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white flex flex-col lg:flex-row">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeItem="inbox"
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
            Emails Recebidos
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 h-full">
            {/* Lista de Emails */}
            <EmailList
              emails={emails}
              selectedEmail={selectedEmail}
              onSelectEmail={setSelectedEmail}
              favoriteEmails={favoriteEmails}
              toggleFavorite={toggleFavorite}
            />

            {/* Pré-visualização */}
            <EmailPreview
              email={selectedEmail}
              isVisible={!!selectedEmail}
              onBack={() => setSelectedEmail(null)}
              isFavorite={
                selectedEmail ? favoriteEmails.has(selectedEmail.id) : false
              }
              onToggleFavorite={() =>
                selectedEmail && toggleFavorite(selectedEmail.id)
              }
            />
          </div>
        </main>

        <MobileNav activeItem="inbox" />
      </div>

      <style jsx>{`
        .filter-white {
          filter: brightness(0) invert(1);
        }
      `}</style>
    </div>
  );
}
