import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Login } from '../login/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: Http) { }

  //Get Data

  getData()
  {
    return this._http.get('http://localhost:3000/login')
    .pipe(
      map((res: Response) => res.json())
    )
}
getSingleData(usertype: string) {
  return this._http.get('http://localhost:3000/login/'+usertype)
  .pipe(
                  map((res: Response) => res.json())

  )}
  postData(login: Login) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:3000/login', login)
      .pipe(map((res: Response) => res.json()));
  }
}