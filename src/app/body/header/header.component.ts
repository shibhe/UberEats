import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../../Model/Customer.component';
import { RegisterCustomerService } from '../../services/Customer/register-customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  searchResults: String = '';
  isLogged: boolean;
  customer: Customer;
  email: string;
  //userCredentials = JSON.parse(localStorage.getItem('customer'));
 //public fist:string


  constructor(private registerCustomerService:RegisterCustomerService, private router: Router) { }
 
  ngOnInit() {
     // this.userName:string=userCredentials.userName;
    // this.email = localStorage.getItem('customer');
     this.isLogged = false;
  }

  logout(){
     this.registerCustomerService.logout();
     this.router.navigate(['/login.html']);
     this.isLogged = true;
  }
}
