import { Component, OnInit } from '@angular/core';
import { NumberOfItems } from '../../../Model/NumberOfItems';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {


  count:  Number = 12;
  constructor() { }

  ngOnInit() {
  }

}
