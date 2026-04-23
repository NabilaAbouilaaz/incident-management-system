import Sidebar from '../components/Sidebar'
import { AlertCircle, CheckCircle, Clock, Users } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    { label: 'Total Incidents', value: '124', icon: <AlertCircle size={24} />, color: 'bg-blue-500' },
    { label: 'En cours', value: '38', icon: <Clock size={24} />, color: 'bg-yellow-500' },
    { label: 'Résolus', value: '79', icon: <CheckCircle size={24} />, color: 'bg-green-500' },
    { label: 'Utilisateurs', value: '56', icon: <Users size={24} />, color: 'bg-purple-500' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400 mb-8">Vue d'ensemble du système</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gray-800 rounded-2xl p-6">
              <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4`}>
                {stat.icon}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className="text-white text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Incidents Récents</h2>
          <div className="space-y-3">
            {[
              { id: 'INC-001', titre: 'Serveur en panne', statut: 'En cours', priorite: 'Haute' },
              { id: 'INC-002', titre: 'Problème réseau', statut: 'Nouveau', priorite: 'Moyenne' },
              { id: 'INC-003', titre: 'Imprimante bloquée', statut: 'Résolu', priorite: 'Basse' },
            ].map((inc) => (
              <div key={inc.id} className="flex items-center justify-between bg-gray-700 rounded-xl px-4 py-3">
                <div>
                  <span className="text-gray-400 text-sm">{inc.id}</span>
                  <p className="text-white font-medium">{inc.titre}</p>
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
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 
