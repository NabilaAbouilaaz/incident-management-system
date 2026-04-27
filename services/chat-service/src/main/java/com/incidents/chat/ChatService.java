package com.incidents.chat;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class ChatService {

    private final List<ChatMessage> messages = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong(4);

    public ChatService() {
        messages.add(new ChatMessage(
                1L,
                1L,
                "Nabila",
                "Bonjour, je signale un problème avec l'imprimante.",
                "2026-04-25 12:00"
        ));

        messages.add(new ChatMessage(
                2L,
                1L,
                "Technician A",
                "Merci, je vais vérifier l'incident.",
                "2026-04-25 12:05"
        ));

        messages.add(new ChatMessage(
                3L,
                2L,
                "Technician B",
                "Le problème réseau est en cours de diagnostic.",
                "2026-04-25 12:10"
        ));
    }

    public List<ChatMessage> getAllMessages() {
        return messages;
    }

    public ChatMessage getMessageById(Long id) {
        return messages.stream()
                .filter(message -> message.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new ChatMessageNotFoundException(id));
    }

    public List<ChatMessage> getMessagesByIncidentId(Long incidentId) {
        return messages.stream()
                .filter(message -> message.getIncidentId().equals(incidentId))
                .toList();
    }

    public ChatMessage createMessage(ChatMessage chatMessage) {
        ChatMessage newMessage = new ChatMessage(
                counter.getAndIncrement(),
                chatMessage.getIncidentId(),
                chatMessage.getSender(),
                chatMessage.getMessage(),
                chatMessage.getSentAt()
        );

        messages.add(newMessage);
        return newMessage;
    }

    public ChatMessage updateMessage(Long id, ChatMessage updatedMessage) {
        ChatMessage message = getMessageById(id);

        message.setIncidentId(updatedMessage.getIncidentId());
        message.setSender(updatedMessage.getSender());
        message.setMessage(updatedMessage.getMessage());
        message.setSentAt(updatedMessage.getSentAt());

        return message;
    }

    public void deleteMessage(Long id) {
        ChatMessage message = getMessageById(id);
        messages.remove(message);
    }
}