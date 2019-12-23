package com.cognizant.bookingservice.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "payment_account")
public class Payment {
	@NotNull(message = "Id should be a number")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pa_id")
	private long id;

	@Column(name = "pa_card_number")
	private long cardNumber;

	@Column(name = "pa_cvv_number")
	private long cvvNumber;

	@Column(name = "pa_card_expiry_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date expiryDate;

	@Column(name = "pa_bank")
	private String bank;

	@Column(name = "pa_card_holder_name")
	private String holderName;

	@Column(name = "pa_account_balance")
	private double accountBalance;

	public Payment() {
		super();
	}

	public Payment(@NotNull(message = "Id should be a number") long id, long cardNumber, long cvvNumber,
			Date expiryDate, String bank, String holderName, double accountBalance) {
		super();
		this.id = id;
		this.cardNumber = cardNumber;
		this.cvvNumber = cvvNumber;
		this.expiryDate = expiryDate;
		this.bank = bank;
		this.holderName = holderName;
		this.accountBalance = accountBalance;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(long cardNumber) {
		this.cardNumber = cardNumber;
	}

	public long getCvvNumber() {
		return cvvNumber;
	}

	public void setCvvNumber(long cvvNumber) {
		this.cvvNumber = cvvNumber;
	}

	public Date getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}

	public String getBank() {
		return bank;
	}

	public void setBank(String bank) {
		this.bank = bank;
	}

	public String getHolderName() {
		return holderName;
	}

	public void setHolderName(String holderName) {
		this.holderName = holderName;
	}

	public double getAccountBalance() {
		return accountBalance;
	}

	public void setAccountBalance(double accountBalance) {
		this.accountBalance = accountBalance;
	}

	@Override
	public String toString() {
		return "Payment [id=" + id + ", cardNumber=" + cardNumber + ", cvvNumber=" + cvvNumber + ", expiryDate="
				+ expiryDate + ", bank=" + bank + ", holderName=" + holderName + ", accountBalance=" + accountBalance
				+ "]";
	}

}
