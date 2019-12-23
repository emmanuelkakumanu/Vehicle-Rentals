package com.cognizant.authenticationservice.controller;

import java.util.List;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.authenticationservice.model.User;
import com.cognizant.authenticationservice.repository.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	UserRepository userRepository;

	@GetMapping
	public List<User> getAllUser() {
		return userRepository.findAll();
	}

//	@PostMapping
//	public void signup(@RequestBody @Valid com.cognizant.truyum.model.User user) throws UserAlreadyExistsException {
//		System.out.println(user);
//		boolean isUserExist = inMemoryUserDetailsManager.userExists(user.getUserName());
//		if (isUserExist) {
//			throw new UserAlreadyExistsException();
//		} else {
//			ArrayList<GrantedAuthority> grantedAuthoritiesList = new ArrayList<>();
//			grantedAuthoritiesList.add(new SimpleGrantedAuthority("USER"));
//			inMemoryUserDetailsManager.createUser(User.withUsername(user.getUserName())
//					.password(passwordEncoder().encode(user.getPassword())).roles("USER").build());
//		}
//	}
//
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
}
