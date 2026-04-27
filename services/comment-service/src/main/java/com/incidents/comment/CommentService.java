package com.incidents.comment;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public Comment getCommentById(Long id) {
        return commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundException(id));
    }

    public List<Comment> getCommentsByIncidentId(Long incidentId) {
        return commentRepository.findByIncidentId(incidentId);
    }

    public Comment createComment(Comment comment) {
        comment.setId(null);
        return commentRepository.save(comment);
    }

    public Comment updateComment(Long id, Comment updatedComment) {
        Comment comment = getCommentById(id);

        comment.setIncidentId(updatedComment.getIncidentId());
        comment.setAuthor(updatedComment.getAuthor());
        comment.setContent(updatedComment.getContent());
        comment.setCreatedAt(updatedComment.getCreatedAt());

        return commentRepository.save(comment);
    }

    public void deleteComment(Long id) {
        Comment comment = getCommentById(id);
        commentRepository.delete(comment);
    }
}