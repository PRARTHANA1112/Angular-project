import { Component, OnInit } from '@angular/core';
import {Login} from '../../Beans/login';
import { Router } from '@angular/router';
import { Headers,Http,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoginService } from '../../services/Login.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../../Beans/UserProfile';

@Component({
  selector: 'app-login-component',
  templateUrl:'login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  constructor(private router: Router,
  private http:Http,
  private loginService:LoginService,
  private activatedRouter:ActivatedRoute,
  private userProfileObj:UserProfile) { }

  showError : boolean = false;  
  buttonTitle = "Submit";
  private message:string=null;
  private loginObj: Login;
  ngOnInit() {
      this.loginObj = {
        username:'',
        password:'',
      };
     this.message = this.activatedRouter.snapshot.params['message'];
  }
  submitForm() {
    this.loginService.validateLogin(this.loginObj).subscribe(
      (data) => {
        if(data == true){
          this.loginService.setLoginData(this.loginObj);
          this.router.navigate(["/landing"])
        }else {this.message = "Invalid username or password. Please Try Again"; 
               this.showError = true; };
        },(error)=>{this.loginService.errorHandler}
    );
  }
  onChangeCategorySelect(event){
    alert("BOOM");
  }
}
