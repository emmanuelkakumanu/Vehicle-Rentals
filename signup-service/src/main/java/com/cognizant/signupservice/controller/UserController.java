package com.cognizant.signupservice.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.signupservice.exception.UserAlreadyExistsException;
import com.cognizant.signupservice.model.User;
import com.cognizant.signupservice.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	public static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
	@Autowired
	UserService userService;

	@PostMapping
	public void signup(@RequestBody @Valid User user) throws UserAlreadyExistsException {
		LOGGER.debug("Role" + user.getRoleList());
		System.out.println();
		userService.signup(user);
		
	}

//	@GetMapping
//	public List<User> getAllUsers(){
//		return userService.getAllUsers();
//	}

//	@GetMapping
//	public List<User> getAllInActiveUser(){
//		return userService.getAllInActiveUser();
//	}

	@GetMapping
	public List<User> getAllActiveUser() {
		return userService.getAllActiveUser();
	}

	@GetMapping("/{userId}")
	public User getUser(@PathVariable long userId) {
		return userService.getUser(userId);
	}

	@PutMapping
	public void updateUser(@RequestBody User user) {
		userService.updateUser(user);
	}

}
