import { Component } from '@angular/core';
import { RegisterCustomerService } from './services/Customer/register-customer.service';
import { DashboardService } from './services/dashboard-service';
import { Customer } from '../Model/Customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RegisterCustomerService]
})
export class AppComponent {
  customer: Customer;
  isLogged;
  constructor() { }

  ngOnInit() {
    this.isLogged = this.customer.isLogged;
  }

}
