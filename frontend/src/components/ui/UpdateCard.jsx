export default function UpdateCard({ updates, className = "" }) {
  return (
    <div
      className={`bg-[#0f172a]/90 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-cyan-800/40 shadow-2xl ${className}`}
    >
      <h3 className="text-2xl font-bold mb-8 text-cyan-300">Atualizações</h3>
      <div className="space-y-5">
        {updates.map((upd, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-[#1e293b]/60 rounded-2xl p-5"
          >
            <div>
              <p className="font-medium text-lg">{upd.title}</p>
              <p className="text-sm text-gray-400">{upd.author}</p>
            </div>
            <span className="text-cyan-400 font-medium">{upd.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
