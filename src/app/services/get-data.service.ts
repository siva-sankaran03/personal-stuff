import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';



import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from '../../app/admin/adduser/user';


@Injectable()
export class GetDataService {
  constructor(private _http: Http) { }

  //Get data 
  getData() {
    return this._http.get('http://localhost:3000/users')
    .pipe(
      map((res: Response) => res.json())
    )
    
  }

  //Get single data
  getSingleData(userID: string) {
    return this._http.get('http://localhost:3000/users/'+userID)
    .pipe(
                    map((res: Response) => res.json())
  
    )}

  //Update the data for a single user
  updateData(user: User, userID: string) {
    return this._http.put('http://localhost:3000/users/'+userID, user)

          .pipe(map((res: Response) => res.json()))
  }

  //Post data
  postData(user: User) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:3000/users', user)
      .pipe(map((res: Response) => res.json()));
  }

  //Delete data
  deleteData(userID: String) {
    let options = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
    });
    return this._http.delete('http://localhost:3000/users/'+userID)
          .pipe(map((res: Response) => res.json()))
  }
}
