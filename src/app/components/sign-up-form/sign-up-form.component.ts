import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../Beans/UserProfile';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(private userProfileObj : UserProfile) { }


  ngOnInit() {
  }
  onChangeCategorySelect(event){
    
  }
}
