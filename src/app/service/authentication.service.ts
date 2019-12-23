import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authenticationApiUrl = environment.baseUrl+"/authenticate";
  private token: string;
  constructor(private httpClient: HttpClient) { }
  authenticate(user: string, password: string): Observable<any> {
    console.log("userName : " + user +" password : " + password );
    let credentials = btoa(user + ':' + password);
    console.log("authentication url :"+this.authenticationApiUrl);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);
    console.log(headers);
   return this.httpClient.get<User>(this.authenticationApiUrl,{headers});
   //  return this.httpClient.get<User>(http:localhost:3306this.authenticationApiUrl + '/authenticate', { headers });
  }
  setToken(token: string) {
    this.token = token;
  }
  getToken() {
    return this.token;
  }
  
}
