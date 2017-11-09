import { Component, OnInit } from '@angular/core';
import { RegisterCustomerService } from '../../services/Customer/register-customer.service';
import { Customer } from '../../../Model/Customer.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard-service';
import { AlertService } from '../../services/Alert.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  customer = new Customer();
  loading = false;

  constructor(private userService: RegisterCustomerService,
    private router: Router,
    private alertService: AlertService,) { }

  ngOnInit() {

  }

  OnSubmit() {
     this.loading = true;
     this.userService.postNewCustomer(this.customer)
         .subscribe(
             data => {
                 this.alertService.success('Registration successful', true);
                 this.router.navigate(['/login.html']);
                 this.customer = new Customer();
             },
             error => {
                 this.alertService.error(error);
                 this.loading = false;
             });
  }
}
