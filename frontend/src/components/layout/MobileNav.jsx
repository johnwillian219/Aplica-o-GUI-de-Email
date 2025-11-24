import dashboardIcon from "@icons/dashboard.svg";
import inboxIcon from "@icons/inbox.svg";
import sendIcon from "@icons/send.svg";
import settingsIcon from "@icons/settings.svg";
import pencilIcon from "@icons/pencil-square.svg";

export default function MobileNav({ activeItem = "dashboard" }) {
  const navItems = [
    { label: "Escrever", icon: pencilIcon, route: "#/compose" },
    { label: "Inbox", icon: inboxIcon, route: "#/inbox" },
    { label: "Enviados", icon: sendIcon, route: "#/outbox" },
    { label: "Config", icon: settingsIcon, route: "#/settings" },
  ];

  // Mapeia o item ativo (Dashboard tem nome diferente)
  const isActive = (label) => {
    if (activeItem === "dashboard" && label === "Escrever") return false;
    return activeItem === label.toLowerCase();
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0f1b3a]/95 backdrop-blur-2xl border-t border-cyan-900/50 z-40">
      <div className="grid grid-cols-5 py-3 text-center">
        {/* Botão Escrever (sempre no meio) */}
        <button
          onClick={() =>
            (window.location.href = "/Aplicacao-GUI-de-Email/#/compose")
          }
          className="flex flex-col items-center text-cyan-400"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg mb-1">
            <img
              src={pencilIcon}
              alt="Escrever"
              className="w-7 h-7 filter-white"
            />
          </div>
          <span className="text-xs font-medium">Escrever</span>
        </button>

        {/* Outros itens */}
        {navItems.slice(1).map((item) => (
          <button
            key={item.label}
            onClick={() =>
              (window.location.href = `/Aplicacao-GUI-de-Email${item.route}`)
            }
            className={`flex flex-col items-center ${
              isActive(item.label) ? "text-cyan-400" : "text-gray-400"
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-7 h-7 filter-white mb-1"
            />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
