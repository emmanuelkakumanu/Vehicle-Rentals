package com.cognizant.bookingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.bookingservice.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
