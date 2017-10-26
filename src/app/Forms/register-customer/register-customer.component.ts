import { Component, OnInit } from '@angular/core';
import { RegisterCustomerService } from '../../services/Customer/register-customer.service';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css'],
  providers: [RegisterCustomerService]
})
export class RegisterCustomerComponent implements OnInit {
  customer: Customer;

  customerDetails: Customer[];

  constructor(private service: RegisterCustomerService) { 
    this.customer = new Customer();
  }

  ngOnInit() {
  }

  onSubmit(){
     this.service.postNewCustomer(this.customer);
  }
}


// Model
 class Customer {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  creditCard: string;
  CVV: string;
  expiryDate: Date;
  zipCode: string;
}
