import { Component, OnInit } from '@angular/core';
import {Login} from '../../Beans/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl:'login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

export class LoginComponentComponent implements OnInit {
  constructor(private router: Router) { }

  login: Login = {
    username: '',
    password:'',
  };
  
  buttonTitle = "Submit";
  
  ngOnInit() {}
  submitForm(){
    this.router.navigate(['/landing',{loginObject:JSON.stringify({ username:this.login.username, password:this.login.password})}]);
  }
}
