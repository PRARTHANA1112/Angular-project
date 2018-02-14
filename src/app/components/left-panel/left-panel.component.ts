import { Component, OnInit } from '@angular/core';
import { Leftpanel } from '../../Beans/LeftPanel';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  private leftPanelObj : Leftpanel[]=[{
    name : 'My Staff',
  },{
    name : 'Records',
  },{
    name : 'Efficiency',
  },{
    name : 'Pie',
  },{
    name : 'Bar',
  }];

  constructor() { }

  ngOnInit() {
  }



}
