package com.incidents.chat;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chat/messages")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @GetMapping
    public List<ChatMessage> getAllMessages() {
        return chatService.getAllMessages();
    }

    @GetMapping("/{id}")
    public ChatMessage getMessageById(@PathVariable Long id) {
        return chatService.getMessageById(id);
    }

    @GetMapping("/incident/{incidentId}")
    public List<ChatMessage> getMessagesByIncidentId(@PathVariable Long incidentId) {
        return chatService.getMessagesByIncidentId(incidentId);
    }

    @PostMapping
    public ResponseEntity<ChatMessage> createMessage(@Valid @RequestBody ChatMessage chatMessage) {
        ChatMessage createdMessage = chatService.createMessage(chatMessage);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMessage);
    }

    @PutMapping("/{id}")
    public ChatMessage updateMessage(@PathVariable Long id, @Valid @RequestBody ChatMessage chatMessage) {
        return chatService.updateMessage(id, chatMessage);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable Long id) {
        chatService.deleteMessage(id);
        return ResponseEntity.noContent().build();
    }
}