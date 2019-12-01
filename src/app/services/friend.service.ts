import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Friend } from '../models/friend.model';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }
//Vriend toevoegen (word niet gebruikt)
  addFriend(friend: Friend) {
    return this.http.post<Friend>("https://localhost:44345/api/Friend", friend);
    } 
}
