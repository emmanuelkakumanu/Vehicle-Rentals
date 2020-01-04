import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLoginValid = true;
  authSource: string;
  error: string;
  user: string;
  pwd: string;
  status:boolean;
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required,Validators.minLength(4),
      Validators.maxLength(20),Validators.pattern('^[a-zA-Z0-9]*')]],
    password: ['',Validators.required]
  });
  constructor(
    private userAuthService: UserAuthService,
    private authenticationService: AuthenticationService,
    private router: Router, private fb: FormBuilder,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.authSource = params['from'];
    });
  }
  onSubmit(loginForm: any) {
    //console.log(loginForm.value.username);
    //console.log(loginForm.value.password);
    this.authenticationService.authenticate(loginForm.value.username, loginForm.value.password).subscribe((data) => {
      //console.log(this.loginForm.value.username);
      //console.log(this.loginForm.value.password);
      this.userAuthService.loggedIn = true;
      this.status = this.userAuthService.loggedIn;
      console.log("role: " + data.role);
      console.log("user: " + data.token);
      console.log("userId: "+ data.id);
      this.userAuthService.setToken(data.token);
      this.userAuthService.setRole(data.role);
      this.userAuthService.setUser(data.user);
      this.userAuthService.setId(data.id);
      this.router.navigate(['/vehicle']);
    },
      (error) => {
        this.isLoginValid = false;
        console.log('user : '+this.user);
        console.log(`hey error ` + JSON.stringify(error));
        
        if (error.status == 401) {
          this.error = "Invalid username/password";
        }
       
      });


  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
