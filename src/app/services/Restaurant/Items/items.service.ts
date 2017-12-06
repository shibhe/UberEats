import { Injectable } from '@angular/core';
import { Items } from '../../../../Model/Items.component';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { OnlineCart } from '../../../../Model/OnlineCart.component';

@Injectable()
export class ItemsService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost:61297';
  constructor(private http: Http) { }

  addNewItem(items: Items){
    return this.http.post(`${this.BASE_URL}/api/Products`, items , { headers: this.headers})
     .map((data: Response) => console.log(JSON.stringify(data)));
  }

  viewItems(id){
    return this.http.get(`${this.BASE_URL}/api/Products?userID=${id}`)
      .map((results) => results.json());
  }

  viewItem(Id: number){
    return this.http.get(`${this.BASE_URL}/api/Products/${Id}`)
      .map((results) => results.json());
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
