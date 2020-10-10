package com.okode.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.UUID;

@SpringBootTest
@AutoConfigureWebTestClient
class BackendApplicationTests {

	@Autowired
	WebTestClient webTestClient;

	@Test
	void greetingControllerTest() {
		final var name = UUID.randomUUID().toString();
		webTestClient.get().uri("/hello/" + name)
				.exchange()
				.expectStatus().isOk()
				.expectBody().jsonPath("$.response").isEqualTo("Hello, " + name);
	}

}
