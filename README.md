# Incident Management System

## Project Description

This project is a microservices-based Incident Management System built with Spring Boot and React.

The system allows users to:
- Create and manage incidents (tickets)
- Add comments to incidents
- Upload files (screenshots, documents)
- Authenticate securely using Keycloak
- Interact with a chatbot for assistance

The application follows a modern microservices architecture with centralized configuration and service discovery.

---

## Technologies Used

Backend:
- Spring Boot
- Spring Cloud (Eureka, Config, Gateway)
- Spring Security
- Keycloak
- PostgreSQL
- MinIO
- Docker

Frontend:
- React
- WebSocket

---

## Project Structure

incident-management-system/
│
├── services/
├── frontend/
├── config-repo/
├── docker-compose.yml
├── .gitignore
└── README.md

---

## Security

Authentication and authorization are managed using Keycloak.
JWT tokens are used to secure API endpoints.

---

## Deployment

To start the project using Docker:

docker-compose up

---

## Team

- Nabila
- Salma
