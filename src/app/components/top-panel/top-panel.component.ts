import { Component, OnInit } from '@angular/core';
import {TopPanel} from '../../Beans/TopPanel'
import { LoginService } from '../../services/Login.service';
import { UserProfileService } from '../../services/UserProfile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css'],
})
export class TopPanelComponent implements OnInit {
  //Dummy data
  topPanelObj:TopPanel[] = [{
    name:'Student profile',
    link:'profile',
    selected:'active',
    profile:'Student',
   },{
    name:'Book Details',
    link:'/profile',
    selected:'',
    profile:'Book',
   },{
    name:'Survey',
    link:'/survey',
    selected:'',
    profile:'Survey',
   },{
    name:'FeedBack',
    link:'/feedback',
    selected:'',
    profile:'Feedback',
   }];
   
  //variables
  username:string;
  selected :any;
  profile:string;
  constructor(private loginService :LoginService,
    private userProfileService:UserProfileService,
    private router:Router) { 
   this.username =  this.loginService.getUsername();
  }
  ngOnInit() {
  }
  getRightPanel(item){
    this.selected = item;  
    this.userProfileService.changeSelectedProfile(null);
    this.router.navigate(['/landing/'+item.link,{profile:item.profile}]);
  }
  isActive(item) {
    if(this.selected == undefined && item.name == this.topPanelObj[0].name){
      this.selected = this.topPanelObj[0];
      this.profile = this.topPanelObj[0].profile;
      this.router.navigate(['/landing/'+item.link,{profile:item.profile}]);
      return true;
    }else
      return this.selected === item;
  }
}
