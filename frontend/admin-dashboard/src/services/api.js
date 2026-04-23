import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080',
})

// Incidents
export const getIncidents = () => API.get('/incident-service/incidents')
export const getIncidentById = (id) => API.get(`/incident-service/incidents/${id}`)
export const updateIncident = (id, data) => API.put(`/incident-service/incidents/${id}`, data)
export const deleteIncident = (id) => API.delete(`/incident-service/incidents/${id}`)

// Users
export const getUsers = () => API.get('/user-service/users')
