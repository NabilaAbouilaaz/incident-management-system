import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Send } from 'lucide-react'

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Bonjour ! 👋 Décrivez votre problème en quelques mots.' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    const userMessage = { from: 'user', text: input }
    const botResponse = {
      from: 'bot',
      text: `Je recherche des incidents similaires à "${input}"...\n\n✅ J'ai trouvé 2 incidents similaires ! Voulez-vous essayer leurs solutions ou créer un nouveau ticket ?`
    }
    setMessages([...messages, userMessage, botResponse])
    setInput('')
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />
      <main className="max-w-3xl mx-auto w-full px-6 py-8 flex flex-col flex-1">
        <h1 className="text-3xl font-bold text-white mb-2">ChatBot Assistant</h1>
        <p className="text-gray-400 mb-6">Je vous aide à résoudre vos problèmes</p>
        <div className="bg-gray-800 rounded-2xl flex flex-col overflow-hidden">
          <div className="p-6 space-y-4 overflow-y-auto max-h-96">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-sm px-4 py-3 rounded-2xl text-sm whitespace-pre-line ${
                  msg.from === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-700 text-gray-100 rounded-bl-none'
                }`}>
                  {msg.from === 'bot' && (
                    <span className="font-bold text-blue-400 block mb-1">🤖 Assistant</span>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 p-4 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Décrivez votre problème..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}