import { Injectable } from '@angular/core';
import { CartItems } from '../../../Model/CartItems';
import { OnlineCart } from '../../../Model/OnlineCart.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {

  public selectedItems: CartItems[] = [];
  public AllItems: OnlineCart[];

  constructor() { }

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
}
