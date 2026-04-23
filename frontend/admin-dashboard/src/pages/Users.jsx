import Sidebar from '../components/Sidebar'

export default function Users() {
  const users = [
    { id: 1, nom: 'Ahmed Benali', email: 'ahmed@example.com', role: 'Technicien', statut: 'Actif' },
    { id: 2, nom: 'Sara Idrissi', email: 'sara@example.com', role: 'Admin', statut: 'Actif' },
    { id: 3, nom: 'Karim Alami', email: 'karim@example.com', role: 'Utilisateur', statut: 'Inactif' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Utilisateurs</h1>
        <p className="text-gray-400 mb-8">Gestion des utilisateurs</p>

        <div className="grid gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-gray-800 rounded-2xl px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {user.nom.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{user.nom}</p>
                  <p className="text-gray-400 text-sm">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-sm">{user.role}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  user.statut === 'Actif'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>{user.statut}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}