import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../Beans/UserProfile';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from '../../services/UserProfile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile:string;
  constructor(private userProfileService:UserProfileService,
    private activatedRouter:ActivatedRoute){ }
    
  userProfile : UserProfile;
  ngOnInit() {
    this.profile = this.activatedRouter.snapshot.params['userProfile'];
    console.log(this.profile);
    this.userProfileService.currentSelection.subscribe
    (userProfile=>this.userProfile = userProfile);
  }  
}
