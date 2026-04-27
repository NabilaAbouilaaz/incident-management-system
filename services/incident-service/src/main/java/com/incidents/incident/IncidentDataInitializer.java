package com.incidents.incident;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class IncidentDataInitializer implements CommandLineRunner {

    private final IncidentRepository incidentRepository;

    public IncidentDataInitializer(IncidentRepository incidentRepository) {
        this.incidentRepository = incidentRepository;
    }

    @Override
    public void run(String... args) {
        if (incidentRepository.count() == 0) {
            incidentRepository.save(new Incident(
                    null,
                    "Printer not working",
                    "The office printer does not print any document",
                    "NEW",
                    "MEDIUM",
                    "Technician A",
                    "user1@example.com"
            ));

            incidentRepository.save(new Incident(
                    null,
                    "Internet connection lost",
                    "No internet access in room B12",
                    "IN_PROGRESS",
                    "HIGH",
                    "Technician B",
                    "user1@example.com"
            ));

            incidentRepository.save(new Incident(
                    null,
                    "Screen flickering",
                    "Monitor flickers every few minutes",
                    "NEW",
                    "LOW",
                    "Technician A",
                    "user2@example.com"
            ));
        }
    }
}