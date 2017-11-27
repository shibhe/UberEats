import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart-service/cart.service';
import { DeliveryOption } from '../../../../Model/delivery-option';
import { ItemsService } from '../../../services/Restaurant/Items/items.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public orders: DeliveryOption[];
  public productName;
  public productPrice;
  public prodID;
  
  

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
      this.productPrice = data.itemPrice;

      console.log("product", data);
    });
  }

  addItems(){
    this.router.navigate(['/login.html/username/role=3/addItems'])
  }
}
