import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Provider,Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthService } from './auth.service';
import { AuthguardGuard } from './authguard.guard';
import { HeaderComponent } from './header/header.component';
import { ClientlistComponent } from './client/clientlist/clientlist.component';
import { SearchComponent } from './client/search/search.component';
import { AddclientComponent} from './admin/addclient/addclient.component';
import { AdduserComponent} from './admin/adduser/adduser.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ProvidersFeature } from '@angular/core/src/render3';
import { provideForRootGuard, provideLocationStrategy } from '@angular/router/src/router_module';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
    
  },
  {
    path: 'admin',
    //canActivate: [AuthguardGuard],
    component: AdminComponent
  },
  {
    path:'admin/addclient',
    component:AddclientComponent

  },
  
  {
    path: 'admin/adduser',
    component:AdduserComponent
  },
  {
    path: 'search',
    component:SearchComponent
  },
  {
    path: 'clientlist',
    component:ClientlistComponent
  }
  

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ClientComponent,
 
    AddclientComponent,
    AdduserComponent,
    HeaderComponent,
    ClientlistComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  bootstrap: [AppComponent
   
  ],
  providers: [
  
    AuthService, AuthguardGuard
  ]
 
  
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
