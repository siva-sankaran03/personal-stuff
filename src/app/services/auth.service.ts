import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { map } from 'rxjs/Operators';
import { appConfig } from '../../app.config';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {  }
  login(email: string, password: string)
  {
    return this.http.post<any>(appConfig.apiUrl + '/users/authenticate', { email: email, password: password})
    .pipe(map(user => {
      if (user && user.token){
        localStorage.setItem('currentUser', JSON.stringify(user));  
      }
      return user;
    }));
  }
  logout(){
    localStorage.removeItem('currentUser');
  }
  }

