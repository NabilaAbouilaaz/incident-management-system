package com.incidents.notification;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class Notification {

    private Long id;

    @NotNull(message = "IncidentId is required")
    private Long incidentId;

    @NotBlank(message = "Recipient is required")
    private String recipient;

    @NotBlank(message = "Message is required")
    private String message;

    @NotBlank(message = "Channel is required")
    private String channel;

    @NotBlank(message = "Status is required")
    private String status;

    @NotBlank(message = "CreatedAt is required")
    private String createdAt;

    public Notification() {
    }

    public Notification(Long id, Long incidentId, String recipient, String message, String channel, String status, String createdAt) {
        this.id = id;
        this.incidentId = incidentId;
        this.recipient = recipient;
        this.message = message;
        this.channel = channel;
        this.status = status;
        this.createdAt = createdAt;
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

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getChannel() {
        return channel;
    }

    public void setChannel(String channel) {
        this.channel = channel;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}