import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080',
})

export const getMyIncidents = (userId) =>
  API.get(`/incident-service/incidents/user/${userId}`)

export const createIncident = (data) =>
  API.post('/incident-service/incidents', data)

export const sendChatMessage = (data) =>
  API.post('/chat-service/messages', data)