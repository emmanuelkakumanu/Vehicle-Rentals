package com.cognizant.authenticationservice.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cognizant.authenticationservice.model.User;
import com.cognizant.authenticationservice.repository.UserRepository;
import com.cognizant.authenticationservice.security.AppUser;

@Service
public class AppUserDetailsService implements UserDetailsService {
	@Autowired
	UserRepository userRepository;

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		User user = userRepository.findByUserNameAndActive(username, true);
		if (user == null) {
			throw new UsernameNotFoundException(username);
		} else {
			AppUser usr = new AppUser(user);
			return usr;
		}

	}

}
