import { useState } from "react";
import { useNotifications } from "../hooks/useNotifications";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MobileNav from "../components/layout/MobileNav";
import StatCard from "../components/ui/StatCard";
import UpdateCard from "../components/ui/UpdateCard";
import UserList from "../components/ui/UserList";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userType] = useState("user"); // ou "admin"

  const stats = [
    {
      iconUrl: "/icons/email.svg",
      label: "Recebidos",
      value: "520",
      route: "#/inbox",
    },
    {
      iconUrl: "/icons/send.svg",
      label: "Enviados",
      value: "423",
      route: "#/outbox",
    },
    { iconUrl: "/icons/trash.svg", label: "Lixeira", value: "52", route: null },
    { iconUrl: "/icons/like.svg", label: "Likes", value: "1.4K", route: null },
  ];

  const updates = [
    { title: "Atualização do sistema", author: "Admin", date: "17 Nov" },
    { title: "Nova funcionalidade", author: "Admin", date: "14 Nov" },
    { title: "Nova funcionalidade", author: "Admin", date: "05 Nov" },
  ];

  const usersList = [
    { name: "João Gomes", email: "joao.gomes@mail.com" },
    { name: "Manuel Lopes", email: "manuel.lopes@mail.com" },
    { name: "Ana Silva", email: "ana.silva@mail.com" },
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white flex flex-col lg:flex-row">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeItem="dashboard"
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

        <main className="flex-1 px-4 pb-24 lg:pb-10 lg:px-8 overflow-y-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Painel de Controlo
          </h2>

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6 mb-12">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {userType === "admin" && <UserList users={usersList} />}
            <UpdateCard
              updates={updates}
              className={
                userType === "admin" ? "lg:col-span-1" : "lg:col-span-2"
              }
            />
          </div>
        </main>

        <MobileNav activeItem="dashboard" />
      </div>

      <style jsx>{`
        .filter-white {
          filter: brightness(0) invert(1);
        }
      `}</style>
    </div>
  );
}
