import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, AlertCircle, Users, LogOut } from 'lucide-react'

export default function Sidebar() {
  const location = useLocation()

  const links = [
    { to: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/incidents', icon: <AlertCircle size={20} />, label: 'Incidents' },
    { to: '/users', icon: <Users size={20} />, label: 'Utilisateurs' },
  ]

  return (
    <div className="w-64 bg-gray-900 min-h-screen flex flex-col p-4">
      <div className="mb-8 px-2">
        <h2 className="text-white font-bold text-xl">🛡️ IncidentPro</h2>
        <p className="text-gray-500 text-xs">Panel Administrateur</p>
      </div>

      <nav className="flex-1 space-y-1">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              location.pathname === link.to
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      <button className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-red-400 transition-colors">
        <LogOut size={20} />
        <span>Déconnexion</span>
      </button>
    </div>
  )
}
