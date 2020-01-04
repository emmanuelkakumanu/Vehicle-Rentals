import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/service/User';
import { Role } from 'src/app/service/Role';
import { UserAuthService } from 'src/app/service/user-auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  authSource: string;
  error: string;
  exist: boolean;
  isAdmin: boolean;
  request = false;
  role: Role[];
  user: User[];
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.role = [{ id: 2, name: 'USER' }];
    this.signupForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4),
      Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*')]],
      firstName: ['', [Validators.required, Validators.minLength(4),
      Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*')]],
      lastName: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*')]],
      branch: [''],
      emailId: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]*')]],
      gender: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('^[0-9+]*')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      roleList: [this.role],
      confirmPassword: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    },
    );

  }
  addRoleUser() {
    this.isAdmin = false;
    this.role = [{ id: 2, name: 'USER' }];
    
  }
  addRoleAdmin() {
    this.isAdmin = true;
    this.role = [{ id: 1, name: 'ADMIN' }];
    
  }
  //289610
  onSignup() {
    if (this.isAdmin) {
      this.signupForm.value.roleList = this.role;
    }
    console.log("Role :"+this.signupForm.value.role);
    this.userService.addUser(this.signupForm.value).subscribe(
      (response) => {
        console.log(this.signupForm.value.role);
        console.log(this.signupForm.value);
        this.request = true;
        this.router.navigate(['/login']);
      },
      (responseError) => {
        this.exist = true;
        this.error = responseError.error.errorMessage;
      });

  }
  isExist() {
    return this.exist;
  }
  get roleList() {
    return this.signupForm.get('roleList');
  }
  get userName() {
    return this.signupForm.get('userName');
  }
  get branch() {
    return this.signupForm.get('userName');
  }
  get age() {
    return this.signupForm.get('age');
  }
  get gender() {
    return this.signupForm.get('gender');
  }
  get contactNo() {
    return this.signupForm.get('contactNo');
  }
  get emailId() {
    return this.signupForm.get('emailId');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

}
