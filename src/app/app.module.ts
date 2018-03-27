import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component ,Injectable, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { MasterPageComponent } from './components/master-page/master-page.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';
import { DataPanelComponent } from './components/data-panel/data-panel.component';
import { AppRoutingModule } from './/app-routing.module';

import { LoginService } from './services/Login.service';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileService } from './services/UserProfile.service';
import { UserProfile } from './Beans/UserProfile';
import { SearchRecordsComponent } from './components/search-records/search-records.component';
import { SurveyComponentComponent, SingleSurveyComponent,CreateSurveyComponent } from './components/survey-component/survey-component.component';


import { FeedbackComponent } from './components/feedback/feedback.component';
import { SurveyService } from './services/SurveyService.service';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http/src/http';
import { LeftPanelService } from './services/LeftPanel.service';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegistrationFormComponent,
    MasterPageComponent,
    LeftPanelComponent,
    TopPanelComponent,
    DataPanelComponent,
    RightPanelComponent,
    UserProfileComponent,
    SearchRecordsComponent,
    SurveyComponentComponent,
    FeedbackComponent,
    SingleSurveyComponent,
    CreateSurveyComponent,
    SignUpFormComponent,
  ],
    imports :[
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpModule,
    ],
    providers: [LoginService,UserProfileService,UserProfile,SurveyService,LeftPanelService],
    bootstrap: [AppComponent]
  
})
export class AppModule { }
