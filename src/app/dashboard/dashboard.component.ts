import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../auth.service';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';
import { AddclientComponent } from '../addclient/addclient.component';
import { AdduserComponent } from '../adduser/adduser.component';


const appRoutes:Routes = [

  {
    path:'dashboard/addclient',
    component:AddclientComponent

  },
  
  {
    path: 'dashboard/adduser',
    component:AdduserComponent
  }

]

@NgModule({
  declarations: [
  
    DashboardComponent,
    AddclientComponent,
    AdduserComponent,
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
 
})


@Component({
 
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor(private auth: AuthService) { }

  ngOnInit() {

    
  }



}


