package com.incidents.notification;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class NotificationService {

    private final List<Notification> notifications = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong(3);

    public NotificationService() {
        notifications.add(new Notification(
                1L,
                1L,
                "nabila@example.com",
                "A new incident has been assigned to you",
                "EMAIL",
                "SENT",
                "2026-04-25 11:00"
        ));

        notifications.add(new Notification(
                2L,
                2L,
                "tech.b@example.com",
                "Incident priority updated to HIGH",
                "SMS",
                "PENDING",
                "2026-04-25 11:10"
        ));
    }

    public List<Notification> getAllNotifications() {
        return notifications;
    }

    public Notification getNotificationById(Long id) {
        return notifications.stream()
                .filter(notification -> notification.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new NotificationNotFoundException(id));
    }

    public List<Notification> getNotificationsByIncidentId(Long incidentId) {
        return notifications.stream()
                .filter(notification -> notification.getIncidentId().equals(incidentId))
                .toList();
    }

    public Notification createNotification(Notification notification) {
        Notification newNotification = new Notification(
                counter.getAndIncrement(),
                notification.getIncidentId(),
                notification.getRecipient(),
                notification.getMessage(),
                notification.getChannel(),
                notification.getStatus(),
                notification.getCreatedAt()
        );

        notifications.add(newNotification);
        return newNotification;
    }

    public Notification updateNotification(Long id, Notification updatedNotification) {
        Notification notification = getNotificationById(id);

        notification.setIncidentId(updatedNotification.getIncidentId());
        notification.setRecipient(updatedNotification.getRecipient());
        notification.setMessage(updatedNotification.getMessage());
        notification.setChannel(updatedNotification.getChannel());
        notification.setStatus(updatedNotification.getStatus());
        notification.setCreatedAt(updatedNotification.getCreatedAt());

        return notification;
    }

    public void deleteNotification(Long id) {
        Notification notification = getNotificationById(id);
        notifications.remove(notification);
    }
}