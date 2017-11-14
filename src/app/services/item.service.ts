import { Injectable } from '@angular/core';
import { OnlineCart } from '../../Model/OnlineCart.component';
import { ITEMS } from './mock-items';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ItemService {
  selectedItems: OnlineCart[] = [];
  item;
  itemIndex;
  totalAmt;
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost/ubereats';
  
  constructor(private http: Http){}

  getItems(): Observable<OnlineCart[]> {
    return this.http.get(`${this.BASE_URL}/getItems.php`)
      .map((data: Response) => {
        console.log(data)
        return <OnlineCart[]>data.json();
      })
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  getSelectedItems(): OnlineCart[] {
    return this.selectedItems;
  }

  addItem(id: number): void {
    this.item = ITEMS.find(ob => ob.id === id);
    if (this.selectedItems.indexOf(this.item) < 0) {
       this.selectedItems.push(this.item);
    }
  }

  removeItem(id: number): void {
     this.item = this.selectedItems.find(ob => ob.id === id);
     this.itemIndex = this.selectedItems.indexOf(this.item);
     this.selectedItems.splice(this.itemIndex, 1);
  }

  removeAllItems(): void {
    this.selectedItems.splice(this.itemIndex, 1);
  }

  getSelectedItemAmount(id: number): number {
    this.totalAmt = this.selectedItems.find(ob => ob.id === id).itemPrice;
      return  this.totalAmt;
  }

}
