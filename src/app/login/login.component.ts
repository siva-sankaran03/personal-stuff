import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { 

  }

  ngOnInit() {  
  }
loginUser(e)
{



  //e.preventDefaults();
  //console.log(e);
var email = e.target.elements[0].value; 
var password = e.target.elements[1].value;
if(email == 'admin@meltwater.com' && password =='admin')
{
  this.auth.setUserLoggedIn();
 
  this.router.navigate(['admin']);
}
else if (email == 'client@meltwater.com' && password == 'client') {
  this.auth.setUserLoggedIn();
  this.router.navigate(['client']);
} 
else{
  alert("Wrong username and password");
}
}
}
