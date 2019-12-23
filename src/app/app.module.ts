import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';
import { LoginComponent } from './site/login/login.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './site/signup/signup.component';
import { ViewRequestComponent } from './site/view-request/view-request.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleInfoComponent } from './vehicle/vehicle-info/vehicle-info.component';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';
import { SearchComponent } from './vehicle/search/search.component';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { BookingComponent } from './booking/booking/booking.component';
import { PaymentComponent } from './booking/payment/payment.component';
import { AuthGuard } from './auth/auth.guard';
import { MyBookingComponent } from './booking/my-booking/my-booking.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'view-request', component: ViewRequestComponent },
  { path: 'vehicle', component: VehicleListComponent },
  { path: 'vehicle/:id', component: VehicleListComponent },
  { path: 'vehicle-edit/:id', component: VehicleEditComponent },
  { path: 'vehicle-edit', component: VehicleEditComponent },
  { path: 'booking/:id', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'booking', component: PaymentComponent },
  { path: 'payment/:id', component: PaymentComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'my-booking', component: MyBookingComponent },
  { path: '', redirectTo: 'vehicle', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ViewRequestComponent,
    VehicleListComponent,
    VehicleInfoComponent,
    VehicleEditComponent,
    SearchComponent,
    BookingComponent,
    PaymentComponent,
    MyBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrderModule,
    FilterPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
