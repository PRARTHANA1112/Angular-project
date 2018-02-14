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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegistrationFormComponent,
    MasterPageComponent,
    LeftPanelComponent,
    TopPanelComponent,
    DataPanelComponent,
    RightPanelComponent
  ],
    imports :[
      BrowserModule,
      FormsModule,
      AppRoutingModule,
    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
  
})
export class AppModule { }
