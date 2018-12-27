import { Injectable } from '@angular/core';
import { AdminComponent} from './admin/admin.component';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private navigate = new Subject();
  navigate$ = this.navigate.asObservable();




  constructor(private router:Router) { 

  }
  viewclient(){
  this.router.navigate(['admin']);
}}
