import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/Login.service'
import { UserProfileService } from '../../services/UserProfile.service';
import { UserProfile } from '../../Beans/UserProfile';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  private userProfileObj : UserProfile ;

  constructor(private router: Router,
    private activatedRoute : ActivatedRoute,
    private loginService : LoginService,
    private userProfileService : UserProfileService,){ } 
  

    
  ngOnInit() {
    debugger;
    if(this.activatedRoute.snapshot.params['userProfileObj']){
      this.userProfileObj = JSON.parse(this.activatedRoute.snapshot.params['userProfileObj']);
    }
    else{
      // this.userProfileObj = {
      //   id:null,
      //   name:null,
      //   booksIssued:null,
      //   class:null,
      // };
    }
  }
  saveRecord(){
    debugger;
    this.router.navigate(['/landing',{userProfileObj:JSON.stringify(this.userProfileObj)}]);
  }
}