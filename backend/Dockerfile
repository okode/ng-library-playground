FROM openjdk:15 as build

COPY . /src/
RUN cd /src && ./gradlew bootJar

FROM openjdk:15

COPY --from=build /src/build/libs/backend.jar /backend/
EXPOSE 8080
CMD /backend/backend.jar
