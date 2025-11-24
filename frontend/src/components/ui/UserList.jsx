import usersIcon from "@icons/users.svg";

export default function UserList({ users = [] }) {
  return (
    <div className="bg-[#0f172a]/90 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-cyan-800/40 shadow-2xl">
      {/* Cabeçalho com ícone e contador */}
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-5 rounded-2xl shadow-lg">
          <img
            src={usersIcon}
            alt="Utilizadores"
            className="w-10 h-10 filter-white"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">{users.length}</h3>
          <p className="text-cyan-300 text-lg">Utilizadores</p>
        </div>
      </div>

      {/* Lista de usuários */}
      <div className="space-y-4">
        {users.length === 0 ? (
          <p className="text-center text-gray-400 py-8">
            Nenhum utilizador encontrado
          </p>
        ) : (
          users.map((user, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#1e293b]/60 rounded-2xl p-5 hover:bg-[#1e293b]/80 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                {/* Avatar com primeira letra */}
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-lg text-white">
                    {user.name}
                  </p>
                  <p className="text-sm text-cyan-300">{user.email}</p>
                </div>
              </div>
              {/* Três pontinhos (ações futuras) */}
              <span className="text-3xl text-cyan-400 select-none">...</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
