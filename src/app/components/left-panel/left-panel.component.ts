import { Component, OnInit } from '@angular/core';
import { LeftPanel } from '../../Beans/LeftPanel';
import { LeftPanelService } from '../../services/LeftPanel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  private leftPanelObj : LeftPanel[];
  
  constructor(private leftPanelService:LeftPanelService,
  private router:Router) { }

  ngOnInit() {
      this.leftPanelService.getLeftPanelData().subscribe(
      data => this.leftPanelObj =data);
  }
  fetchRightPanel(){
    this.router.navigate(["/landing/userProfile"])
  }
}
