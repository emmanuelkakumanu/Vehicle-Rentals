package com.cognizant.bookingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.bookingservice.model.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

	@Query(value = "SELECT *FROM Transactions WHERE tr_bo_id = ?", nativeQuery = true)
	Transaction findByBookingId(long id);

	@Query(value = "SELECT * FROM Transactions WHERE tr_bo_id = ? AND tr_pa_id = ?", nativeQuery = true)
	Transaction findByBookingIdAndPaymentId(long bookingId, long paymentId);
}
