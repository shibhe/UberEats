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

  handleUpload(evt): void{
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
        var reader = new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;
      this.base64textString= btoa(binaryString);
      console.log(btoa(binaryString));
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

