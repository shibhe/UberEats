import { Component, OnInit } from '@angular/core';
import { OnlineCart } from '../../../../../Model/OnlineCart.component';
import { RegisterCustomerService } from '../../../../services/Customer/register-customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItems } from '../../../../../Model/CartItems';
import { Observable } from 'rxjs';
import { ItemsService } from '../../../../services/Restaurant/Items/items.service';
import { CartService } from '../../../../services/cart-service/cart.service';
import { Order } from '../../../../../Model/OrderCart';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  public cartItems: OnlineCart[];
  public order = new Order();
  public numCartItems = 0;
  public selectedItems: CartItems[] = []; 
  public isEnabled: boolean;
  public totalAmt: number = 0;
  public amt: number;
  public subTotal: number = 0;
  public items: Array<string>;
  public quantity = 1;

  constructor( private router:Router,
              private viewItems: ItemsService,
              private cartService: CartService) { }

  getStoreItems(): void {
      this.viewItems.viewItems()
      .subscribe((data) =>{
        this.cartItems = data;
      })
  }

  ngOnInit(): void {
     this.getStoreItems();
  }
    
  addItemInCart(Id: number){
    let item = this.cartItems.find(ob => ob.Id === Id);
    let amount = this.cartItems.find(ob => ob.Id === Id).itemPrice;
    this.items.push(this.cartItems.find(ob => ob.Id === Id).itemName);
    this.numCartItems = this.numCartItems + 1;
    if (this.selectedItems.indexOf(item) < 0) {	   
     this.selectedItems.push(item);
     this.isEnabled = true;
     this.subTotal = amount;
     this.totalAmt = this.totalAmt + (this.subTotal * this.quantity);
     sessionStorage.setItem("quantity", this.quantity.toString());
    
     for (let i = 0; i < this.items.length; i++){
      sessionStorage.setItem("name", this.items[i]);
     }
    }
  }
  
  removeSelectedItems(Id: number) {
    let item = this.selectedItems.find(ob => ob.Id === Id);
    let amount = this.selectedItems.find(ob => ob.Id === Id).itemPrice; 
    let itemIndex = this.selectedItems.indexOf(item);
    this.selectedItems.splice(itemIndex, 1);
   

    if (this.selectedItems.length > 0){
        this.isEnabled = true;
    } else if (this.selectedItems.length <= 0){
      this.isEnabled = false;
      this.totalAmt = 0;
    }
  }

  EmptyCart(){
     this.selectedItems.splice(1, 1000);
  }

  addTotalAmout(Id: number): number{
    let item = this.selectedItems.find(ob => ob.Id === Id).itemPrice;
    let quantity = this.selectedItems.find(ob => ob.Id === Id).quantity;

    if (quantity > 1){
       this.amt =  item * quantity;
    } else{
      this.amt =  item * 1;
    }

    return this.amt;
  }

  SubTotalAmout(Id: number): number{
    let item = this.selectedItems.find(ob => ob.Id === Id).itemPrice;
    return  item;
  }

  Payment(){
    this.router.navigate(['/login/username/userRole=1/order/check-out/payment']);
    sessionStorage.setItem("total", this.totalAmt.toString());
  } 
}
