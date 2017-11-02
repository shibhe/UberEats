import { Component, OnInit } from '@angular/core';
import { RegisterCustomerService } from '../../services/Customer/register-customer.service';
import { Customer } from '../../../Model/Customer.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer = new Customer();
  constructor(private service: RegisterCustomerService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:one-line
  onSubmit(){
    this.service.customerLogIn(this.customer);
<<<<<<< HEAD
=======
    alert('Successfully Logged in');
    this.customer = new Customer();
>>>>>>> c688d357639c243ba19dc462cd6a8d3e8b96f4b3
  }
}
