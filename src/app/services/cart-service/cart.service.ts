import { Injectable } from '@angular/core';
import { CartItems } from '../../../Model/CartItems';
import { OnlineCart } from '../../../Model/OnlineCart.component';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Order } from '../../../Model/OrderCart';
import { DeliveryOption } from '../../../Model/delivery-option';

@Injectable()
export class CartService {

  public selectedItems: CartItems[] = [];
  public orders: DeliveryOption[] = [];
  public AllItems: OnlineCart[];
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost:61297';

  constructor(private http: Http) { }

  getCartItems(){
    return this.selectedItems;
  }

  addToCart(Id: number){
    let item = this.AllItems.find(ob => ob.Id === Id);
    if (this.selectedItems.indexOf(item) < 0) {	   
     this.selectedItems.push(item);
    }
  }

  removeCart(Id: number){
    let item = this.selectedItems.find(ob => ob.Id === Id);
    let itemIndex = this.selectedItems.indexOf(item);
    this.selectedItems.splice(itemIndex, 1);
  }

  PlaceOrder(order: Order){
     return this.http.post(`${this.BASE_URL}/api/OnlineCarts`, order, { headers: this.headers } )
    .map((data: Response) => console.log(JSON.stringify(data)));
  }

  ViewOrderDetails(Id: number){
    return this.http.get(`${this.BASE_URL}/api/OnlineCarts/${Id}`, { headers: this.headers } )
      .map((data: Response) => console.log(JSON.stringify(data)));
  }

  ViewOrder(){
    return this.http.get(`${this.BASE_URL}/api/OnlineCarts`, { headers: this.headers } )
      .map((data: Response) => data.json());
  }
}
