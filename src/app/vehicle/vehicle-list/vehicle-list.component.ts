import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/service/vehicle.service';
import { Vehicle } from 'src/app/service/Vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];
  temporaryList: Vehicle[];
  vehicleId: number;
  sort: string;
  filter: any;
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.filter.subscribe((obj: { name: string }) => {
      if (obj.name !== '') {
        const result = this.temporaryList.filter(
          vehicle => vehicle.name.toLowerCase().includes(obj.name.toLowerCase()));
        this.vehicles = result ? result : [];
      } else {
        this.vehicles = [...this.temporaryList];
      }
    });
    this.vehicleService.getAllVehicles().subscribe(data => {
      this.vehicles = data;
      this.temporaryList = data;
    });
  }
  removeVehicleFromList(vehicleId: number) {
    this.vehicleService.deleteVehicle(vehicleId).subscribe(() => {
      this.vehicleService.getAllVehicles().subscribe(data => {
        this.vehicles = data;
        this.temporaryList = data;
      });
    });
  }
  viewMore(vehicleId: number) {
    this.vehicleId = vehicleId;
  }
  sortByName() {
    this.sort = 'name';
  }
  sortByRent() {
    this.sort = 'rent';
  }
  filterBySeater(number: any) {
    this.filter = { seater: number };
  }
  filterByType(type: any) {
    this.filter = { vehicleType: type };
  }

}
