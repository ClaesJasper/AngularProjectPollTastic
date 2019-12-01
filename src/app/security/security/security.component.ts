import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { Userlogin } from '../../models/userlogin.model';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';



@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  //variabelen maken + Form maken en input data doorgeven
  submitted = false;
  userLogin = new Userlogin("", "");

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  }

  );


  constructor(private router: Router, private _authenticateService: AuthenticateService, private fb: FormBuilder) { }

  onSubmit() {
    //submit login en data doorgeven naar localstorage om op dashboard op te roepen

    this.submitted = true;

    this._authenticateService.authenticate(this.userLogin).subscribe(result => {


      localStorage.setItem("token", result.token);
      localStorage.setItem("email", result.email);
      localStorage.setItem("firstname", result.firstName);
      localStorage.setItem("lastname", result.lastName);
      localStorage.setItem("userId", result.userId + "");
      this.router.navigate(['/dashboard']);

      console.log(result);
    });

  }

  ngOnInit() {
  }



}

