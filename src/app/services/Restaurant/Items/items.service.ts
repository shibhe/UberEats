import { Injectable } from '@angular/core';
import { Items } from '../../../../Model/Items.component';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ItemsService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost:61297';
  constructor(private http: Http) { }

  addNewItems(items: Items){
    return this.http.post(`${this.BASE_URL}/api/Products`, Items, { headers: this.headers})
     .map((data: Response) => console.log(JSON.stringify(data)));
  }

  viewItems(){
    return this.http.get(`${this.BASE_URL}/api/Products`)
    .map((results: Response) => results.json());
  }

  deleteItem(id: number){
    return this.http.delete(`${this.BASE_URL}/api/Products/${id}`)
    .map((results: Response) => results.json());
  }

  editItem(id: number, items: Items){
    return this.http.put(`${this.BASE_URL}/api/Products/${id}`, items, { headers: this.headers })
    .map((results: Response) => results.json());
  }
}
