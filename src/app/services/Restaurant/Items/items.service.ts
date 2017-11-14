import { Injectable } from '@angular/core';
import { Items } from '../../../../Model/Items.component';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ItemsService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost/ubereats';
  constructor(private http: Http) { }

  addNewItems(items: Items){
    return this.http.post(`${this.BASE_URL}/addItems.php`, Items, { headers: this.headers})
     .map((data: Response) => console.log(JSON.stringify(data)));
  }

}
