import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/Login.service'

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css'],
})

export class MasterPageComponent implements OnInit {
  constructor(private router: ActivatedRoute,
  private loginService : LoginService) { 
    this.loginService.username = JSON.parse(this.router.snapshot.params['loginObject']).username;
    this.loginService.password = JSON.parse(this.router.snapshot.params['loginObject']).password;
  }
  ngOnInit() {
    debugger;
    
  }

}
