import Sidebar from '../components/Sidebar'
import { useParams } from 'react-router-dom'

export default function IncidentDetail() {
  const { id } = useParams()

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Détail Incident</h1>
        <p className="text-gray-400 mb-8">ID : {id}</p>

        <div className="bg-gray-800 rounded-2xl p-6">
          <p className="text-white">Détails de l'incident en cours de développement...</p>
        </div>
      </main>
    </div>
  )
}  
