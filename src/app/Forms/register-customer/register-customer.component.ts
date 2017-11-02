import { Component, OnInit } from '@angular/core';
import { RegisterCustomerService } from '../../services/Customer/register-customer.service';
import { Customer } from '../../../Model/Customer.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  customer = new Customer();
  constructor(private service: RegisterCustomerService) { }

  ngOnInit() {
  }

  OnSubmit() {
    console.log(this.customer);
      this.service.postNewCustomer(this.customer);
<<<<<<< HEAD
=======
      // alert('Successfully added ');
      // this.customer = new Customer();
>>>>>>> c688d357639c243ba19dc462cd6a8d3e8b96f4b3
  }
}
