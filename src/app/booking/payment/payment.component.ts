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
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16),Validators.pattern('^[0-9+]*')]],
      cvvNumber:['', [Validators.required, Validators.minLength(3), Validators.maxLength(3),Validators.pattern('^[0-9+]*')]],
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
      }
    });
    this.paymentForm.patchValue({total:this.total});
  }
  onSubmit() {
    this.bookingService.updateBooking(this.booking).subscribe((data) => {      
      this.bookingService.updatePayment(this.booking, this.paymentForm.value).subscribe((data) => {    
        this.booking.bookingStatus = true;
        this.saved = true;
        setTimeout(() => {
         // this.saved = false;
        }, 1000);
        this.router.navigate(["/my-booking"])       
      }, (error) => {        
        this.error = error.error.message;
      });
    }, (error) => {      
      this.error = error.error.message;
    });
  }
  hide(){
    if (this.total != null) {
      return true;
    }
  }

}
