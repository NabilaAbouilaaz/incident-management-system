import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080',
})

// ─── Incidents ────────────────────────────────────────────────────────────────
export const getMyIncidents = (createdBy) =>
  API.get(`/incident-service/api/incidents/user/${encodeURIComponent(createdBy)}`)

export const getAllIncidents = () => API.get('/incident-service/api/incidents')

export const createIncident = (data) =>
  API.post('/incident-service/api/incidents', data)

// ─── Chat ─────────────────────────────────────────────────────────────────────
export const getChatMessages = () => API.get('/chat-service/api/chat/messages')

export const sendChatMessage = (data) =>
  API.post('/chat-service/api/chat/messages', data)

export const getChatByIncident = (incidentId) =>
  API.get(`/chat-service/api/chat/messages/incident/${incidentId}`)
