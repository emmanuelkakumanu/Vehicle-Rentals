package com.cognizant.signupservice;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

import java.util.HashSet;
import java.util.Set;

import org.junit.Test;
import org.mockito.Mockito;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//package com.cognizant.signupservice;
//
////import org.junit.Test;
//import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.cognizant.signupservice.model.Role;
import com.cognizant.signupservice.model.User;
import com.cognizant.signupservice.repository.UserRepository;
import com.cognizant.signupservice.service.AppUserDetailsService;


//import org.springframework.test.context.junit4.SpringRunner;
//
////@RunWith(SpringRunner.class)
@SpringBootTest
public class SignupServiceApplicationTests {

	private static final Logger LOGGER = LoggerFactory.getLogger(SignupServiceApplicationTests.class);

	private User createUser() {
		User user = new User();
		user.setId(2);
		user.setPassword("pwd");

		Role role = new Role();
		role.setId(2);
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
		when(repository.findByUserName("usr1")).thenReturn(null);
		UserDetailsService service = new AppUserDetailsService(repository);
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
		when(repository.findByUserName("user")).thenReturn(createUser());
		AppUserDetailsService service = new AppUserDetailsService(repository);
		UserDetails user = service.loadUserByUsername("user");
		String expected = "pwd";
		assertEquals(expected, user.getPassword());
		LOGGER.info("End inside validUser");
	}

}
