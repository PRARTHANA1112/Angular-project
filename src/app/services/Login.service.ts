import { Injectable } from "@angular/core";
import { Headers,Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Login } from "../Beans/Login";
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService{
    private login = new BehaviorSubject<Login>(null);
    currentSelection = this.login.asObservable();

    setLoginData(login:Login){
        this.login.next(login);
    }
    constructor(private http:Http){}

    uri : string  = 'http://localhost:8080/findbyusernameandpassword'; 
    validateLogin(login:Login){
        return this.http.post(this.uri,login)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }
    public errorHandler(error:any) {
        return Observable.throw(error.statusText);
    }


}