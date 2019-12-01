import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //variabelen maken
  userId: number;
  firstname: string;
  email: string;
  lastname: string;
  polls: Observable<Poll[]>;

  constructor(private _pollService: PollService) {

    console.log(this.polls = this._pollService.getPollsByCreator(this.userId));

    //polls ophalen met ID van de maker
    this.polls = this._pollService.getPollsByCreator(this.userId);
    //gegevens doorgeven voor html pagina
    this.userId = parseInt(localStorage.getItem("userId"));
    this.firstname = localStorage.getItem("firstname");
    this.lastname = localStorage.getItem("lastname");
    this.email = localStorage.getItem("email");

  }


  ngOnInit() {
  }

}
