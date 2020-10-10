package com.okode.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.UUID;

@SpringBootTest
@AutoConfigureWebTestClient
class BackendApplicationTests {

	@Autowired
	private WebTestClient webTestClient;

	@Test
	public void greetingControllerTest() {
		final var name = UUID.randomUUID().toString();
		webTestClient.get().uri("/hello/" + name)
				.accept(MediaType.APPLICATION_JSON)
				.exchange()
				.expectStatus().isOk()
				.expectBody().jsonPath("$.response").isEqualTo("Hello, " + name);
	}

}
