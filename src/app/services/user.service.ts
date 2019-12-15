import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../environments/environment';
import { UserModel } from '../Models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = baseUrl;

  constructor(private http: HttpClient) { }

  postUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.baseUrl}/users`, user);
  }

  loginUser(username: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.baseUrl}/users/logIn`, {username, password});
  }
}
