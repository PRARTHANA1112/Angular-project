import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/UserProfile.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../../Beans/UserProfile';

@Component({
  selector: 'app-search-records',
  templateUrl: './search-records.component.html',
  styleUrls: ['./search-records.component.css']
})
export class SearchRecordsComponent implements OnInit {
  private userProfile:UserProfile;

  constructor(private userProfileService:UserProfileService,
  private activatedRouter:ActivatedRoute) { }
  buttonTitle = "Search";
  profile:string;
  ngOnInit() {
  }
  searchRecords(){    
    this.profile = this.activatedRouter.snapshot.params['profile'];
    console.log(this.profile);
    this.userProfile = {
        name:'John',
        id:1001,
        class:'10',
        booksIssued:[{bookCode:10,title:'let us c',author:'Mark zusak'},
        {bookCode:23,title:'let us c++',author:'Mark zusak2'},
        {bookCode:23,title:'let us c++',author:'Mark zusak2'},
        {bookCode:23,title:'let us c++',author:'Mark zusak2'},
        {bookCode:23,title:'let us c++',author:'Mark zusak2'},],
    };
    this.userProfileService.changeSelectedProfile(this.userProfile);
  }
}