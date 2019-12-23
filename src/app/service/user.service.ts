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
  //userApiUrl = environment.baseUrl + '/users';
  userApiUrl = 'http://localhost:8023/users';
  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }
  // authenticate(userName: string, password: string): Observable<User> {
  //   return Observable.create((observer: Observer<any>) => {
  //     if (userName != 'Admin') {
  //       observer.next({ userName, firstName: userName, lastName: '', role: 'Customer', accessToken: 'JWT-TOKEN' });
  //     } else {
  //       observer.next({ userName, firstName: userName, lastName: '', role: 'Admin', accessToken: 'JWT-TOKEN' });
  //     }
  //     return null;
  //   });
  // }
  addUser(user: User) {
    console.log(user);
    console.log(this.userApiUrl, user);
    return this.httpClient.post(this.userApiUrl, user);
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
