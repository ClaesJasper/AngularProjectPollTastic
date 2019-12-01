import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poll } from '../models/poll.model';
import { Observable } from 'rxjs';
import { Answer } from '../models/answer.model';


@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }
  //poll toevoegen

  addPoll(poll: Poll) {
    return this.http.post<Poll>("https://localhost:44345/api/Poll", poll);
  }

  //polls opvragen met maker Id
  getPollsByCreator(creatorId: number): Observable<Poll[]> {

    return this.http.get<Poll[]>("https://localhost:44345/api/Poll/creatorId?creatorId=" + creatorId);

  }
}
