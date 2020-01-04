import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //private authenticationApiUrl = environment.baseUrl+"/vehicle-service/authenticate";
  authenticationApiUrl = 'http://localhost:8021/authenticate'
  private token: string;
  constructor(private httpClient: HttpClient) { }
  authenticate(user: string, password: string): Observable<any> {
    console.log("userName : " + user +" password : " + password );
    let credentials = btoa(user + ':' + password);
    //console.log("authentication url :"+this.authenticationApiUrl);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);
   // console.log(headers);
   return this.httpClient.get<User>(this.authenticationApiUrl,{headers});
  }
  setToken(token: string) {
    this.token = token;
  }
  getToken() {
    return this.token;
  }
  
}
