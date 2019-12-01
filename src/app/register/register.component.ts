import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //variabelen maken + Form maken en data uit inputs halen 
  submitted = false;
  user = new User(0, "", "", "", "", "", "");

  registerForm = this.fb.group({
    FirstName: ['', [Validators.required]],
    LastName: ['', [Validators.required]],
    Email: ['', [Validators.required]],
    Username: ['', [Validators.required]],
    Password: ['', [Validators.required]]
  }
  );

  constructor(private fb: FormBuilder, private _userService: UserService, private router: Router) { }

  onSubmit() {
    //submit + user registreren + navigatie naar andere pagina
    this.submitted = true;

    this._userService.addUser(this.user).subscribe();
    console.log(this.user);
    this.router.navigate(['/security']);
  }

  ngOnInit() {


  }



}
