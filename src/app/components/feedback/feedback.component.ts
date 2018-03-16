import { Component, OnInit,Input } from '@angular/core';
import { Survey } from '../../Beans/Survey';
import { SurveyService } from '../../services/SurveyService.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  @Input() surveyList:Survey[];

  constructor(private surveyService:SurveyService) { }
  ngOnInit() {
    this.surveyService.currentSelection.subscribe
    (surveyList=>this.surveyList = surveyList);
  }
}
