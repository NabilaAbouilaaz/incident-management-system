package com.incidents.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserDataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;

    public UserDataInitializer(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        if (userRepository.count() == 0) {
            userRepository.save(new User(
                    null,
                    "Nabila",
                    "Abouilaaz",
                    "nabila@example.com",
                    "IT",
                    "Student"
            ));

            userRepository.save(new User(
                    null,
                    "Salma",
                    "Team",
                    "salma@example.com",
                    "Support",
                    "Technician"
            ));
        }
    }
}
