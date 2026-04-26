import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { PlusCircle, AlertCircle, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">Bonjour 👋</h1>
          <p className="text-gray-400">Que voulez-vous faire aujourd'hui ?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/create-incident"
            className="bg-gray-800 hover:bg-gray-700 rounded-2xl p-8 transition-colors group">
            <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <PlusCircle size={28} className="text-white" />
            </div>
            <h2 className="text-white font-bold text-xl mb-2">Créer un Incident</h2>
            <p className="text-gray-400 text-sm">Signalez un nouveau problème informatique</p>
          </Link>

          <Link to="/my-incidents"
            className="bg-gray-800 hover:bg-gray-700 rounded-2xl p-8 transition-colors group">
            <div className="bg-yellow-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <AlertCircle size={28} className="text-white" />
            </div>
            <h2 className="text-white font-bold text-xl mb-2">Mes Incidents</h2>
            <p className="text-gray-400 text-sm">Suivez l'état de vos incidents</p>
          </Link>

          <Link to="/chat"
            className="bg-gray-800 hover:bg-gray-700 rounded-2xl p-8 transition-colors group">
            <div className="bg-green-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle size={28} className="text-white" />
            </div>
            <h2 className="text-white font-bold text-xl mb-2">ChatBot Assistant</h2>
            <p className="text-gray-400 text-sm">Obtenez de l'aide immédiatement</p>
          </Link>
        </div>
      </main>
    </div>
  )
}