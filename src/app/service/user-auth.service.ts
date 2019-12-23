import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  redirectUrl = '/';
  loggedIn = false;
  token: string;
  role: string;
  user: string;
  id: number;
  roleId: number;

  public setId(id: number) {
    this.id = id;
  }
  public getId() {
    return this.id;
  }
  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }
  public setRoleId(roleId: number) {
    this.roleId = roleId;
  }
  public getRoleId() {
    return this.roleId;
  }
  public setRole(role: string) {
    this.role = role;
  }
  public getRole() {
    return this.role;
  }
  public setUser(user: string) {
    this.user = user;
  }
  public getUser() {
    return this.user;
  }
  public logout() {
    this.redirectUrl = '/';
    this.role = null;
    this.user = null;
    this.loggedIn = false;
  }


}
