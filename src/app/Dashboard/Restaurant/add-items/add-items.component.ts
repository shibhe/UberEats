import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Items } from '../../../../Model/Items.component';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  items = new  Items();
  path = '';  
  public file_srcs: string[] = [];  
  public debug_size_before: string[] = [];  
  public debug_size_after: string[] = [];  

  constructor(private changeDetectorRef: ChangeDetectorRef,  public _route: Router, private itemsService: ProductsService) { }

  ngOnInit() {
  }

  handleUpload(e):void{
    this.items.itemImage = e.target.value;
   } 

  OnSubmit(){
   this.itemsService.addNewProduct(this.items)
   .subscribe(
    data => {
       // this.alertService.success('Registration successful', true);
       // this.router.navigate(['/rest-login.html']);
      console.log(JSON.stringify(data))
        //this.restaurant = new Restaurant();
    },
    error => {
      console.log(JSON.stringify(error))
    });
  }
}

