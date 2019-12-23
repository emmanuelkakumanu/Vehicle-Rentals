package com.cognizant.signupservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cognizant.signupservice.model.User;
import com.cognizant.signupservice.repository.UserRepository;
import com.cognizant.signupservice.security.AppUser;



/**
 * @author 805924
 *
 */
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

		User user = userRepository.findByUserName(username);

		if (user == null) {
			throw new UsernameNotFoundException(username);
		} else {
			AppUser usr = new AppUser(user);
			return usr;
		}

	}

}
