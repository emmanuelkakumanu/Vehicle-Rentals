package com.cognizant.vehicleservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.vehicleservice.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	@Query("select u from User u where u.active=:active and u.userName=:username ")
	User findByUserNameAndActive(String username, boolean active);

}
