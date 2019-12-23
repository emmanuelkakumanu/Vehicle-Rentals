package com.cognizant.vehicleservice.model;

import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author 805924
 *
 */
@Entity
@Table(name = "vehicle")
public class Vehicle {

	@Id
	@Column(name = "ve_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "ve_name")
	private String name;
	@Column(name = "ve_model")
	private String model;
	@Column(name = "ve_number")
	private String number;
	@Column(name = "ve_year_of_manufacturing")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy")
	private Date yearOfManufacture;
	@Column(name = "ve_insurance_renewal_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	private Date insuranceRenewalDate;
	@Column(name = "ve_last_service_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	private Date lastServiceDate;
	@Column(name = "ve_next_service_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	private Date nextServiceDate;
	@Column(name = "ve_seater")
	private int seater;
	@Column(name = "ve_type_of_vehicle")
	private String vehicleType;
	@Column(name = "ve_image_url")
	private String imageUrl;
	@Column(name = "ve_mileage")
	private double mileage;
	@Column(name = "ve_rent")
	private double rent;

	public Vehicle() {
		super();
	}

	public Vehicle(long id, String name, String model, String number, Date yearOfManufacture, Date insuranceRenewalDate,
			Date lastServiceDate, Date nextServiceDate, int seater, String vehicleType, String imageUrl, double mileage,
			double rent) {
		super();
		this.id = id;
		this.name = name;
		this.model = model;
		this.number = number;
		this.yearOfManufacture = yearOfManufacture;
		this.insuranceRenewalDate = insuranceRenewalDate;
		this.lastServiceDate = lastServiceDate;
		this.nextServiceDate = nextServiceDate;
		this.seater = seater;
		this.vehicleType = vehicleType;
		this.imageUrl = imageUrl;
		this.mileage = mileage;
		this.rent = rent;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Date getYearOfManufacture() {
		return yearOfManufacture;
	}

	public void setYearOfManufacture(Date yearOfManufacture) {
		this.yearOfManufacture = yearOfManufacture;
	}

	public Date getInsuranceRenewalDate() {
		return insuranceRenewalDate;
	}

	public void setInsuranceRenewalDate(Date insuranceRenewalDate) {
		this.insuranceRenewalDate = insuranceRenewalDate;
	}

	public Date getLastServiceDate() {
		return lastServiceDate;
	}

	public void setLastServiceDate(Date lastServiceDate) {
		this.lastServiceDate = lastServiceDate;
	}

	public Date getNextServiceDate() {
		return nextServiceDate;
	}

	public void setNextServiceDate(Date nextServiceDate) {
		this.nextServiceDate = nextServiceDate;
	}

	public int getSeater() {
		return seater;
	}

	public void setSeater(int seater) {
		this.seater = seater;
	}

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public double getMileage() {
		return mileage;
	}

	public void setMileage(double mileage) {
		this.mileage = mileage;
	}

	public double getRent() {
		return rent;
	}

	public void setRent(double rent) {
		this.rent = rent;
	}

	@Override
	public String toString() {
		return "Vehicle [id=" + id + ", name=" + name + ", model=" + model + ", number=" + number
				+ ", yearOfManufacture=" + yearOfManufacture + ", insuranceRenewalDate=" + insuranceRenewalDate
				+ ", lastServiceDate=" + lastServiceDate + ", nextServiceDate=" + nextServiceDate + ", seater=" + seater
				+ ", vehicleType=" + vehicleType + ", imageUrl=" + imageUrl + ", mileage=" + mileage + ", rent=" + rent
				+ "]";
	}

}
