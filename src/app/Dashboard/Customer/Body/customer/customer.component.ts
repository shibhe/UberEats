import { Component, OnInit } from '@angular/core';
import { OnlineCart } from '../../../../../Model/OnlineCart.component';
import { ItemService } from '../../../../services/item.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  cartItems: OnlineCart[];
  numCartItems = 0;
  subTotalAmt = 193.50;
  isEnabled = false;
  // numOfItem: number;

  constructor(private itemService: ItemService) { }
  getStoreItems(): void {
     this.cartItems = this.itemService.getItems();
  }
  ngOnInit(): void {
     this.getStoreItems();
  }

  addItemInCart(id: number): void {
     this.itemService.addItem(id);
     this.numCartItems = this.numCartItems + 1;
     this.isEnabled = true;
  }

  // tslint:disable-next-line:one-line
  removeItemInCart(id: number){
    this.itemService.removeItem(id);
    this.numCartItems = this.numCartItems - 1;

    // tslint:disable-next-line:one-line
    if (this.numCartItems === 0){
      this.isEnabled = false;
    }
  }
  // tslint:disable-next-line:one-line
  EmptyCart(){
    this.itemService.removeAllItems();
    this.numCartItems = 0;
    this.isEnabled = false;
  }
}
