package com.cognizant.signupservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.signupservice.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	@Query("select u from User u where u.userName=:username")
	User findByUserName(String username);

	@Query(value = "SELECT * FROM user WHERE us_active=0", nativeQuery = true)
	List<User> findByInActive();
	@Query("select u from User u where u.active=:active")
	List<User> findByActive(boolean active);
	
}
