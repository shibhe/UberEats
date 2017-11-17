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

  public items = new Items(null, null, null, null);
  public base64textString: string= ""; 

  constructor(private changeDetectorRef: ChangeDetectorRef,  public _route: Router, private itemsService: ItemsService) { }

  ngOnInit() {
    
  }

  handleUpload(evt):void{
      this.items.itemImage = evt.target.files;
      var files = this.items.itemImage;
      var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
     this.base64textString= btoa(binaryString);
     // console.log(btoa(binaryString));
  }
 
  OnSubmit(){
   this.itemsService.addNewItems(this.items)
   .subscribe(
    data => {
      console.log(JSON.stringify(data))
    },
    error => {
      console.log(JSON.stringify(error))
    });
  }
}

