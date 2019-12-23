package com.cognizant.bookingservice.service;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.cognizant.bookingservice.exception.AccountNotFoundException;
import com.cognizant.bookingservice.exception.InsufficientBalance;
import com.cognizant.bookingservice.model.BookingDetail;
import com.cognizant.bookingservice.model.Payment;
import com.cognizant.bookingservice.model.PaymentDTO;
import com.cognizant.bookingservice.model.Transaction;
import com.cognizant.bookingservice.repository.BookingDetailRepository;
import com.cognizant.bookingservice.repository.PaymentRepository;
import com.cognizant.bookingservice.repository.TransactionRepository;

@Service
public class PaymentService {
	public static final Logger LOGGER = LoggerFactory.getLogger(PaymentService.class);
	@Autowired
	PaymentRepository paymentRepository;

	@Autowired
	BookingDetailRepository bookingDetailRepository;

	@Autowired
	TransactionRepository transactionRepository;

	@Transactional
	public List<Payment> getAllPaymentDetails() {
		return paymentRepository.findAll();
	}

	@Transactional
	public Payment getPaymentDetail(long paymentId) {
		return paymentRepository.findById(paymentId).get();
	}

	@Transactional
	public void updatePayment(PaymentDTO paymentDTO) throws AccountNotFoundException, InsufficientBalance {
		LOGGER.debug("PAyment DTO: " + paymentDTO);
		BookingDetail booking = paymentDTO.getBookingDetail();
		Payment account = paymentDTO.getPayment();
		long cardNumber = account.getCardNumber();
		Payment existingAccount = paymentRepository.findByCardNumber(cardNumber);
		if (existingAccount == null) {
			throw new AccountNotFoundException();
		} else {
			double balance = booking.getTotal();
			double existingBalance = existingAccount.getAccountBalance();
			if (existingBalance >= balance) {
				existingBalance = existingBalance - balance;
				existingAccount.setAccountBalance(existingBalance);
				paymentRepository.save(existingAccount);
				BookingDetail newBooking = bookingDetailRepository.getBookingDetail(booking.getUser().getId(),
						booking.getVehicle().getId(), booking.getStartDate(), booking.getEndDate());
				Transaction transactions = new Transaction();
				transactions.setPayment(existingAccount);
				transactions.setBooking(newBooking);
				transactionRepository.save(transactions);
			} else {
				throw new InsufficientBalance();
			}
		}
	}

//	@Transactional
//	public void refundPayment(PaymentDTO paymentDTO) throws AccountNotFoundException, InsufficientBalance {
//		Payment account = paymentDTO.getPayment();
//		long cardNumber = account.getCardNumber();
//		Payment existingAccount = paymentRepository.findByCardNumber(cardNumber);
//		if (existingAccount == null) {
//			throw new AccountNotFoundException();
//		} else {
//			double balance = paymentDTO.getTotal();
//			double existingBalance = existingAccount.getAccountBalance();
//			existingBalance = existingBalance + balance;
//			existingAccount.setAccountBalance(existingBalance);
//			paymentRepository.save(existingAccount);
//		}
//	}
}
