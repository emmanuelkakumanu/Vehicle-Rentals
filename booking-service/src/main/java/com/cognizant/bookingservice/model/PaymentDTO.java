package com.cognizant.bookingservice.model;

public class PaymentDTO {

	private BookingDetail bookingDetail;
	private Payment payment;

	public PaymentDTO(BookingDetail bookingDetail, Payment payment) {
		super();
		this.bookingDetail = bookingDetail;
		this.payment = payment;
	}

	public BookingDetail getBookingDetail() {
		return bookingDetail;
	}

	public void setBookingDetail(BookingDetail bookingDetail) {
		this.bookingDetail = bookingDetail;
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	@Override
	public String toString() {
		return "PaymentDTO [bookingDetail=" + bookingDetail + ", payment=" + payment + "]";
	}

}
