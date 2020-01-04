import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userApiUrl = environment.baseUrl + '/signup-service/users';
  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }
  addUser(user: User) {
    //console.log(user);
    //console.log(this.userApiUrl, user);
    return this.httpClient.post(this.userApiUrl, user);
  }
  deleteUser(user: User) {
    return this.httpClient.post(this.userApiUrl+'/deleteuser',user);
  }
  getAllPendingUsers(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.get<User[]>(this.userApiUrl, httpOptions);
  }
  getAllUsers(): Observable<User[]>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.get<User[]>(this.userApiUrl+'/activeusers', httpOptions);
  }
  getUser(userId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.get<User>(this.userApiUrl + "/" + userId, httpOptions);
  }
  updateRequest(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.put(this.userApiUrl, user, httpOptions);
  }


}
