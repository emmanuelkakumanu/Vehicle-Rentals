package com.cognizant.bookingservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "transactions")
public class Transaction {
	@Id
	@Column(name = "tr_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@OneToOne
	@JoinColumn(name = "tr_bo_id")
	private BookingDetail booking;
	@OneToOne
	@JoinColumn(name = "tr_pa_id")
	private Payment payment;

	public Transaction() {
		super();
	}

	public Transaction(long id, BookingDetail booking, Payment payment) {
		super();
		this.id = id;
		this.booking = booking;
		this.payment = payment;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public BookingDetail getBooking() {
		return booking;
	}

	public void setBooking(BookingDetail booking) {
		this.booking = booking;
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	@Override
	public String toString() {
		return "Transaction [id=" + id + ", booking=" + booking + ", payment=" + payment + "]";
	}

}
