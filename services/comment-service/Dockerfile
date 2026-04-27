FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /build
COPY pom.xml ./pom.xml
COPY services/comment-service/pom.xml services/comment-service/pom.xml
COPY services/comment-service/src services/comment-service/src
RUN mvn -pl services/comment-service -am clean package -DskipTests --no-transfer-progress

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /build/services/comment-service/target/*.jar app.jar
RUN mkdir -p /app/data
EXPOSE 8083
ENTRYPOINT ["java", "-jar", "app.jar"]
