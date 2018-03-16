import { Injectable } from "@angular/core";
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Data } from "../Beans/Data";

@Injectable()
export class DataService{
    constructor(){}
    private  observedData= new BehaviorSubject<Data>(null);
    data = this.observedData.asObservable();

    changeData(data:Data){
        this.observedData.next(data);

    }
}