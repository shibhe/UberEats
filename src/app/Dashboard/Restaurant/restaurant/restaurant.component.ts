import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart-service/cart.service';
import { DeliveryOption } from '../../../../Model/delivery-option';
import { ItemsService } from '../../../services/Restaurant/Items/items.service';
import { Order } from '../../../../Model/OrderCart';
import { Items } from '../../../../Model/Items.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public orders = new DeliveryOption();
  public productName: string[];
  public productPrice: number[];
  public prodID: Array<number>;
  
  

  constructor(private router: Router, 
    private cartService: CartService,
    private itemsService: ItemsService) { }

  ngOnInit() {
    this.cartService.ViewOrder()
    .subscribe((data) => {
      this.orders = data;
      console.log("Data ", this.orders);
    });
  }
  
  addItems(){
    this.router.navigate(['/login.html/username/role=3/addItems'])
  }

  viewProducts(){
    this.router.navigate(['/login.html/username/role=3/viewProducts'])
  }
}
