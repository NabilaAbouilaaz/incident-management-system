import Navbar from '../components/Navbar'

export default function MyIncidents() {
  const incidents = [
    { id: 'INC-001', titre: 'Imprimante bloquée', statut: 'Résolu', priorite: 'Basse', date: '2026-04-20' },
    { id: 'INC-002', titre: 'Écran noir', statut: 'En cours', priorite: 'Haute', date: '2026-04-23' },
    { id: 'INC-003', titre: 'Problème WiFi', statut: 'Nouveau', priorite: 'Moyenne', date: '2026-04-25' },
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Mes Incidents</h1>
        <p className="text-gray-400 mb-8">Suivez l'état de vos demandes</p>
        <div className="space-y-4">
          {incidents.map((inc) => (
            <div key={inc.id} className="bg-gray-800 rounded-2xl px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-blue-400 font-mono text-sm">{inc.id}</span>
                  <h3 className="text-white font-semibold text-lg">{inc.titre}</h3>
                  <p className="text-gray-500 text-sm">{inc.date}</p>
                </div>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    inc.priorite === 'Haute' ? 'bg-red-500/20 text-red-400' :
                    inc.priorite === 'Moyenne' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>{inc.priorite}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    inc.statut === 'En cours' ? 'bg-blue-500/20 text-blue-400' :
                    inc.statut === 'Nouveau' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>{inc.statut}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}