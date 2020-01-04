import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged:boolean;
  status:boolean=true;
  constructor(private router: Router, private userAuthService: UserAuthService) { }
  isAuthenticated() {
    this.logged = true;
    return this.userAuthService.loggedIn;
  }
  user() {
    return this.userAuthService.getUser();
  }
  role(){
    return this.userAuthService.getRole();
  }
  onSignOut() {
    this.userAuthService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
