import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Items } from '../../../../Model/Items.component';
import { Router } from '@angular/router';
import { ItemsService } from '../../../services/Restaurant/Items/items.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})

export class AddItemsComponent implements OnInit {

  items = new Items();
  loading = false;
  public base64textString: string= ""; 

  constructor(private changeDetectorRef: ChangeDetectorRef,  public _route: Router, private itemsService: ItemsService) { }

  ngOnInit() {
    
  }

  public handleUpload(event)
  {
      let imageFile = event.target.files[0]; //grab the image file
      
      let fr = new FileReader(); // create a file reader (Note: It is like C#'s FileStream)
      fr.readAsDataURL(imageFile); //initialize the FileReader with a file to read
      fr.onload = () => // function to call when the fileReader loads a file
      {
          this.items.itemImage = fr.result.split(";base64,")[1] //get the base64 string representation of the file (without file type data)
          console.log("Data: ", this.items.itemImage);
      } 
  }
 
  OnSubmit(){
    this.loading = true;
   this.itemsService.addNewItem(this.items)
   .subscribe(
    data => {
       console.log(data);
    },
    error => {
      console.log(error);
    });
  }
}

