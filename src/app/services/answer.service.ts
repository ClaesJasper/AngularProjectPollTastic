import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Answer } from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }
//antwoorden voor poll toevoegen
  addAnswer(answer: Answer) {
    return this.http.post<Answer>("https://localhost:44345/api/Answer", answer);
    } 
}
