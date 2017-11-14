import { Component, OnInit } from '@angular/core';
import { Items } from '../../../../Model/Items.component';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  public items: Items[] = [];

  constructor() { }

  ngOnInit() {
  }

}
