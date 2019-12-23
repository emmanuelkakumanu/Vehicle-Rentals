package com.cognizant.vehicleservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.vehicleservice.model.User;
import com.cognizant.vehicleservice.model.Vehicle;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long>  {

}
