import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { Vehicle } from './Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
 // vehicleApiUrl = environment.baseUrl + '/vehicles';
  vehicleApiUrl = environment.baseUrl+'/vehicle-service/vehicles'
  filter = new Subject();
  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }
  getAllVehicles(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.get<Vehicle[]>(this.vehicleApiUrl, httpOptions);
  }
  getVehicle(vehicleId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.get<Vehicle>(this.vehicleApiUrl + "/" + vehicleId, httpOptions);
  }
  updateVehicle(vehicle:Vehicle): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.put(this.vehicleApiUrl, vehicle, httpOptions);
  }
  deleteVehicle(vehicleId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.delete(this.vehicleApiUrl + "/" + vehicleId, httpOptions);
  }
}
