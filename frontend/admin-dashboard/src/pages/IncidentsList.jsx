import Sidebar from '../components/Sidebar'

export default function IncidentsList() {
  const incidents = [
    { id: 'INC-001', titre: 'Serveur en panne', statut: 'En cours', priorite: 'Haute', date: '2026-04-23' },
    { id: 'INC-002', titre: 'Problème réseau', statut: 'Nouveau', priorite: 'Moyenne', date: '2026-04-22' },
    { id: 'INC-003', titre: 'Imprimante bloquée', statut: 'Résolu', priorite: 'Basse', date: '2026-04-21' },
    { id: 'INC-004', titre: 'Écran noir PC bureau', statut: 'Assigné', priorite: 'Haute', date: '2026-04-20' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Incidents</h1>
        <p className="text-gray-400 mb-8">Liste de tous les incidents</p>

        <div className="bg-gray-800 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left text-gray-400 px-6 py-4 text-sm">ID</th>
                <th className="text-left text-gray-400 px-6 py-4 text-sm">Titre</th>
                <th className="text-left text-gray-400 px-6 py-4 text-sm">Statut</th>
                <th className="text-left text-gray-400 px-6 py-4 text-sm">Priorité</th>
                <th className="text-left text-gray-400 px-6 py-4 text-sm">Date</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((inc) => (
                <tr key={inc.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-blue-400 font-mono text-sm">{inc.id}</td>
                  <td className="px-6 py-4 text-white">{inc.titre}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      inc.statut === 'En cours' ? 'bg-blue-500/20 text-blue-400' :
                      inc.statut === 'Nouveau' ? 'bg-purple-500/20 text-purple-400' :
                      inc.statut === 'Résolu' ? 'bg-green-500/20 text-green-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>{inc.statut}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      inc.priorite === 'Haute' ? 'bg-red-500/20 text-red-400' :
                      inc.priorite === 'Moyenne' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>{inc.priorite}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{inc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}