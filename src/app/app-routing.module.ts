import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponentComponent } from './components/login-component/login-component.component';
import { MasterPageComponent } from './components/master-page/master-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SurveyComponentComponent } from './components/survey-component/survey-component.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

const routes: Routes = [
  { path: '', component: LoginComponentComponent},
  { path: 'landing', component: MasterPageComponent ,
  children: [
    { path: 'userProfile', component: UserProfileComponent },
    { path: 'register', component: RegistrationFormComponent },
    { path: 'survey', component: SurveyComponentComponent },
    { path: 'feedback', component: FeedbackComponent },
  ]
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash:true}),
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
