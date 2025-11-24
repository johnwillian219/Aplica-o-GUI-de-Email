import { useState } from "react";
import pencilIcon from "@icons/pencil-square.svg";
import inboxIcon from "@icons/inbox.svg";
import outboxIcon from "@icons/outbox.svg";
import dashboardIcon from "@icons/dashboard.svg";
import settingsIcon from "@icons/settings.svg";
import logoutIcon from "@icons/logout.svg";

import LogoutModal from "../modals/LogoutModal"; // ← modal separado!

export default function Sidebar({ isOpen, onClose, activeItem = "dashboard" }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    { label: "Escrever", icon: pencilIcon, route: "#/compose" },
    { label: "Inbox", icon: inboxIcon, route: "#/inbox" },
    { label: "Outbox", icon: outboxIcon, route: "#/outbox" },
    { label: "Dashboard", icon: dashboardIcon, route: "#/dashboard" },
    { label: "Configurações", icon: settingsIcon, route: "#/settings" },
  ];

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0f1b3a]/95 backdrop-blur-xl border-r border-cyan-900/50 transform transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-cyan-900/30">
            <h1 className="text-2xl font-bold text-cyan-400">
              Mail Application
            </h1>
          </div>

          {/* Menu */}
          <nav className="flex-1 px-4 py-6 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  window.location.href = `/Aplicacao-GUI-de-Email${item.route}`;
                  onClose?.();
                }}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                  activeItem === item.label.toLowerCase()
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-700/50 shadow-lg"
                    : "hover:bg-white/10"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-6 h-6 filter-white"
                />
                <span className="font-medium text-lg">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Botão Sair */}
          <div className="p-4 border-t border-cyan-900/30">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-4 text-red-400 hover:bg-red-900/20 rounded-2xl transition-all"
            >
              <img
                src={logoutIcon}
                alt="Sair"
                className="w-6 h-6 filter-white"
              />
              <span className="font-medium">Sair</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Modal de Logout  */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={() => {
          localStorage.clear();
          window.location.href = "/Aplicacao-GUI-de-Email/#/auth";
        }}
      />
    </>
  );
}
