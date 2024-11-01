package com.cognizant.authenticationservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.authenticationservice.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	User findByUserNameAndActive(String username, boolean active);



}
