package com.cognizant.bookingservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Insufficient Balance Exception")
public class InsufficientBalance extends Exception {

}
