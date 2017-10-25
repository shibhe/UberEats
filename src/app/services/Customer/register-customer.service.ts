import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RegisterCustomerService {

  constructor(private http: Http) { }

  postNewCustomer(customer){}

  deleteCustomer(id){}

  updateCustomer(customer){}

}
