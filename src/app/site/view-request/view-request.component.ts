import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { User } from 'src/app/service/User';
import { UserService } from 'src/app/service/user.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
  activeRole : string;
  user: User[];
  error: string;
  vanish:boolean;
  msg:boolean;
  activeUser:string;
  existingUsers : User[];
  constructor(private userAuthService: UserAuthService, private httpClient: HttpClient, private userService: UserService,private  authenticationService : AuthenticationService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data=> {console.log(data)
      this.existingUsers=data;
    });
    this.activeUser=this.userAuthService.getUser();
    this.activeRole =this.userAuthService.getRole();  
    this.userService.getAllPendingUsers().subscribe(
      (user) => {
        if (user) {
          console.log(user);
          this.user = user;
          this.error = '';
        }
      },
      (error) => {
        console.log("Request error" + error.error.message);
        this.error = error.error.message;
      }
    );
  }
  onAcceptRequest(user: User) {
    user.active = true;
    this.userService.updateRequest(user).subscribe(data => {
      this.user = data;
      this.vanish = true;
      setTimeout(() => {
        this.vanish = false;
      }, 1000);
      this.ngOnInit();
    });
  }
  onDeclineRequest(user: User) {
    user.active = false;
    this.userService.updateRequest(user).subscribe(data => {
      this.user = data;
      this.msg = true;
      setTimeout(() => {
        this.msg = false;
      }, 1000);
      this.ngOnInit();
    });
  }


  deleteUser(user : User) {
    user.active = false;
    this.userService.deleteUser(user).subscribe(data => {
      setTimeout(() => {
      }, 1000);
      this.ngOnInit();
    });
  }
}
  
    
    
  

