import { Component, OnInit, ViewChild } from '@angular/core';
import { Items } from '../../../../Model/Items.component';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
=======
>>>>>>> parent of a520a2f... sdfdf
=======
>>>>>>> parent of a520a2f... sdfdf
=======
>>>>>>> parent of a520a2f... sdfdf

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  items = new  Items();
  path = '';  
  public file_srcs: string[] = [];  
  public debug_size_before: string[] = [];  
  public debug_size_after: string[] = [];  

  constructor(private changeDetectorRef: ChangeDetectorRef,  public _route: Router, private itemsService: ProductsService) { }
=======
  @ViewChild('fileInput') fileInput;
 items = new  Items();
  constructor() { }
>>>>>>> parent of a520a2f... sdfdf
=======
  @ViewChild('fileInput') fileInput;
 items = new  Items();
  constructor() { }
>>>>>>> parent of a520a2f... sdfdf
=======
  @ViewChild('fileInput') fileInput;
 items = new  Items();
  constructor() { }
>>>>>>> parent of a520a2f... sdfdf

  ngOnInit() {
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  OnSubmit(){
=======
  OnSubmit(){
>>>>>>> parent of a520a2f... sdfdf
=======
  OnSubmit(){
>>>>>>> parent of a520a2f... sdfdf
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append("image", fileBrowser.files[0]);
      // this.projectService.upload(formData, this.project.id).subscribe(res => {
        // do stuff w/my uploaded file
     // });
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of a520a2f... sdfdf
=======
>>>>>>> parent of a520a2f... sdfdf
=======
>>>>>>> parent of a520a2f... sdfdf
  }
}

