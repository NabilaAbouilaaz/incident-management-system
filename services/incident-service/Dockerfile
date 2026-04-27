FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /build
COPY pom.xml ./pom.xml
COPY services/incident-service/pom.xml services/incident-service/pom.xml
COPY services/incident-service/src services/incident-service/src
RUN mvn -pl services/incident-service -am clean package -DskipTests --no-transfer-progress

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /build/services/incident-service/target/*.jar app.jar
RUN mkdir -p /app/data
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "app.jar"]
