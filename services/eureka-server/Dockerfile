FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /build
# Copy parent pom
COPY pom.xml ./pom.xml
# Copy only this module
COPY services/eureka-server/pom.xml services/eureka-server/pom.xml
COPY services/eureka-server/src services/eureka-server/src
# Build only this module
RUN mvn -pl services/eureka-server -am clean package -DskipTests --no-transfer-progress

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /build/services/eureka-server/target/*.jar app.jar
EXPOSE 8761
ENTRYPOINT ["java", "-jar", "app.jar"]
