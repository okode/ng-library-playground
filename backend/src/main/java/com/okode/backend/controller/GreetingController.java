package com.okode.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class GreetingController {

    @GetMapping("/greeting/{name}")
    Object greeting(@PathVariable String name) {
        return new Object() { public final String response = "Hello, " + name; };
    }

}
