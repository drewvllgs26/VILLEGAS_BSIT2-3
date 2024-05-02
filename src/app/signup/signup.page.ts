import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  password: string = '';
  retypepw: string = '';
  constructor(private rawter: Router, private awtenticate:AuthenticationService) { }

  ngOnInit(){}


  signingUp(){
    this.awtenticate.signup(this.email, this.password, this.retypepw);
    this.email = '';
    this.password = '';
    this.retypepw = '';
  }

  alreadyHaveAcc(){
    this.rawter.navigate(['login'])
  }
}
