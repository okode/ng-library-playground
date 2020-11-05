# Angular Library Playground

Angular Library and App Compatibility Playground.

## Backend

### Creation

Created with Spring initializr:

* Java language version 15
* Gradle project type
* Spring Boot 2.3.4
* Group: com.okode
* Package name: com.okode.backend
* Packaging: Jar
* Dependencies: Spring Reactive Web

### Running

```
./gradlew bootJar
```

### Running with Docker

```
docker build . -t backend
docker run -ti -p 8080:8080 backend
```

### Testing

Start backend and run:

```
curl -v http://localhost:8080/hello/john
```

the expected response is:

```
{ "response": "Hello, john" }
```

## Angular 10 Library

### Creation

Created with:

* Angular CLI: 10.1.4
* Node: 14.13.0

```
ng new library-ng10 --createApplication=false
cd library-ng10
ng generate library library-ng10
```

Customizations:

* Added `ngcc` command to build task in `package.json`:

```
"build": "ng build --prod && ngcc"
```

### Building

```
npm ci
ng build my-library --prod
```
