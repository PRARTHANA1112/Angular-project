import { Component, OnInit } from '@angular/core';
import {TopPanel} from '../../Beans/TopPanel'
import { LoginService } from '../../services/Login.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css'],
})
export class TopPanelComponent implements OnInit {
  //Dummy data
  topPanelObj:TopPanel[] = [{
    name:'My Profile',
    link:'2',
   },{
    name:'Change password',
    link:'2',
    },{
    name:'Help',
    link:'2',
  },{
    name:'Log Out',
    link:'2',
  }];
  
  //variables
  username:string;
  selected :any;

  constructor(private loginService :LoginService) { 
   this.username =  this.loginService.getUsername();
  }
  ngOnInit() {
  }
  getRightPanel(item){
    this.selected = item;   
  }
  isActive(item) {
    return this.selected === item;
  }
}
