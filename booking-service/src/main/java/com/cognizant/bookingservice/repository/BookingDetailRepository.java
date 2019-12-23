package com.cognizant.bookingservice.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.bookingservice.model.BookingDetail;
import com.cognizant.bookingservice.model.Vehicle;

@Repository
public interface BookingDetailRepository extends JpaRepository<BookingDetail, Long> {

	@Query(value = "SELECT * FROM booking WHERE bo_us_id=?", nativeQuery = true)
	List<BookingDetail> findByUserId(long id);

	@Query(value = "SELECT * FROM booking where bo_us_id=? AND bo_ve_id=? AND bo_start_date=? AND bo_end_date=? ", nativeQuery = true)
	public BookingDetail getBookingDetail(long userId, long vehicleId, Date startDate, Date EndDate);
}
