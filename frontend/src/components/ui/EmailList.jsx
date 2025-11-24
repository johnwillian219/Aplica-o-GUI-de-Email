import checkIcon from "@icons/check.svg";
import clockIcon from "@icons/clock.svg";
import errorIcon from "@icons/x-circle.svg";

export default function EmailList({
  emails,
  selectedEmail,
  onSelectEmail,
  isOutbox = false,
}) {
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

  return (
    <div
      className={`lg:w-96 bg-[#0f1b3a]/80 backdrop-blur-xl rounded-3xl border border-cyan-800/40 shadow-2xl overflow-hidden ${
        selectedEmail ? "hidden lg:block" : "block"
      }`}
    >
      <div className="p-4 border-b border-cyan-800/30 flex gap-2 flex-wrap">
        <button className="px-4 py-2 bg-cyan-600/30 text-cyan-300 rounded-xl text-sm font-medium">
          Por data
        </button>
        <button className="px-4 py-2 hover:bg-white/10 rounded-xl text-sm">
          Por destinatário
        </button>
        <button className="px-4 py-2 hover:bg-white/10 rounded-xl text-sm">
          Por status
        </button>
      </div>

      <div className="divide-y divide-cyan-800/30 max-h-[calc(100vh-300px)] lg:max-h-none overflow-y-auto">
        {emails.map((email) => (
          <div
            key={email.id}
            onClick={() => onSelectEmail(email)}
            className={`p-5 cursor-pointer hover:bg-white/5 transition-all ${
              selectedEmail?.id === email.id
                ? "bg-cyan-900/30 border-l-4 border-cyan-400"
                : ""
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-lg">
                {isOutbox ? email.to : email.from}
              </h4>
              <div className="flex items-center gap-2">
                {isOutbox && (
                  <img
                    src={getStatusIcon(email.status)}
                    alt={email.status}
                    className={`w-5 h-5 ${getStatusColor(email.status)}`}
                  />
                )}
                <span className="text-sm text-cyan-400">{email.date}</span>
              </div>
            </div>
            <p className="text-cyan-300 font-medium">{email.subject}</p>
            <p className="text-sm text-gray-400 mt-1 truncate">
              {email.preview || email.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
