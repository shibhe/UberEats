import { Component, OnInit } from '@angular/core';
import { RegisterCustomerService } from '../../services/Customer/register-customer.service';
import { Customer } from '../../../Model/Customer.component';
import { DashboardService } from '../../services/dashboard-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer = new Customer();
  constructor(private service: RegisterCustomerService, private DashboardService: DashboardService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:one-line
  onSubmit(){
    this.service.customerLogIn(this.customer);
    alert('Successfully Logged in');
    this.customer = new Customer();
    this.DashboardService.hideDashboard = false;
  }
}
