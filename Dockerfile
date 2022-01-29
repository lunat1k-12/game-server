FROM openjdk:11

COPY ./ /
RUN ./mvnw clean install
ENTRYPOINT ["java","-jar","target/game-server-0.0.1-SNAPSHOT.jar"]