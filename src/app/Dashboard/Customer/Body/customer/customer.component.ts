import { Component, OnInit } from '@angular/core';
import { OnlineCart } from '../../../../../Model/OnlineCart.component';
import { ItemService } from '../../../../services/item.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public cartItems: OnlineCart[];
  public numCartItems = 0;
  public subTotalAmt = 0;
  public isEnabled = false;
  public seletedItems: OnlineCart[] = [];

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
     this.subTotalAmt = this.subTotalAmt + this.itemService.getSelectedItemAmount(id);
     this.seletedItems = this.itemService.getSelectedItems();
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
    this.subTotalAmt = 0;
  }
}
