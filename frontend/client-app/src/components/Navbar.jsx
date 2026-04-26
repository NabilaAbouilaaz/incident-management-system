import { Link, useLocation } from 'react-router-dom'
import { Home, AlertCircle, MessageCircle, PlusCircle } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()

  const links = [
    { to: '/home', icon: <Home size={20} />, label: 'Accueil' },
    { to: '/my-incidents', icon: <AlertCircle size={20} />, label: 'Mes Incidents' },
    { to: '/create-incident', icon: <PlusCircle size={20} />, label: 'Créer' },
    { to: '/chat', icon: <MessageCircle size={20} />, label: 'ChatBot' },
  ]

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-white font-bold text-xl">🎫 IncidentPro</h1>
          <p className="text-gray-500 text-xs">Espace Client</p>
        </div>
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === link.to
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {link.icon}
              <span className="text-sm">{link.label}</span>
            </Link>
          ))}
        </div>
        <button className="text-gray-400 hover:text-red-400 text-sm transition-colors">
          Déconnexion
        </button>
      </div>
    </nav>
  )
}