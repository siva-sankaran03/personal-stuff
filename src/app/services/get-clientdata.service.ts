import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';



import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Client } from '../admin/addclient/client';


@Injectable()
export class GetClientDataService {
  constructor(private _http: Http) { }

  //Get data 
  getData() {
    return this._http.get('http://localhost:3000/clients')
    .pipe(
      map((res: Response) => res.json())
    )
    
  }

  //Get single data
  getSingleData(clientID: string) {
    return this._http.get('http://localhost:3000/clients/'+clientID)
    .pipe(
                    map((res: Response) => res.json())
  
    )}

  //Update the data for a single user
  updateData(client: Client, clientID: string) {
    return this._http.put('http://localhost:3000/clients/'+clientID, client)

          .pipe(map((res: Response) => res.json()))
  }

  //Post data
  postData(client: Client) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:3000/clients', client)
      .pipe(map((res: Response) => res.json()));
  }

  //Delete data
  deleteData(clientID: String) {
    let options = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
    });
    return this._http.delete('http://localhost:3000/clients/'+clientID)
          .pipe(map((res: Response) => res.json()))
  }
}
