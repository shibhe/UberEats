import { Component, OnInit } from '@angular/core';
import { RegisterCustomerService } from '../../services/Customer/register-customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  isLogged;

  constructor(private registerCustomerService:RegisterCustomerService,
  private router: Router) { }

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
