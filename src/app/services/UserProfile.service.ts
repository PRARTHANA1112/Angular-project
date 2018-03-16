import { Injectable} from "@angular/core";
import { UserProfile } from "../Beans/UserProfile";
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserProfileService{
    constructor(){}
    private currentProfile = new BehaviorSubject<UserProfile>(null);
    currentSelection = this.currentProfile.asObservable();
    changeSelectedProfile(userProfile:UserProfile){
        this.currentProfile.next(userProfile);

    }
}