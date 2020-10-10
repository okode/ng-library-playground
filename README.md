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
* Dependencies: Spring Reactive Web, Lombok

### Running

```
./gradlew bootJar
```

### Running with Docker

```
docker build . -t backend
docker run -ti -p 8080:8080 backend
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

### Building

```
npm ci
ng build my-library --prod
```

## Angular 5 Application

### Creation

* Angular CLI: 1.7.4
* Node: 14.3.0

```
ng new app-ng5
```

## Angular 6 Application

### Creation

* Angular CLI: 6.2.9
* Node: 14.3.0

```
ng new app-ng6
```

## Angular 8 Application

### Creation

* Angular CLI: 8.3.29
* Node: 14.3.0

```
ng new app-ng8
```

## Angular 9 Application

### Creation

* Angular CLI: 9.1.12
* Node: 14.3.0

```
ng new app-ng9
```

## Angular 10 Application

### Creation

* Angular CLI: 10.1.4
* Node: 14.3.0

```
ng new app-ng10
```
