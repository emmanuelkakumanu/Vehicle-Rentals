package com.cognizant.vehicleservice.model.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.vehicleservice.exception.GlobalExceptionHandler;
import com.cognizant.vehicleservice.model.Vehicle;
import com.cognizant.vehicleservice.service.VehicleService;

@RestController
@RequestMapping("/vehicles")
public class VehicleController {
	public static final Logger LOGGER = LoggerFactory.getLogger(GlobalExceptionHandler.class);
	@Autowired
	VehicleService vehicleService;

	@GetMapping
	public List<Vehicle> getAllVehicles() {
		return vehicleService.getAllVehicles();
	}

	@GetMapping("/{id}")
	public Vehicle getVehicle(@PathVariable long id) {
		return vehicleService.getVehicle(id);
	}

	@PutMapping
	public void updateVehicle(@RequestBody Vehicle vehicle) {
		vehicleService.updateVehicle(vehicle);
	}

	@PostMapping
	public void insertVehicle(@RequestBody Vehicle vehicle) {
		vehicleService.insertVehicle(vehicle);
	}

	@DeleteMapping("/{id}")
	public void deleteVehicle(@PathVariable long id) {
		vehicleService.deleteVehicle(id);
	}
}
