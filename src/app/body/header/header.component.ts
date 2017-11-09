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
  public isLogged: boolean;
  // customer: Customer;
  public firstName: string;
  public lastName: string;
 
  constructor(private registerCustomerService:RegisterCustomerService,
     private router: Router, 
     private route: ActivatedRoute) {
    this.isLogged = this.registerCustomerService.getIsLoggedIn();
    }
 
  ngOnInit() {
    this.firstName = sessionStorage.getItem("firstName");
    this.lastName = sessionStorage.getItem("lastName");
  }

  logout(){
     this.registerCustomerService.logout();
     this.router.navigate(['/login.html']);
     this.isLogged = false;
     this.firstName = "";
     this.lastName = "";
  }
}
