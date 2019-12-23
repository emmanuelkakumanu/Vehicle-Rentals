import { Component, OnInit } from '@angular/core';
import { FormGroup, Form, FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from 'src/app/service/vehicle.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Vehicle } from 'src/app/service/Vehicle';
import { Booking } from 'src/app/service/Booking';
import { BookingService } from 'src/app/service/booking.service';
import { User } from 'src/app/service/User';
import { VehicleInfoComponent } from 'src/app/vehicle/vehicle-info/vehicle-info.component';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm: FormGroup;
  error: string;
  saved: boolean;
  vehicle: Vehicle;
  user: any;
  rentHours: number;
  rentDays: number;
  rentMinutes: number;
  rent: number
  submitForm: boolean;
  vehicleId: any;
  bookingId: number;
  isBooked = false;
  errorMsg:boolean;
  presentDate = new Date().toJSON();
  constructor(private vehicleService: VehicleService, private route: ActivatedRoute, private fb: FormBuilder,
    private bookingService: BookingService, private router: Router,
    private userAuthService: UserAuthService, private userService: UserService) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      id: [],
      bookingStatus: [true],
      vehicle: [],
      total: [],
      startDate: [, Validators.required],
      endDate: [, Validators.required],
      user: [],
    });
    this.route.params.subscribe((params: Params) => {
      const vehicleId = params['id'];

      this.vehicleService.getVehicle(vehicleId).subscribe((data) => {
        this.vehicle = data;
        this.user = this.userAuthService.getId();
        this.bookingForm.patchValue({ vehicle: data })
        this.vehicle = data;
        console.log(data);
        console.log(this.user);
      });
      this.userService.getUser(this.userAuthService.getId()).subscribe((user: User) => {
        console.log(user);
        this.bookingForm.patchValue({ user: user })
      });
    });


  }
  onSaveClick() {
    let rentMilliSeconds = Date.parse(this.bookingForm.value.endDate) - Date.parse(this.bookingForm.value.startDate)
    this.rentMinutes = Math.floor(((rentMilliSeconds / (1000 * 60))));
    this.rentHours = Math.floor(this.rentMinutes / 60);
    this.rent = this.rentHours * this.bookingForm.value.vehicle.rent;
    console.log(this.rent)
    this.rentDays = Math.floor(this.rentHours / 24);
    this.rentHours %= 24;
    this.rentMinutes %= 60;
    this.bookingForm.value.total = this.rent;
    // this.bookingForm.value.status =true;
    console.log(this.bookingForm.value);
    this.isBooked = true;
    this.saved = true;
    // this.bookingService.updateBooking(this.bookingForm.value).subscribe(
    //   data => {
    //     console.log('update successful.');
    //     console.log(this.bookingForm.value);
    //     this.error = '';
    //     this.saved = true;
    //     this.isBooked = true;
    //     console.log("Is saved -> " + this.saved)
    //   }
    // );
    // this.router.navigate(['/payment']);
    if (this.rent < 0) {
      this.errorMsg = true;
    }
    else {
      this.errorMsg = false;
      this.bookingForm.patchValue({ total: this.rent });
    }

    this.bookingService.setBookingDetails(this.bookingForm.value);

  }
  hide(){
    if(this.rent != null){
      return true;
    }
  }
  next() {
    this.router.navigate(['/payment']);
  }
  back() {
    this.submitForm = false;
  }
  get id() {
    return this.bookingForm.get('id');
  }
  get name() {
    return this.bookingForm.get('name');
  }
  get total() {
    return this.bookingForm.get('total');
  }
  get model() {
    return this.bookingForm.get('model');
  }
  get userId() {
    return this.bookingForm.get('userId');
  }
  get startDate() {
    return this.bookingForm.get('startDate');
  }
  get endDate() {
    return this.bookingForm.get('endDate');
  }
}