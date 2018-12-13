import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit() {
    console.log('hit');
  
  }
loginUser(e)
{
  console.log("hello");
  //e.preventDefaults();
  //console.log(e);
var email = e.target.elements[0].value; 
var password = e.target.elements[1].value;
if(email == 'admin@meltwater.com' && password =='admin')
{
  console.log("checking");
  this.router.navigate(['/dashboard']);
}
else{
  alert("Wrong username and password");
}
}
}
