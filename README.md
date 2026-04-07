# 🛠️ Incident Management System

Système de gestion des incidents avec microservices, DevOps et sécurité.

## Architecture

- **Eureka Server** (port 8761) - Service Discovery
- **Config Server** (port 8888) - Configuration Centralisée
- **API Gateway** (port 8080) - Point d'entrée unique
- **User Service** (port 8081) - Gestion utilisateurs
- **Incident Service** (port 8082) - Gestion incidents
- **Comment Service** (port 8083) - Gestion commentaires
- **Chat Service** - Chatbot IA
- **Frontend Admin** (React) - Dashboard techniciens
- **Frontend Client** (React) - Interface utilisateurs

## Démarrage
```bash
docker-compose up
```

Tous les services démarreront automatiquement !

