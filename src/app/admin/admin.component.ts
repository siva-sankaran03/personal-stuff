import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  onclick(): void
  {
    
    this.router.navigate(['/addclient']);
  }
  onclick1(): void
  {
this.router.navigate(['/adduser']);
  }

  ngOnInit() {
  }

}
