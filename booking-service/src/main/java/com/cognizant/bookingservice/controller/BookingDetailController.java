package com.cognizant.bookingservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.bookingservice.model.BookingDetail;
import com.cognizant.bookingservice.service.BookingDetailService;

@RestController
@RequestMapping("/booking")
public class BookingDetailController {

	@Autowired
	BookingDetailService bookingDetailService;

//	@GetMapping
//	public List<BookingDetail> getAllBookingDetails(@PathVariable long userId){
//		return bookingDetailService.getAllBookingDetails(userId);
//	}

	@GetMapping("/{id}")
	public List<BookingDetail> getAllBookingDetails(@PathVariable long id) {
		return bookingDetailService.getAllBookingDetails(id);
	}

//	@GetMapping("/{id}")
//	public BookingDetail getBookingDetail(@PathVariable long id) {
//		return bookingDetailService.getBookingDetail(id);
//	}

//	@GetMapping("/{id}")
//	public List<BookingDetail> getBookingDetails(@PathVariable long id) {
//		return bookingDetailService.getBookingDetails(id);
//	}

	@PutMapping
	public void updateBooking(@RequestBody BookingDetail bookingDetail) {
		bookingDetailService.updateBooking(bookingDetail);
	}

	@PostMapping
	public void insertBooking(@RequestBody BookingDetail bookingDetail) {
		bookingDetailService.updateBooking(bookingDetail);
	}

	@DeleteMapping("/{id}")
	public void deleteBooking(@PathVariable long id) {
		bookingDetailService.deleteBooking(id);
	}

}
