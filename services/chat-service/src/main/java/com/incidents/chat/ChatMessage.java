package com.incidents.chat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class ChatMessage {

    private Long id;

    @NotNull(message = "IncidentId is required")
    private Long incidentId;

    @NotBlank(message = "Sender is required")
    private String sender;

    @NotBlank(message = "Message is required")
    private String message;

    @NotBlank(message = "SentAt is required")
    private String sentAt;

    public ChatMessage() {
    }

    public ChatMessage(Long id, Long incidentId, String sender, String message, String sentAt) {
        this.id = id;
        this.incidentId = incidentId;
        this.sender = sender;
        this.message = message;
        this.sentAt = sentAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIncidentId() {
        return incidentId;
    }

    public void setIncidentId(Long incidentId) {
        this.incidentId = incidentId;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getSentAt() {
        return sentAt;
    }

    public void setSentAt(String sentAt) {
        this.sentAt = sentAt;
    }
}