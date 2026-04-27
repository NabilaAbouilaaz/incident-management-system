import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getMyIncidents } from '../services/api'

export default function MyIncidents() {
  const [incidents, setIncidents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    if (!user.email) {
      navigate('/login')
      return
    }
    getMyIncidents(user.email)
      .then(res => setIncidents(res.data))
      .catch(() => setError('Impossible de charger les incidents. Vérifiez que le backend est démarré.'))
      .finally(() => setLoading(false))
  }, [navigate])

  const statusColor = (s) => {
    if (s === 'IN_PROGRESS') return 'bg-blue-500/20 text-blue-400'
    if (s === 'NEW') return 'bg-purple-500/20 text-purple-400'
    if (s === 'RESOLVED') return 'bg-green-500/20 text-green-400'
    return 'bg-gray-500/20 text-gray-400'
  }
  const priorityColor = (p) => {
    if (p === 'HIGH') return 'bg-red-500/20 text-red-400'
    if (p === 'MEDIUM') return 'bg-yellow-500/20 text-yellow-400'
    return 'bg-green-500/20 text-green-400'
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Mes Incidents</h1>
        <p className="text-gray-400 mb-8">Suivez l'état de vos demandes</p>

        {loading && <p className="text-gray-400">Chargement...</p>}

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 rounded-lg px-4 py-3 mb-6 text-sm">
            {error}
          </div>
        )}

        {!loading && !error && incidents.length === 0 && (
          <div className="bg-gray-800 rounded-2xl px-6 py-10 text-center">
            <p className="text-gray-400 mb-4">Vous n'avez aucun incident pour le moment.</p>
            <button
              onClick={() => navigate('/create-incident')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              Créer un incident
            </button>
          </div>
        )}

        <div className="space-y-4">
          {incidents.map((inc) => (
            <div key={inc.id} className="bg-gray-800 rounded-2xl px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-blue-400 font-mono text-sm">#{inc.id}</span>
                  <h3 className="text-white font-semibold text-lg">{inc.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{inc.description}</p>
                  <p className="text-gray-600 text-xs mt-1">Assigné à : {inc.assignedTo}</p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColor(inc.priority)}`}>
                    {inc.priority}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(inc.status)}`}>
                    {inc.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
