package com.cognizant.signupservice;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
//@EnableEurekaClient
public class SignupServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SignupServiceApplication.class, args);
	}

}
