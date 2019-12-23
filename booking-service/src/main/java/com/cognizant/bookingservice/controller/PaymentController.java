package com.cognizant.bookingservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.bookingservice.exception.AccountNotFoundException;
import com.cognizant.bookingservice.exception.InsufficientBalance;
import com.cognizant.bookingservice.model.Payment;
import com.cognizant.bookingservice.model.PaymentDTO;
import com.cognizant.bookingservice.service.PaymentService;

@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	PaymentService paymentService;

	@GetMapping
	public List<Payment> getAllPaymentdetails() {
		return paymentService.getAllPaymentDetails();
	}

	@GetMapping("/{paymentId}")
	public Payment getPaymentdetail(@PathVariable long paymentId) {
		return paymentService.getPaymentDetail(paymentId);
	}

	@PutMapping
	public void updatePayment(@RequestBody PaymentDTO paymentDTO) throws AccountNotFoundException, InsufficientBalance {
		paymentService.updatePayment(paymentDTO);
	}

	@PostMapping
	public void insertPayment(@RequestBody PaymentDTO paymentDTO) throws AccountNotFoundException, InsufficientBalance {
		paymentService.updatePayment(paymentDTO);
	}

//	@PutMapping("/credit")
//	public void refundPayment(@RequestBody PaymentDTO paymentDTO) throws AccountNotFoundException, InsufficientBalance {
//		paymentService.refundPayment(paymentDTO);
//	}

//	@PostMapping
//	public void insertPayment(@RequestBody Payment payment) {
//		paymentService.updatePayment(payment);
//	}

}
