package com.cognizant.authenticationservice;

import static org.junit.Assert.assertEquals;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.HashSet;
import java.util.Set;

//import org.junit.Test;
import static org.mockito.Mockito.when;
//import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.cognizant.authenticationservice.model.Role;
import com.cognizant.authenticationservice.model.User;
import com.cognizant.authenticationservice.repository.UserRepository;
import com.cognizant.authenticationservice.service.AppUserDetailsService;

//@RunWith(SpringRunner.class)
@SpringBootTest
public class AuthenticationServiceApplicationTests {

//	@Test
	public void contextLoads() {
	}

	private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationServiceApplicationTests.class);

	private User createUser() {
		User user = new User();
		user.setId(1);
		user.setPassword("pwd");

		Role role = new Role();
		role.setId(1);
		role.setName("USER");
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		user.setRoleList(roles);

		return user;
	}

//	@Test
	public void userNotFound() {
		LOGGER.info("Start inside userNotFound");
		UserRepository repository = Mockito.mock(UserRepository.class);
		when(repository.findByUserNameAndActive("usr1", true)).thenReturn(null);
		AppUserDetailsService service = new AppUserDetailsService(repository);
		try {
			UserDetails user = service.loadUserByUsername("usr1");
			LOGGER.debug("user:{}", user);
		} catch (UsernameNotFoundException exception) {
			LOGGER.error("User not found", exception);
			assertTrue(true);
			return;
		}
		assertFalse(true);
		LOGGER.info("End inside userNotFound");
	}

//	@Test
	public void validUser() {
		LOGGER.info("Start inside validUser");
		UserRepository repository = Mockito.mock(UserRepository.class);
		when(repository.findByUserNameAndActive("user", true)).thenReturn(createUser());
		AppUserDetailsService service = new AppUserDetailsService(repository);
		UserDetails user = service.loadUserByUsername("user");
		String expected = "pwd";
		assertEquals(expected, user.getPassword());
		LOGGER.info("End inside validUser");
	}
}
