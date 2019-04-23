package com.sprangular.server;

import com.sprangular.server.model.User;
import com.sprangular.server.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.util.ResourceUtils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@SpringBootApplication(scanBasePackages = {"com.sprangular.server"})
@EnableJpaRepositories
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
    
    @Bean
    CommandLineRunner runner(UserRepository userRepository) {
	    return args -> {
            userRepository.deleteAll();
            for (int i = 0; i < 100; i++) {
                User user = new User();
                user.setFirstName("first" + i);
                user.setLastName("last" + i);
                user.setAccountNonExpired(true);
                user.setAccountNonLocked(true);
                user.setCredentialsNonExpired(true);
                user.setEnabled(true);
                user.setPassword("pass" + i);
                user.setUsername("user" + i + "@email.com");
                user.setUuid(UUID.randomUUID());
                userRepository.save(user);
            }
        };
    }
}
