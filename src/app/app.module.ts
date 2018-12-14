import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { AuthguardGuard } from './authguard.guard';
import { AddclientComponent } from './addclient/addclient.component';
import { AdduserComponent } from './adduser/adduser.component';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path:'addclient',
    component:AddclientComponent

  },
  {
    path: 'adduser',
    component:AdduserComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ClientComponent,
    DashboardComponent,
    AddclientComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AuthService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
