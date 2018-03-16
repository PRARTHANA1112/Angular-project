import { Component, OnInit , Input,EventEmitter,Output } from '@angular/core';
import { Survey } from '../../Beans/Survey';
import { SurveyService } from '../../services/SurveyService.service';

@Component({
  selector: 'create-survey-component',
  template: `<div>
    <h4>Create Survey</h4>
    <input type="text" placeholder="Enter the question" #question><br><br>
    <button type="button" class="btn btn-info" (click)="createSurvey(question.value)">Create</button>
    <br><br>
</div>`,
  styleUrls: ['./survey-component.component.css']
})
export class CreateSurveyComponent{
  @Output() surveyCreated = new EventEmitter<Survey>();
  survey:Survey[];
  constructor(private surveyService:SurveyService){
  }
  createSurvey (question:string){
    this.survey = [new Survey(question)];
    this.surveyService.getSurveyData(this.survey);
    this.surveyCreated.emit(new Survey(question));
  }
}

@Component({
  selector: 'single-survey-component',
  template: `<div>
    <h4 class="card-title">{{survey.question}}</h4>      
    <input type="text" [hidden]="survey.hide" [(ngModel)]="survey.answer"><br><br>
    <button type="button" class="btn btn-warning" (click)="survey.toggle()">Tell me</button>
    <button type="button" class="btn btn-danger">Delete</button>
    <br><br><br>
</div>`,
  styleUrls: ['./survey-component.component.css']
})
export class SingleSurveyComponent{
 @Input() survey:Survey;
}

@Component({
  selector: 'app-survey-component',
  templateUrl: './survey-component.component.html',
  styleUrls: ['./survey-component.component.css']
})
export class SurveyComponentComponent implements OnInit {
  surveyList : Survey[];
  constructor(private surveyService:SurveyService) {
    this.surveyList = [ new Survey('what is the first car brought'),
                        new Survey('what is the feedback'),
                        new Survey('what are the suggestions'),
    ]}
  ngOnInit() {}
  submitSurveyData(){
    this.surveyService.getSurveyData(this.surveyList);
  }
  addSurvey(survey){
      this.surveyList.unshift(survey);
  }
}


