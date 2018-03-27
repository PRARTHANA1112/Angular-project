import { Injectable} from "@angular/core";
import { LeftPanel } from "../Beans/LeftPanel";
import { Headers,Http,Response } from '@angular/http';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LeftPanelService{
    private leftPanelList = new BehaviorSubject<LeftPanel[]>(null);
    currentSelection = this.leftPanelList.asObservable();

    setLeftPanelData(leftPanel:LeftPanel[]){
        this.leftPanelList.next(leftPanel);
    }
    constructor(private http:Http){

    }
    uri : string  = 'http://localhost:8080/getleftpanel'; 
    getLeftPanelData(){
        return this.http.get(this.uri)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }
    public errorHandler(error:any) {
        return Observable.throw(error.statusText);
    }
}