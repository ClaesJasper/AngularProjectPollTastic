import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Answer } from '../models/answer.model';
import { AnswerService } from '../services/answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
//variabelen maken + Form maken om data uit html pagina inputs te halen
  pollname: string;
  submitted = false;
  pollId: number;
  answer = new Answer(0,"",0);
  pollAnswerForm = this.fb.group({
    answertext: ['', Validators.required],
    pollId: '',

  });


  constructor(private fb: FormBuilder, private router: Router, private _answerService: AnswerService) 
  {
    //data doorgeven aan html 
    this.pollname = localStorage.getItem("pollname");
  }

  onSubmit(){
    //Form submit + navigatie naar volgende pagina (antwoorden toevoegen)
    this.submitted = true;
    this.pollAnswerForm.value.pollId = localStorage.getItem("pollId");
    this._answerService.addAnswer(this.pollAnswerForm.value).subscribe();
    this.router.navigate(['/answer']);

  
    console.log(this.pollAnswerForm.value);

  }

  ngOnInit() {
  }

}
