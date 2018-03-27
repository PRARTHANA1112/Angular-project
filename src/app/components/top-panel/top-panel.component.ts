import { Component, OnInit } from '@angular/core';
import {TopPanel} from '../../Beans/TopPanel';
import {Login} from '../../Beans/Login';
import { LoginService } from '../../services/Login.service';
import { UserProfileService } from '../../services/UserProfile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css'],
})
export class TopPanelComponent implements OnInit {
  //variables
  loginObj :Login;
  selected :any;
  message:string;
  constructor(private loginService :LoginService,
    private userProfileService:UserProfileService,
    private router:Router) { 
  }
  ngOnInit() {
   this.loginService.currentSelection.subscribe(loginObj =>this.loginObj = loginObj)   
  }
  getRightPanel(item){
    this.selected = item;  
    
    this.userProfileService.changeSelectedProfile(null);
    this.router.navigate(['/landing/'+item.link,{profile:item.profile}]);
  }
  isActive(item) {
  //   if(this.selected == undefined && item.name == this.topPanelObj[0].name){
  //     this.selected = this.topPanelObj[0];
  //     this.profile = this.topPanelObj[0].profile;
  //     this.router.navigate(['/landing/'+item.link,{profile:item.profile}]);
  //     return true;
  //   }else
  //     return this.selected === item;
  // }
  }
}
