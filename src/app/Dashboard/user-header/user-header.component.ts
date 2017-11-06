import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../Model/Customer.component';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  currentUser = Customer;
  AuthUser: Customer[];

  constructor() { 
   this.currentUser = JSON.parse(localStorage.getItem("email"));
  }

  ngOnInit() {
  }

}
