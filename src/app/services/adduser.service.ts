import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map, takeLast } from 'rxjs/operators';
import { useAnimation } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})

export class AdduserService {
  

  constructor(private http:Http) {
    console.log('Add user service Intialized...');

   }
   getUser(){
     return this.http.get('/api/user')
    .pipe(map(res => res.json()));
    
   }
   addUser(newUser){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/user', JSON.stringify(newUser), {headers: headers})
        .pipe(map(res => res.json()));
}
}
