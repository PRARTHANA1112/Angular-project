import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponentComponent } from './components/login-component/login-component.component';
import { MasterPageComponent } from './components/master-page/master-page.component';

const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'landing', component: MasterPageComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash:true}),
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
