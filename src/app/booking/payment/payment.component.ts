import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/service/Payment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookingService } from 'src/app/service/booking.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Booking } from 'src/app/service/Booking';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: Payment;
  paymentForm: FormGroup;
  error: string;
  total: number;
  booking: Booking;
  bookings: Booking[];
  saved: boolean;
  constructor(private fb: FormBuilder, private bookingService: BookingService, private router: Router, private route: ActivatedRoute, private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      id: [],
      cardNumber: [, Validators.required],
      cvvNumber: [, Validators.required],
      expiryDate: [, Validators.required],
      total:[]
    });
    this.booking = this.bookingService.getBookingDetails();
    this.total = this.booking.total;
    this.payment = this.paymentForm.value;
    this.bookingService.setPaymentDetail(this.payment);
    this.bookingService.getBookingDetail(this.userAuthService.getId()).subscribe((data) => {
      if (data) {
        console.log(data);
        this.bookings = data;
        this.payment = this.bookingService.getPaymentDetail();
        // console.log(this.payment);
      }
    });
    this.paymentForm.patchValue({total:this.total});
  }
  onSubmit() {
    console.log(this.paymentForm.value);
    console.log(this.booking);
    this.bookingService.updateBooking(this.booking).subscribe((data) => {
      this.booking.bookingStatus = true;
      console.log(this.booking);
      console.log(data);
      this.bookingService.updatePayment(this.booking, this.paymentForm.value).subscribe((data) => {
        this.saved = true;
        console.log(data);
      }, (error) => {
        console.log(error.error.message);
        this.error = error.error.message;
      });
    }, (error) => {
      console.log(error.error.message);
      this.error = error.error.message;
    });

  }
  hide(){
    if (this.total != null) {
      return true;
    }
  }

}
