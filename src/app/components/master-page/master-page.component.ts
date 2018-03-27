import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/Login.service'
import { Login } from '../../Beans/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css'],
})
export class MasterPageComponent implements OnInit {
  private error_message :string = null;
  constructor(private loginService : LoginService,
    private router:Router) { 
  }
  private loginObj:Login;
  ngOnInit() {
    this.loginService.currentSelection.subscribe(loginObj => this.loginObj = loginObj);
    if(this.loginObj==null || this.loginObj == undefined){
      this.error_message = "Wrong Url.Please Login Aagain";
      this.router.navigateByUrl('/');
    }
      
  }
}