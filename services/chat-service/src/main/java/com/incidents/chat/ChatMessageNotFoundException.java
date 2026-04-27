package com.incidents.chat;

public class ChatMessageNotFoundException extends RuntimeException {

    public ChatMessageNotFoundException(Long id) {
        super("Chat message with id " + id + " not found");
    }
}
