import { useNotifications } from "../../hooks/useNotifications";
import bellOnUrl from "@icons/bell-on.svg";
import bellOffUrl from "@icons/bell-off.svg";
import mailUrl from "@icons/email.svg";

export default function Header() {
  const { enabled: notificationsEnabled, toggle: toggleNotifications } =
    useNotifications();

  // Dados do usuário (pode vir do login ou localStorage depois)
  const userName = "Ana Souza";
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <header className="bg-gradient-to-r from-[#0f1b3a] to-[#0a2e5c] rounded-3xl mx-4 mt-4 mb-6 p-4 lg:p-6 flex items-center justify-between shadow-2xl border border-cyan-800/30">
      {/* Lado esquerdo - Logo + Nome da App */}
      <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
        <div className="bg-cyan-500/20 p-2.5 lg:p-3 rounded-2xl flex-shrink-0">
          <img
            src={mailUrl}
            alt="Mail"
            className="w-7 h-7 lg:w-9 lg:h-9 filter-white"
          />
        </div>
        <h1 className="text-lg lg:text-2xl font-bold text-cyan-300 truncate">
          Mail Application
        </h1>
      </div>

      {/* Lado direito - Notificações + Avatar */}
      <div className="flex items-center gap-3 lg:gap-4">
        {/* Botão de Notificações */}
        <button
          onClick={toggleNotifications}
          className="relative p-2.5 lg:p-3 hover:bg-white/10 rounded-2xl transition-all duration-300 group"
          title={
            notificationsEnabled
              ? "Desativar notificações"
              : "Ativar notificações"
          }
        >
          <img
            src={notificationsEnabled ? bellOnUrl : bellOffUrl}
            alt="Notificações"
            className="w-6 h-6 lg:w-7 lg:h-7 filter-white transition-all duration-300"
          />
        </button>

        {/* Avatar com primeira letra */}
        <div
          className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center font-bold text-lg lg:text-xl shadow-lg border-2 border-cyan-300 "
          onClick={() =>
            (window.location.href = "/Aplicacao-GUI-de-Email/#/settings")
          }
        >
          {firstLetter}
        </div>
      </div>
    </header>
  );
}
