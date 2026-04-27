import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080',
})

// ─── Incidents ────────────────────────────────────────────────────────────────
export const getIncidents = () => API.get('/incident-service/api/incidents')
export const getIncidentById = (id) => API.get(`/incident-service/api/incidents/${id}`)
export const createIncident = (data) => API.post('/incident-service/api/incidents', data)
export const updateIncident = (id, data) => API.put(`/incident-service/api/incidents/${id}`, data)
export const deleteIncident = (id) => API.delete(`/incident-service/api/incidents/${id}`)

// ─── Users ────────────────────────────────────────────────────────────────────
export const getUsers = () => API.get('/user-service/api/users')
export const getUserById = (id) => API.get(`/user-service/api/users/${id}`)
export const createUser = (data) => API.post('/user-service/api/users', data)
export const updateUser = (id, data) => API.put(`/user-service/api/users/${id}`, data)
export const deleteUser = (id) => API.delete(`/user-service/api/users/${id}`)

// ─── Comments ─────────────────────────────────────────────────────────────────
export const getCommentsByIncident = (incidentId) =>
  API.get(`/comment-service/api/comments/incident/${incidentId}`)
export const createComment = (data) => API.post('/comment-service/api/comments', data)
