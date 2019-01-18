import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Provider,Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthguardGuard } from './_guard/authguard.guard';
import { HeaderComponent } from './header/header.component';
import { ClientlistComponent } from './client/clientlist/clientlist.component';
import { SearchComponent } from './client/search/search.component';
import { AddclientComponent} from './admin/addclient/addclient.component';
import { AdduserComponent} from './admin/adduser/adduser.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AlertService } from './services/alert.service';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ProvidersFeature } from '@angular/core/src/render3';
import { provideForRootGuard, provideLocationStrategy } from '@angular/router/src/router_module';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, 
  HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
  import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { GetDataService } from './services/get-data.service';
import { GetClientDataService} from './services/get-clientdata.service';
import { HomeComponent } from './admin/home/home.component';


/**
 * NgModule that includes all Material modules.
*/
@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    HttpModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    // Material
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    
  ],
  imports: [BrowserAnimationsModule],
  declarations: [HomeComponent]
})
export class MaterialModule {}



const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
    
  },

  {
    path: 'admin',
   // canActivate: [AuthguardGuard],
    component: AdminComponent,
  children: [
    {
      path:'addclient',
      component:AddclientComponent
  
    },
    {
      path:'home',
      component:HomeComponent
    },
    
    {
      path: 'adduser',
      component:AdduserComponent
    }
  ]
  },
 
  
  {
    path: 'client',
    component:ClientComponent,
    children: [
      {
        path: 'search',
        component:SearchComponent
      },
      {
        path: 'clientlist',
        component:ClientlistComponent
      }
    ]
 
  },


]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ClientComponent,
HomeComponent,
    AddclientComponent,
    AdduserComponent,
    HeaderComponent,
    ClientlistComponent,
    SearchComponent,
  
    
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
HttpModule,

    AppRoutingModule,
    MatIconModule,
  
 
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  bootstrap: [AppComponent
   
  ],
  providers: [//AlertService,
  HttpClient,HttpModule,GetDataService,GetClientDataService
   // AuthService, AuthguardGuard
  ]
 
  
})
@Injectable()
        // add authorization header with jwt token if available

 

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
