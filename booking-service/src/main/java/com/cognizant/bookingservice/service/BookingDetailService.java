package com.cognizant.bookingservice.service;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.bookingservice.model.BookingDetail;
import com.cognizant.bookingservice.model.Payment;
import com.cognizant.bookingservice.model.Transaction;
import com.cognizant.bookingservice.repository.BookingDetailRepository;
import com.cognizant.bookingservice.repository.PaymentRepository;
import com.cognizant.bookingservice.repository.TransactionRepository;

@Service
public class BookingDetailService {
	public static final Logger LOGGER = LoggerFactory.getLogger(PaymentService.class);
	@Autowired
	BookingDetailRepository bookingDetailRepository;

	@Autowired
	TransactionRepository transactionRepository;

	@Autowired
	PaymentRepository paymentRepository;

	@Transactional
	public List<BookingDetail> getAllBookingDetails(long userId) {
//		LOGGER.debug("User Id:"+userId);
//		return bookingDetailRepository.findAll();
		return bookingDetailRepository.findByUserId(userId);
	}

	@Transactional
	public BookingDetail getBookingDetail(long id) {
		return bookingDetailRepository.findById(id).get();
	}

	@Transactional
	public void updateBooking(BookingDetail bookingDetail) {
		bookingDetailRepository.save(bookingDetail);
	}

//	@Transactional
//	public List<BookingDetail> getBookingDetails(long id) {
//		return bookingDetailRepository.getBookingDetails(id);
//	}
	@Transactional
	public void deleteBooking(long bookingId) {

		System.out.println(bookingId);
		BookingDetail booking = bookingDetailRepository.findById(bookingId).get();
		System.out.println(booking);
		double transactionAmount = booking.getTotal();

		Transaction transaction = transactionRepository.findByBookingId(bookingId);
		System.out.println(transaction);
		Payment account = transaction.getPayment();
		System.out.println(account);
		double accountBalance = account.getAccountBalance();

		account.setAccountBalance(accountBalance + transactionAmount);

		Transaction deleteTransaction = transactionRepository.findByBookingIdAndPaymentId(bookingId, account.getId());
		long id = deleteTransaction.getId();
		transactionRepository.deleteById(id);

		paymentRepository.save(account);
		bookingDetailRepository.deleteById(bookingId);
	}

}
