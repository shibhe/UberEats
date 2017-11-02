import { Component, OnInit } from '@angular/core';
import { OnlineCart } from '../../../../../Model/OnlineCart.component';
import { ItemService } from '../../../../services/item.service';
import { NumberOfItems } from '../../../../../Model/NumberOfItems';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  cartItems: OnlineCart[];
  numOfItems: NumberOfItems;
  numOfItem: number;

  constructor(private itemService: ItemService) { }
  getStoreItems(): void {
     this.cartItems = this.itemService.getItems();
  }
  ngOnInit(): void {
     this.getStoreItems();
  }
  addItemInCart(id: number): void {
     this.itemService.addItem(id);
    this.numOfItem = this.numOfItems.numOfItems++;
  }
}
