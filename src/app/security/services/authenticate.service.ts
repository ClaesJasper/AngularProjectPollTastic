import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { Userlogin } from '../../models/userlogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  //authenticate functie oproepen uit api
  constructor(private _httpClient: HttpClient) { }
  authenticate(userLogin: Userlogin): Observable<User> {
    return this._httpClient.post<User>("https://localhost:44345/api/user/authenticate", userLogin);
  }
}
