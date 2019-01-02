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
    MatTreeModule
  ],
  imports: [BrowserAnimationsModule]
})
export class MaterialModule {}

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ProvidersFeature } from '@angular/core/src/render3';
import { provideForRootGuard, provideLocationStrategy } from '@angular/router/src/router_module';
import { MyserviceService } from './myservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    path: 'client/clientlist',
    component:ClientlistComponent
  },
  {
    path: 'client',
    component:ClientComponent
  },
  { path: 'client/search', component:SearchComponent}

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
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,

    AppRoutingModule,
    MatIconModule,
    
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  bootstrap: [AppComponent
   
  ],
  providers: [MyserviceService,
  
    AuthService, AuthguardGuard
  ]
 
  
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
