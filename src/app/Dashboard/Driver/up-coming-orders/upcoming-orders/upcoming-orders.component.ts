import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../services/cart-service/cart.service';
import { ItemsService } from '../../../../services/Restaurant/Items/items.service';
import { Router } from '@angular/router';
import { DeliveryOption } from '../../../../../Model/delivery-option';

@Component({
  selector: 'app-upcoming-orders',
  templateUrl: './upcoming-orders.component.html',
  styleUrls: ['./upcoming-orders.component.css']
})
export class UpcomingOrdersComponent implements OnInit {

  public orders: DeliveryOption[];
  public productName;
  
  constructor(private router: Router, 
    private cartService: CartService,
    private itemsService: ItemsService) { }

  ngOnInit() {
    this.cartService.ViewOrder()
    .subscribe((data) => {
      this.orders = data;
      console.log("Data: ", data);
      console.log("Data: 1 ", this.orders);
    });

     this.itemsService.viewItem(1)
     .subscribe((data) =>
    {
      this.productName = data.itemName;
     
      console.log("product", data);
    });
  }

}
