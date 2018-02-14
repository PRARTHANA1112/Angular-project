import { Injectable } from "@angular/core";

@Injectable()
export class LoginService{
    username:string;
    password:string;

    constructor(){}

    getPassword(){
        return this.password;
    }
    getUsername(){
        return this.username;
    }

}