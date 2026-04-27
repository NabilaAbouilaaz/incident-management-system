package com.incidents.gateway;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class FallbackController {

    @GetMapping("/fallback/config")
    public Map<String, String> configFallback() {
        return Map.of(
                "message", "Config Server temporairement indisponible",
                "status", "fallback"
        );
    }
}
