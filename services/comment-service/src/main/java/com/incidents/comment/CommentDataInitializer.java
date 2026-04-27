package com.incidents.comment;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CommentDataInitializer implements CommandLineRunner {

    private final CommentRepository commentRepository;

    public CommentDataInitializer(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public void run(String... args) {
        if (commentRepository.count() == 0) {
            commentRepository.save(new Comment(
                    null,
                    1L,
                    "Nabila",
                    "Printer issue reported and under review",
                    "2026-04-25 10:00"
            ));

            commentRepository.save(new Comment(
                    null,
                    2L,
                    "Technician B",
                    "Network issue is being investigated",
                    "2026-04-25 10:15"
            ));
        }
    }
}