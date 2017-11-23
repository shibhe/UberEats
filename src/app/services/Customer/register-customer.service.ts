import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Customer } from '../../../Model/Customer.component';


@Injectable()
export class RegisterCustomerService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost:61297';
  private isLoggedIn;

  constructor(private http: Http) {
    this.isLoggedIn = true;
  }

  postNewCustomer(customer: Customer) {
    return this.http.post(`${this.BASE_URL}/api/Customers`, customer, { headers: this.headers })
     .map((data) => console.log(JSON.stringify(data)));
  }

login(email: string, password: string) {
    return this.http.post(`${this.BASE_URL}/api/Customers?email=${email}&password=${password}`, {email: email, password: password}, { headers: this.headers})
    .map(res => res.json())
    .subscribe((data) =>
    {
        sessionStorage.setItem("id", data.id);
        sessionStorage.setItem("firstName", data.firstName);
        sessionStorage.setItem("lastName", data.lastName);
        sessionStorage.setItem("email", data.email);
        sessionStorage.setItem("password", data.password);
        sessionStorage.setItem("creditCard", data.creditCard)
        sessionStorage.setItem("CVV", data.CVV)
        sessionStorage.setItem("expiryDate", data.expiryDate)
    });
}

  updateRestDetails(id: number, customer: Customer){
    return this.http.put(`${this.BASE_URL}/api/Customers/${id}`, customer, { headers: this.headers })
    .map((results: Response) => results.json());
  }

  viewRestDetails(){
    return this.http.get(`${this.BASE_URL}/api/Customers`)
    .map((results: Response) => results.json());
  }

  logout() {
      sessionStorage.clear();
  }

  setIsLoggedIn(){
    this.isLoggedIn = true;
  }
  
  getIsLoggedIn(){
    return this.isLoggedIn;
  }

}
