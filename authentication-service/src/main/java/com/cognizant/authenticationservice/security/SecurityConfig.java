package com.cognizant.authenticationservice.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.cognizant.authenticationservice.service.AppUserDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	public static final Logger LOGGER = LoggerFactory.getLogger(SecurityConfig.class);
	@Autowired
	AppUserDetailsService appUserDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.inMemoryAuthentication().withUser("admin").password(passwordEncoder().encode("pwd")).roles("ADMIN").and()
//				.withUser("user").password(passwordEncoder().encode("pwd")).roles("USER");
		auth.userDetailsService(appUserDetailsService).passwordEncoder(passwordEncoder());
//		auth.userDetailsService(inMemoryUserDetailsManager());
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		LOGGER.info("Start encoding");
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.cors();
		httpSecurity.csrf().disable().httpBasic().and().authorizeRequests().antMatchers("/authenticate").permitAll()
//		.antMatchers("/users").anonymous()
				.anyRequest().authenticated();
//				.and().addFilter(new JwtAuthorizationFilter(authenticationManager()));
	}
}
