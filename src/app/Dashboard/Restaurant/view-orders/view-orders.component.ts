import { Component, OnInit } from '@angular/core';
import { Items } from '../../../../Model/Items.component';
import { ItemsService } from '../../../services/Restaurant/Items/items.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

 public product = new Items();
 public id;
 public restID = sessionStorage.getItem("id");
 // public updateProd = new Items();
 

  constructor(private cartService: ItemsService) { }

  /** getStoreItems(): void {
    /**this.cartService.viewItem(this.id)
    .subscribe((data) =>{
           this.product = data;
           console.log("Products: ", data)
    })
  }**/
  ngOnInit() {
    //this.getStoreItems();

    this.cartService.viewItems(this.restID)
    .subscribe((data) => {
      this.product = data;
      console.log("Products: ", this.product);
    })

  }

  deleteProduct(id: number){
    this.product.archived = false;
    this.cartService.deleteItem(id, this.product);
  }

}
