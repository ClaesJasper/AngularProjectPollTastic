import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  //user toevoegen

  addUser(user: User) {
    return this.http.post<User>("https://localhost:44345/api/user", user);
  }
}
