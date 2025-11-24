import emailIcon from "@icons/email.svg";
import sendIcon from "@icons/send.svg";
import trashIcon from "@icons/trash.svg";
import likeIcon from "@icons/like.svg";

export default function StatCard({ iconUrl, label, value, route }) {
  // Mapeia o caminho antigo para o ícone importado (para compatibilidade)
  const iconMap = {
    "/icons/email.svg": emailIcon,
    "/icons/send.svg": sendIcon,
    "/icons/trash.svg": trashIcon,
    "/icons/like.svg": likeIcon,
  };

  // Usa o ícone importado corretamente
  const Icon = iconMap[iconUrl] || emailIcon; // Ícone padrão se não encontrado

  const handleClick = () => {
    if (route) {
      window.location.href = route; // Navega para a rota especificada
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95 ${
        route ? "" : "cursor-default"
      }`}
    >
      {/* Versão Mobile - Horizontal */}
      <div className="lg:hidden bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-6 flex items-center gap-6 shadow-2xl hover:shadow-cyan-500/50">
        <div className="bg-white/20 p-4 rounded-2xl">
          <img src={Icon} alt={label} className="w-12 h-12 filter-white" />
        </div>
        <div>
          <p className="text-5xl font-bold">{value}</p>
          <p className="text-lg text-cyan-100">{label}</p>
        </div>
      </div>

      {/* Versão Desktop - Quadrado */}
      <div className="hidden lg:block bg-gradient-to-br from-[#1e293b]/90 to-[#0f172a]/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-cyan-800/50 hover:border-cyan-500/70 transition-all">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl w-fit mb-4 shadow-xl">
          <img src={Icon} alt={label} className="w-12 h-12 filter-white" />
        </div>
        <p className="text-cyan-300 text-sm font-medium">{label}</p>
        <p className="text-4xl font-bold mt-2">{value}</p>
      </div>
    </div>
  );
}
