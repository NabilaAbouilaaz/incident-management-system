import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { createIncident } from '../services/api'

export default function CreateIncident() {
  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [priorite, setPriorite] = useState('MEDIUM')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const user = JSON.parse(localStorage.getItem('user') || '{}')

    try {
      await createIncident({
        title: titre,
        description,
        status: 'NEW',
        priority: priorite,
        assignedTo: 'Unassigned',
        createdBy: user.email || 'anonymous',
      })
      navigate('/my-incidents')
    } catch (err) {
      setError('Erreur lors de la création. Vérifiez que le backend est démarré.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Créer un Incident</h1>
        <p className="text-gray-400 mb-8">Décrivez votre problème en détail</p>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 rounded-lg px-4 py-3 mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl p-8 space-y-6">
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Titre du problème</label>
            <input
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              required
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Mon imprimante ne fonctionne pas"
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={5}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Décrivez votre problème en détail..."
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Priorité</label>
            <select
              value={priorite}
              onChange={(e) => setPriorite(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="LOW">🟢 Basse</option>
              <option value="MEDIUM">🟡 Moyenne</option>
              <option value="HIGH">🔴 Haute</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Envoi en cours...' : 'Soumettre l\'incident'}
          </button>
        </form>
      </main>
    </div>
  )
}
