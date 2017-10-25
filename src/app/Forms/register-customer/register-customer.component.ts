import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {


  constructor() { }



  ngOnInit() {
  }
}

 /** interface ICustomer {
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
  postNewCustomer(): void;
}**/
