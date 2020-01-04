import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs';
import { Booking } from './Booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from './Payment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  //bookingApiUrl = 'http://localhost:8024/booking';
  //paymentApiUrl = 'http://localhost:8024/payment';
  //transactionApiUrl = 'http://localhost:8024/transaction';
  bookingApiUrl = environment.baseUrl+'/booking-service/booking';
  paymentApiUrl = environment.baseUrl+'/booking-service/payment';
  transactionApiUrl = environment.baseUrl+'/booking-service/transaction';
  booking: Booking;
  payment: Payment;
  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }
  getBookingDetail(userId: number): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.get<Booking[]>(this.bookingApiUrl + "/" + userId, httpOptions);
  }
  updateBooking(booking: Booking): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.post<Booking>(this.bookingApiUrl, booking, httpOptions);
  }
  updatePayment(bookingDetail: Booking, payment: Payment): Observable<any> {
    this.payment = payment;
   console.log(bookingDetail);
   console.log(this.payment);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.put(this.paymentApiUrl, payment , httpOptions);
    //{ bookingDetail, payment }
  }
  getPayment(userId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.get<Booking[]>(this.paymentApiUrl + "/" + userId, httpOptions);
  }
  setBookingDetails(booking: Booking) {
    this.booking = booking;
  }
  getBookingDetails() {
    return this.booking;
  }
  setPaymentDetail(payment: Payment) {
    this.payment = payment;
  }
  getPaymentDetail() {
    return this.payment;
  }

  deleteBooking(bookingId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.delete(this.bookingApiUrl + "/" + bookingId, httpOptions);
  }

}
