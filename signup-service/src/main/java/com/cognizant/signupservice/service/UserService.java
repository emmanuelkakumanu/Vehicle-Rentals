package com.cognizant.signupservice.service;

import java.util.HashSet;

import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.signupservice.controller.UserController;
import com.cognizant.signupservice.exception.UserAlreadyExistsException;
import com.cognizant.signupservice.model.Role;
import com.cognizant.signupservice.model.User;
import com.cognizant.signupservice.repository.RoleRepository;
import com.cognizant.signupservice.repository.UserRepository;

@Service
public class UserService {
	public static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
	@Autowired
	UserRepository userRepository;
	@Autowired
	RoleRepository roleRepository;

	@Transactional
	public void signup(User user) throws UserAlreadyExistsException {
		User user1 = userRepository.findByUserName(user.getUserName());
		if (user1 == null) {
			String password = user.getPassword();
			user.setPassword(passwordEncoder().encode(password));
			LOGGER.debug("USER LIST" + user);
			userRepository.save(user);
		} else {
			throw new UserAlreadyExistsException();
		}
	}

	@Transactional
	public void updateUser(User user) {
		userRepository.save(user);
	}

	@Transactional
	public List<User> getAllInActiveUser() {
		return userRepository.findByInActive();
	}

	@Transactional
	public List<User> getAllActiveUser() {
		boolean active = false;
		return userRepository.findByActive(active);
	}

	@Transactional
	public User getUser(long userId) {
		return userRepository.findById(userId).get();
	}

	@Transactional
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Transactional
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
