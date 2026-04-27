import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { AlertCircle, CheckCircle, Clock, Users } from 'lucide-react'
import { getIncidents } from '../services/api'
import { getUsers } from '../services/api'

export default function Dashboard() {
  const [incidents, setIncidents] = useState([])
  const [userCount, setUserCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getIncidents(), getUsers()])
      .then(([incRes, userRes]) => {
        setIncidents(incRes.data)
        setUserCount(userRes.data.length)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const total = incidents.length
  const enCours = incidents.filter(i => i.status === 'IN_PROGRESS').length
  const resolus = incidents.filter(i => i.status === 'RESOLVED').length

  const stats = [
    { label: 'Total Incidents', value: loading ? '…' : total, icon: <AlertCircle size={24} />, color: 'bg-blue-500' },
    { label: 'En cours', value: loading ? '…' : enCours, icon: <Clock size={24} />, color: 'bg-yellow-500' },
    { label: 'Résolus', value: loading ? '…' : resolus, icon: <CheckCircle size={24} />, color: 'bg-green-500' },
    { label: 'Utilisateurs', value: loading ? '…' : userCount, icon: <Users size={24} />, color: 'bg-purple-500' },
  ]

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
          {loading ? (
            <p className="text-gray-400 text-sm">Chargement...</p>
          ) : incidents.length === 0 ? (
            <p className="text-gray-400 text-sm">Aucun incident pour le moment.</p>
          ) : (
            <div className="space-y-3">
              {incidents.slice(0, 5).map((inc) => (
                <div key={inc.id} className="flex items-center justify-between bg-gray-700 rounded-xl px-4 py-3">
                  <div>
                    <span className="text-gray-400 text-sm">#{inc.id}</span>
                    <p className="text-white font-medium">{inc.title}</p>
                    <p className="text-gray-500 text-xs truncate max-w-xs">{inc.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColor(inc.priority)}`}>
                      {inc.priority}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(inc.status)}`}>
                      {inc.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
