import { Component, OnInit } from '@angular/core';
import { Items } from '../../../../Model/Items.component';
import { ItemsService } from '../../../services/Restaurant/Items/items.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

 public orders: Items[];
 public id;

  constructor(private cartService: ItemsService) { }

  getStoreItems(): void {
    this.cartService.viewItem(this.id)
    .subscribe((data) =>{
           this.orders = data;
    })
  }
  ngOnInit() {
    this.getStoreItems();
  }

}
