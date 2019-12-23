package com.cognizant.bookingservice.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "booking")
public class BookingDetail {

	@NotNull(message = "Id should be a number")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bo_id")
	private long id;
	@Column(name = "bo_status")
	private boolean bookingStatus;
	@Column(name = "bo_start_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date startDate;
	@Column(name = "bo_end_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date endDate;
	@Column(name = "bo_total")
	private double total;

	@OneToOne
	@JoinColumn(name = "bo_us_id")
	private User user;
	@OneToOne
	@JoinColumn(name = "bo_ve_id")
	private Vehicle vehicle;

	public BookingDetail() {
		super();
	}

	public BookingDetail(@NotNull(message = "Id should be a number") long id, boolean bookingStatus, Date startDate,
			Date endDate, double total, User user, Vehicle vehicle) {
		super();
		this.id = id;
		this.bookingStatus = bookingStatus;
		this.startDate = startDate;
		this.endDate = endDate;
		this.total = total;
		this.user = user;
		this.vehicle = vehicle;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public boolean isBookingStatus() {
		return bookingStatus;
	}

	public void setBookingStatus(boolean bookingStatus) {
		this.bookingStatus = bookingStatus;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	@Override
	public String toString() {
		return "BookingDetail [id=" + id + ", bookingStatus=" + bookingStatus + ", startDate=" + startDate
				+ ", endDate=" + endDate + ", total=" + total + ", user=" + user + ", vehicle=" + vehicle + "]";
	}

}
