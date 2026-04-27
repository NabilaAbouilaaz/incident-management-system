import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { getIncidentById, updateIncident } from '../services/api'

const STATUSES = ['NEW', 'IN_PROGRESS', 'RESOLVED', 'CLOSED']
const PRIORITIES = ['LOW', 'MEDIUM', 'HIGH']

export default function IncidentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [incident, setIncident] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({})

  useEffect(() => {
    getIncidentById(id)
      .then(res => {
        setIncident(res.data)
        setForm(res.data)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [id])

  const handleSave = async () => {
    setSaving(true)
    try {
      await updateIncident(id, form)
      alert('Incident mis à jour !')
    } catch {
      alert('Erreur lors de la mise à jour.')
    } finally {
      setSaving(false)
    }
  }

  const statusColor = (s) => {
    if (s === 'IN_PROGRESS') return 'bg-blue-500/20 text-blue-400'
    if (s === 'NEW') return 'bg-purple-500/20 text-purple-400'
    if (s === 'RESOLVED') return 'bg-green-500/20 text-green-400'
    return 'bg-gray-500/20 text-gray-400'
  }

  if (loading) return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-1 p-8 text-gray-400">Chargement...</main>
    </div>
  )

  if (!incident) return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-1 p-8 text-red-400">Incident introuvable.</main>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate('/incidents')} className="text-gray-400 hover:text-white transition-colors">← Retour</button>
          <h1 className="text-3xl font-bold text-white">Incident #{id}</h1>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(form.status)}`}>
            {form.status}
          </span>
        </div>

        <div className="bg-gray-800 rounded-2xl p-6 space-y-5 max-w-2xl">
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Titre</label>
            <input
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              value={form.title || ''}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Description</label>
            <textarea
              rows={4}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              value={form.description || ''}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Statut</label>
              <select
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                value={form.status || ''}
                onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              >
                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Priorité</label>
              <select
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                value={form.priority || ''}
                onChange={e => setForm(f => ({ ...f, priority: e.target.value }))}
              >
                {PRIORITIES.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Assigné à</label>
            <input
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              value={form.assignedTo || ''}
              onChange={e => setForm(f => ({ ...f, assignedTo: e.target.value }))}
            />
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {saving ? 'Enregistrement...' : 'Enregistrer les modifications'}
          </button>
        </div>
      </main>
    </div>
  )
}
