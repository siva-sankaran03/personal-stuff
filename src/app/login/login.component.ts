import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import {
  FormControl,
  Validators
} from '@angular/forms';
import {
  MatSnackBar
} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { Login } from './login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']


  
})
export class LoginComponent implements OnInit {
loginData: any =[]
callSingleLogin = new Login()

  constructor(private router:Router, private getAllData: LoginService//private http: HttpClient 
     //private auth:AuthService,
    //  private alert:AlertService,
    //  private route: ActivatedRoute
  

     
     ) {   this.getPosts();

  }

  ngOnInit() {  

    
  }

  postCurrent(login: Login) {
    console.log("I am in post")
    console.log(this.callSingleLogin)

    this.getAllData.postData(login)
      .subscribe(data => { console.log("Success"); this.getPosts() });
  }
getPosts()
{
  this.getAllData.getData()
  .subscribe(data => { this.loginData = data.message; console.log(this.loginData); })

}
getSinglePost(usertype: string) {
  
  console.log("I am in getting single post")
  this.getAllData.getSingleData(usertype)
    .subscribe(data => {
      this.callSingleLogin = data.message; console.log(this.callSingleLogin.usertype)
    })
}


loginUser(e)
{




var email = e.target.elements[0].value; 
var password = e.target.elements[1].value;
if(email == 'admin@meltwater.com' && password =='admin')
{
  // this.auth.setUserLoggedIn();
 
  this.router.navigate(['admin/home']);
}
else if (email == 'client@meltwater.com' && password == 'client') {
  // this.auth.setUserLoggedIn();
  this.router.navigate(['client']);
} 
else{
  alert("Wrong username and password");
}
}
}
