import { Component, OnInit } from '@angular/core';
import { OnlineCart } from '../../../../../Model/OnlineCart.component';
import { ItemService } from '../../../../services/item.service';
import { RegisterCustomerService } from '../../../../services/Customer/register-customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItems } from '../../../../../Model/CartItems';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public cartItems: OnlineCart[] = [];
  public numCartItems = 0;
  public subTotalAmt = 0;
  public isEnabled = false;
  public seletedItems: CartItems[] = [];
  public itemIndex;
  public firstName;
  public  lastName;
  public  id;
  public  email;
  public  status;
  public isLogged: string;

  constructor(private itemService: ItemService,
     private registerCustomerService:RegisterCustomerService,
     private route: ActivatedRoute,
     private router: Router) { }

  getStoreItems(): void {
      this.itemService.getItems().then(data => {
         this.cartItems = data;
     })
  }

  ngOnInit(): void {
     this.getStoreItems();
     this.firstName = localStorage.getItem("firstName");
     this.lastName = localStorage.getItem("lastName");
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
    this.removeSelectedItems();
  }

  orderItems(){
    this.router.navigate(['/login/username/userRole=1/order/checkout']);
  }

  removeSelectedItems(): void {
    this.seletedItems.splice(this.itemIndex, 1000);
  }
}
