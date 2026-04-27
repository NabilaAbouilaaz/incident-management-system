package com.incidents.incident;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncidentService {

    private final IncidentRepository incidentRepository;

    public IncidentService(IncidentRepository incidentRepository) {
        this.incidentRepository = incidentRepository;
    }

    public List<Incident> getAllIncidents() {
        return incidentRepository.findAll();
    }

    public List<Incident> getIncidentsByUser(String createdBy) {
        return incidentRepository.findByCreatedBy(createdBy);
    }

    public Incident getIncidentById(Long id) {
        return incidentRepository.findById(id)
                .orElseThrow(() -> new IncidentNotFoundException(id));
    }

    public Incident createIncident(Incident incident) {
        incident.setId(null);
        return incidentRepository.save(incident);
    }

    public Incident updateIncident(Long id, Incident updatedIncident) {
        Incident incident = getIncidentById(id);

        incident.setTitle(updatedIncident.getTitle());
        incident.setDescription(updatedIncident.getDescription());
        incident.setStatus(updatedIncident.getStatus());
        incident.setPriority(updatedIncident.getPriority());
        incident.setAssignedTo(updatedIncident.getAssignedTo());
        if (updatedIncident.getCreatedBy() != null) {
            incident.setCreatedBy(updatedIncident.getCreatedBy());
        }

        return incidentRepository.save(incident);
    }

    public void deleteIncident(Long id) {
        Incident incident = getIncidentById(id);
        incidentRepository.delete(incident);
    }
}