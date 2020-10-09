package com.okode.backend.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class GreetingController {

    @GetMapping("/hello/{name}")
    Object hello(@PathVariable String name) {
        return new Object() { public final String response = "Hello, " + name; };
    }

}
