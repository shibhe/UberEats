import { Injectable } from '@angular/core';
import { OnlineCart } from '../../Model/OnlineCart.component';
import { ITEMS } from './mock-items';
import { CartItems } from '../../Model/CartItems';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {
  selectedItems: CartItems[] = [];
  item;
  itemIndex;
  totalAmt;
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost:61297';
  constructor(private http: Http) { }

  getItems(): Promise<OnlineCart[]> {
    return this.http.get(`${this.BASE_URL}/Products`)
      .toPromise()
      .then(response => this.extractArray(response))
      .catch(this.handleErrorPromise);
  }

  getSelectedItems(): CartItems[] {
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

  protected extractArray(res: Response, showprogress: boolean = true) {
    let data = res.json();
    
    return data || [];
}

protected handleErrorPromise(error: any): Promise<void> {
    try {
        error = JSON.parse(error._body);
    } catch (e) {
    }

    let errMsg = error.errorMessage
        ? error.errorMessage
        : error.message
            ? error.message
            : error._body
                ? error._body
                : error.status
                    ? `${error.status} - ${error.statusText}`
                    : 'unknown server error';

    console.error(errMsg);
    return Promise.reject(errMsg);
}

}
