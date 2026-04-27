import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.')
      return
    }
    // Stockage simple de l'utilisateur (dev)
    localStorage.setItem('user', JSON.stringify({ email, role: 'USER' }))
    navigate('/home')
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-5xl">🎫</span>
          <h1 className="text-3xl font-bold text-white mt-3">IncidentPro</h1>
          <p className="text-gray-400 mt-1">Espace Client</p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 rounded-lg px-4 py-3 mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Problème de connexion ? Contactez votre administrateur
        </p>
        <p className="text-center text-gray-600 text-xs mt-2">
          Démo : <span className="text-gray-400">user1@example.com / n'importe quel mot de passe</span>
        </p>
      </div>
    </div>
  )
}
