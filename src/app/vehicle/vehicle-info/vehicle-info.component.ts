import { Component, OnInit, Input, EventEmitter, ViewChild, Output } from '@angular/core';
import { Vehicle } from 'src/app/service/Vehicle';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { Role } from 'src/app/service/Role';
import { VehicleService } from 'src/app/service/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {

  @Input() vehicle: Vehicle;
  @Output() removeVehicle: EventEmitter<number> = new EventEmitter<number>();
  @Input() vehicleId: number;
  @Output() viewMore: EventEmitter<number> = new EventEmitter<number>();
  role: string;
  removed = false;
  id: number;
  vehicleid:any;
  constructor(private userAuthService: UserAuthService, private vehicleSrvice: VehicleService, private router:Router) { }

  ngOnInit() {
    this.role = this.userAuthService.getRole();
    console.log("role :"+this.role);
  }

  onRemovingVehicle(vehicleId: number) {
    console.log(vehicleId);
    this.removeVehicle.emit(vehicleId);
    this.removed = true;
  }
  viewMoreDetails(vehicleId: number) {
    this.id = vehicleId;
    this.viewMore.emit(vehicleId);
  }
  viewLessDetails(vehicleId: number) {
    vehicleId = null;
    this.id = vehicleId;
    this.viewMore.emit(this.id);
  }

  isExpanded(vehicleId: number) {
    if (vehicleId == this.id) {
      return true;
    }
  }
}
