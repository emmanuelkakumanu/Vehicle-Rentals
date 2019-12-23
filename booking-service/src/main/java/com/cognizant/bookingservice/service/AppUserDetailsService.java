package com.cognizant.bookingservice.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cognizant.bookingservice.model.User;
import com.cognizant.bookingservice.repository.UserRepository;
import com.cognizant.bookingservice.security.AppUser;

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
