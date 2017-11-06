import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../Model/Customer.component';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  customer: Customer;
  userRole;

  constructor() { }

  ngOnInit() {
    this.userRole = this.customer.userRole;
  }
}
