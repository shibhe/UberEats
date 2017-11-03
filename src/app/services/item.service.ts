import { Injectable } from '@angular/core';
import { OnlineCart } from '../../Model/OnlineCart.component';
import { ITEMS } from './mock-items';

@Injectable()
export class ItemService {
  selectedItems: OnlineCart[] = [];
  item;
  itemIndex;
  totalAmt;

  getItems(): OnlineCart[] {
    return ITEMS;
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
