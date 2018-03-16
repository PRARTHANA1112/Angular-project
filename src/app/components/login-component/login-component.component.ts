import { Component, OnInit } from '@angular/core';
import {Login} from '../../Beans/login';
import { Router } from '@angular/router';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login-component',
  templateUrl:'login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  constructor(private router: Router,
  private http:Http) { }

  configUrl = '../assets/config.json';

  buttonTitle = "Submit";

  private url = 'http://localhost:8080/findbyusername?username=Jack';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  private loginObj: Login;
  ngOnInit() {
    this.loginObj = {
      username: '',
      password:'',
    };
  }
  submitForm(){
    this.http.get(this.url).subscribe(res => this.loginObj);
    this.router.navigate(['/landing',{loginObject:JSON.stringify(this.loginObj)}]);
  }
}
