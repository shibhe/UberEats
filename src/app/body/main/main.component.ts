import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../Model/Customer.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  customer: Customer;
  isLogged;
  constructor() { }

  ngOnInit() {
    this.isLogged = this.customer.isLogged;
  }

}
