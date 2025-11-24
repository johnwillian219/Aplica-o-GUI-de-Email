import arrowLeftUrl from "@icons/arrow-left.svg";
import checkIcon from "@icons/check.svg";
import clockIcon from "@icons/clock.svg";
import errorIcon from "@icons/x-circle.svg";
import emptyInboxUrl from "@icons/empty-inbox.svg";

export default function EmailPreview({
  email,
  isVisible,
  onBack,
  isOutbox = false,
}) {
  // Ícones e cores de status
  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return checkIcon;
      case "pending":
        return clockIcon;
      case "error":
        return errorIcon;
      default:
        return clockIcon;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "text-green-400";
      case "pending":
        return "text-yellow-400";
      case "error":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "delivered":
        return "Entregue";
      case "pending":
        return "Em fila";
      case "error":
        return "Erro";
      default:
        return "Em fila";
    }
  };

  // Quando não tem email selecionado
  if (!email) {
    return (
      <div className="hidden lg:flex w-[600px] h-[550px] bg-[#0f1b3a]/80 backdrop-blur-xl rounded-3xl border border-cyan-800/40 shadow-2xl p-10 text-center text-gray-400 items-center justify-center">
        <div>
          <img
            src={emptyInboxUrl}
            alt="Nenhum email"
            className="w-28 h-28 mx-auto mb-6 opacity-50 filter-white"
          />
          <p className="text-2xl font-medium">
            Seleciona um email para visualizar
          </p>
          <p className="text-lg mt-2 opacity-75">
            Ou clica num email da lista à esquerda
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex-1 ${
        isVisible ? "block" : "hidden lg:block"
      } w-[600px] h-[550px] `}
    >
      <div className="bg-[#0f1b3a]/80 backdrop-blur-xl rounded-3xl border border-cyan-800/40 shadow-2xl h-full flex flex-col">
        {/* Cabeçalho mobile com seta voltar */}
        <div className="lg:hidden p-4 border-b border-cyan-800/30 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-xl transition-all"
          >
            <img
              src={arrowLeftUrl}
              alt="Voltar"
              className="w-6 h-6 filter-white"
            />
          </button>
          <h3 className="text-xl font-bold text-cyan-300 truncate">
            {email.subject}
          </h3>
        </div>

        {/* Conteúdo com scroll independente */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          {/* Título no desktop */}
          <div className="hidden lg:block text-2xl font-bold text-cyan-300 mb-6">
            {email.subject}
          </div>

          {/* Remetente/Destinatário */}
          <p className="text-lg text-gray-300 mb-6">
            {isOutbox ? "Para:" : "De:"}{" "}
            <span className="text-cyan-300">
              {isOutbox ? email.to : email.from}
            </span>{" "}
            • {email.date}
          </p>

          {/* Status no Outbox */}
          {isOutbox && (
            <div className="flex items-center gap-3 mb-8">
              <img
                src={getStatusIcon(email.status)}
                alt={getStatusText(email.status)}
                className={`w-7 h-7 ${getStatusColor(email.status)}`}
              />
              <span
                className={`text-xl font-bold ${getStatusColor(email.status)}`}
              >
                {getStatusText(email.status)}
              </span>
            </div>
          )}

          {/* Corpo do email */}
          <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
            {email.body}
          </div>
        </div>

        {/* Botões fixos no fundo */}
        <div className="p-6 border-t border-cyan-800/30 flex gap-4">
          <button className="flex-1 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:from-green-400 hover:to-emerald-500 transform hover:scale-105 transition-all">
            {isOutbox ? "Reenviar" : "Responder"}
          </button>
          <button className="flex-1 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:from-red-400 hover:to-pink-500 transform hover:scale-105 transition-all">
            Apagar
          </button>
        </div>
      </div>
    </div>
  );
}
