import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { Poll } from '../models/poll.model';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  //variabelen maken + Form maken voor input data op te halen uit html
  submitted = false;
  poll = new Poll(0, "", 0);

  pollForm = this.fb.group({
    name: ['', Validators.required],
    creatorId: '',

  });

  constructor(private router: Router, private _pollService: PollService, private fb: FormBuilder) { }

  onSubmit() {
    //Submit doen om poll te maken + UserId doorgeven als CreatorId om relatie te leggen + navigatie naar volgende
    this.submitted = true;
    this.pollForm.value.creatorId = localStorage.getItem("userId");
    this._pollService.addPoll(this.pollForm.value).subscribe(result => {


      localStorage.setItem("pollId", result.pollId + "");
      localStorage.setItem("pollname", result.name);
      this.router.navigate(['/answer']);

      console.log(this.pollForm.value);
    });


  }

  ngOnInit() {
  }

}
