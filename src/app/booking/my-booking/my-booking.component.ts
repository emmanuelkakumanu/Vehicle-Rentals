import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { Booking } from 'src/app/service/Booking';
import { Payment } from 'src/app/service/Payment';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

  constructor(private bookingService: BookingService, private userAuthService: UserAuthService) { }
  bookings: Booking[];
  bookingCancel: boolean;
  bookingTotal: number;
  bookingId: number;
  msg: boolean;
  payment: Payment;
  ngOnInit() {
    this.bookingService.getBookingDetail(this.userAuthService.getId()).subscribe((data) => {
      if (data) {
        console.log(data);
        this.bookings = data;
        this.payment = this.bookingService.getPaymentDetail();
       // console.log(this.payment);
      }
    });
  }
  onCancelling(booking: Booking) {
    this.bookingCancel = true;
    this.bookingId = booking.id;
    this.bookingTotal = booking.total;
   // console.log("booking id: ",booking.id);
    this.bookingService.deleteBooking(booking.id).subscribe(data => {
      this.bookings = data;
      this.msg = true;
      setTimeout(() => {
        this.msg = false;
      }, 1000);
      this.ngOnInit();
    });


  }

}
