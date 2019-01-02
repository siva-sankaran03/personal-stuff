import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddclientComponent} from './admin/addclient/addclient.component';
import { AdduserComponent} from './admin/adduser/adduser.component';
import { ClientComponent } from './client/client.component';
import { SearchComponent } from './client/search/search.component';
import { ClientlistComponent } from './client/clientlist/clientlist.component';




const routes: Routes = [
  { path: ' ', redirectTo: '/admin', pathMatch: 'full'},
  { path: 'admin', component:AdminComponent

  },
  { path: 'adduser', component:AdduserComponent},
  { path: 'addclient', component:AddclientComponent},
  { path: 'client', component:ClientComponent},
  { path: 'search', component:SearchComponent},
  {path: 'clientlist', component:ClientlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
