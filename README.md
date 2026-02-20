# Incident Management System

## Overview

This project is a complete Incident Management System developed using a microservices architecture.  
It is designed to help organizations manage, track, and resolve technical incidents efficiently.

The system follows the requirements of the ENSA BM project specification (2026) and implements modern cloud-native and DevOps practices.

It provides secure access, scalable services, centralized configuration, containerized deployment, and intelligent user assistance through a chatbot.

---

## Objectives

The main objectives of this project are:

- Implement a robust microservices-based architecture.
- Provide secure authentication and authorization.
- Ensure high availability and fault tolerance.
- Facilitate incident tracking and resolution.
- Offer a modern and user-friendly interface.
- Automate deployment using containers.
- Integrate intelligent assistance using AI technologies.

---

## Functional Features

### User Management
- User registration and profile management.
- Synchronization with Keycloak.
- Avatar upload and storage.
- User activity tracking.

### Incident Management
- Create, update, and delete incidents.
- Priority and status management.
- Assignment to technicians.
- Screenshot and file attachments.
- Complete lifecycle tracking.

### Comment System
- Add comments to incidents.
- Maintain discussion history.
- Support attachments in comments.

### Intelligent Chatbot
- Interactive problem analysis.
- Search for similar resolved incidents.
- Suggest automated solutions.
- Create incidents when necessary.
- Maintain conversation history.
- Real-time communication using WebSocket.

### Security
- Authentication with Keycloak.
- JWT-based authorization.
- Role-based access control.
- Secure API endpoints.

---

## Technical Architecture

The system follows a distributed microservices architecture composed of:

- Service Discovery using Eureka.
- Centralized Configuration using Spring Cloud Config.
- API Gateway using Spring Cloud Gateway.
- Load balancing and routing.
- Circuit breaker and resilience mechanisms (Resilience4j).
- Health monitoring using Spring Boot Actuator.

---

## Microservices

### Backend Services
- eureka-server: Service registry and discovery.
- config-server: Centralized configuration management.
- gateway-service: API routing and security gateway.
- user-service: User profiles and synchronization.
- incident-service: Incident lifecycle management.
- comment-service: Comments and attachments.
- chat-service: Chatbot and WebSocket communication.
- notification-service: Basic notification service.

### Frontend Applications
- admin-dashboard: Technician and administrator interface.
- client-app: End-user interface.

---

## Technologies Used

### Backend
- Java / Spring Boot
- Spring Cloud (Eureka, Config, Gateway)
- Spring Security
- Keycloak
- PostgreSQL
- MinIO
- Spring AI
- WebSocket

### Frontend
- React
- Axios
- WebSocket

### DevOps
- Docker
- Docker Compose
- GitHub

---

## Configuration Management

The project uses Spring Cloud Config with a dedicated configuration repository.

Multiple environments are supported:
- Development (dev)
- Testing (test)
- Production (prod)

Each service loads its configuration dynamically at startup.

---

## Deployment

Each microservice is containerized using Docker.

A global docker-compose.yml file is used to start:

- All backend services
- PostgreSQL database
- MinIO storage
- Keycloak authentication server

To run the platform:

docker-compose up

---

## Repository Structure

incident-management-system/
├── services/
│   ├── eureka-server/
│   ├── config-server/
│   ├── gateway-service/
│   ├── user-service/
│   ├── incident-service/
│   ├── comment-service/
│   ├── chat-service/
│   └── notification-service/
├── frontend/
│   ├── admin-dashboard/
│   └── client-app/
├── config-repo/
├── docker-compose.yml
├── .gitignore
└── README.md

---

## Development Practices

- Version control with Git and GitHub.
- Branching strategy: main, develop, feature/*.
- Atomic and descriptive commits.
- Code reviews through pull requests.
- Documentation updated continuously.

---

## Documentation

The project documentation includes:

- System architecture diagrams.
- Installation guide.
- User guide.
- Security configuration.
- Deployment instructions.
- Test scenarios.

All documents are provided in the final delivery.

---

## Team

- Nabila
- Salma

---

