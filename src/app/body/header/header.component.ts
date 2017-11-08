import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../../Model/Customer.component';
import { RegisterCustomerService } from '../../services/Customer/register-customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  searchResults: String = '';
  isLogged: boolean = true;
  customer: Customer;
  firstName: string;
  public  lastName;
 
  constructor(private registerCustomerService:RegisterCustomerService,
     private router: Router, 
     private route: ActivatedRoute) { }
 
  ngOnInit() {
     this.firstName = "Joseph";
     this.lastName = "Sibiyaa";
    this.isLogged = this.registerCustomerService.getIsLoggedIn();
    console.log(this.firstName);
  }

  logout(){
     this.registerCustomerService.logout();
     this.router.navigate(['/login.html']);
     this.isLogged = false;
  }
}
