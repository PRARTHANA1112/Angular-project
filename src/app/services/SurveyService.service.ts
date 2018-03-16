import { Injectable} from "@angular/core";
import { Survey } from "../Beans/Survey";
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

export class SurveyService{
    private surveyList = new BehaviorSubject<Survey[]>(null);
    currentSelection = this.surveyList.asObservable();
    getSurveyData(survey:Survey[]){
        this.surveyList.next(survey);
    }
}