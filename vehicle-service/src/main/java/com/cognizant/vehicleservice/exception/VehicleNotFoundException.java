package com.cognizant.vehicleservice.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Vehicle Not Found Exception")
public class VehicleNotFoundException extends Exception {

}
