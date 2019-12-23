package com.cognizant.vehicleservice.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.vehicleservice.model.Vehicle;
import com.cognizant.vehicleservice.repository.VehicleRepository;

@Service
public class VehicleService {

	@Autowired
	VehicleRepository vehicleRepository;

	@Transactional
	public List<Vehicle> getAllVehicles() {
		return vehicleRepository.findAll();
	}

	@Transactional
	public Vehicle getVehicle(long id) {
		return vehicleRepository.findById(id).get();
	}

	@Transactional
	public void updateVehicle(Vehicle vehicle) {
		vehicleRepository.save(vehicle);
	}

	@Transactional
	public void insertVehicle(Vehicle vehicle) {
		vehicleRepository.save(vehicle);
	}

	@Transactional
	public void deleteVehicle(long id) {
		vehicleRepository.deleteById(id);
	}

}
