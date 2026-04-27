import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { getIncidents, deleteIncident } from '../services/api'

export default function IncidentsList() {
  const [incidents, setIncidents] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const load = () => {
    setLoading(true)
    getIncidents()
      .then(res => setIncidents(res.data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer cet incident ?')) return
    await deleteIncident(id)
    load()
  }

  const statusColor = (s) => {
    if (s === 'IN_PROGRESS') return 'bg-blue-500/20 text-blue-400'
    if (s === 'NEW') return 'bg-purple-500/20 text-purple-400'
    if (s === 'RESOLVED') return 'bg-green-500/20 text-green-400'
    return 'bg-yellow-500/20 text-yellow-400'
  }
  const priorityColor = (p) => {
    if (p === 'HIGH') return 'bg-red-500/20 text-red-400'
    if (p === 'MEDIUM') return 'bg-yellow-500/20 text-yellow-400'
    return 'bg-green-500/20 text-green-400'
  }

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Incidents</h1>
        <p className="text-gray-400 mb-8">Liste de tous les incidents</p>

        {loading ? (
          <p className="text-gray-400">Chargement...</p>
        ) : incidents.length === 0 ? (
          <p className="text-gray-400">Aucun incident trouvé.</p>
        ) : (
          <div className="bg-gray-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-400 px-6 py-4 text-sm">ID</th>
                  <th className="text-left text-gray-400 px-6 py-4 text-sm">Titre</th>
                  <th className="text-left text-gray-400 px-6 py-4 text-sm">Statut</th>
                  <th className="text-left text-gray-400 px-6 py-4 text-sm">Priorité</th>
                  <th className="text-left text-gray-400 px-6 py-4 text-sm">Assigné à</th>
                  <th className="text-left text-gray-400 px-6 py-4 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {incidents.map((inc) => (
                  <tr key={inc.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 text-blue-400 font-mono text-sm">#{inc.id}</td>
                    <td className="px-6 py-4">
                      <p className="text-white font-medium">{inc.title}</p>
                      <p className="text-gray-500 text-xs truncate max-w-xs">{inc.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(inc.status)}`}>
                        {inc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColor(inc.priority)}`}>
                        {inc.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{inc.assignedTo}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button
                        onClick={() => navigate(`/incidents/${inc.id}`)}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 hover:bg-blue-600/40 rounded-lg text-xs transition-colors"
                      >
                        Voir
                      </button>
                      <button
                        onClick={() => handleDelete(inc.id)}
                        className="px-3 py-1 bg-red-600/20 text-red-400 hover:bg-red-600/40 rounded-lg text-xs transition-colors"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
