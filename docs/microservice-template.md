# Microservice Template

## Convention

- Infra services stay local-only: `config-server`, `eureka-server`, `gateway`
- Business services use local bootstrap plus centralized runtime config
- Each business service owns one dedicated port in `config-repo/<service>.yml`
- Each business service exposes `/actuator/health` and one REST test endpoint

## Standard POM

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-config</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

## Local application.properties

```properties
spring.application.name=<service-name>
spring.config.import=configserver:http://localhost:8888
```

## config-repo/<service>.yml

```yaml
server:
  port: <service-port>

info:
  app:
    name: <service-name>
    description: <service-description>
    version: 1.0.0
```

Shared Eureka and actuator settings come from `config-repo/application.yml`.

## Java Skeleton

```java
package com.incidents.<service>;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }
}
```

```java
package com.incidents.<service>;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/<resource>")
public class TestController {

    @GetMapping("/test")
    public Map<String, String> test() {
        return Map.of(
                "service", "<service-name>",
                "status", "ok"
        );
    }
}
```

## Port Convention

- `8081`: `user-service`
- `8082`: `incident-service`
- `8083`: `comment-service`
- `8084`: `notification-service`
