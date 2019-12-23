import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/service/vehicle.service';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private vehicleService: VehicleService, private userAuthService: UserAuthService, private router: Router) { }

  role: any;
 
  ngOnInit() {
    this.role = this.userAuthService.getRole();
  }
  onSearchText(event: any) {
    this.vehicleService.filter.next({ name: event.target.value });
  }
}
