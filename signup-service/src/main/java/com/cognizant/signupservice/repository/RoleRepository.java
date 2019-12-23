package com.cognizant.signupservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.signupservice.model.Role;



/**
 * @author 805924
 *
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
	
}
