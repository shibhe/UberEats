import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Customer } from '../../../Model/Customer.component';


@Injectable()
export class RegisterCustomerService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost/ubereats';
  private isLoggedIn;
  public userData = new Customer();

  constructor(private http: Http) {
    this.isLoggedIn = true;
  }

  getCustomerData(){
    return this.userData
  }

  postNewCustomer(customer: Customer) {
    return this.http.post(`${this.BASE_URL}/addCustomer.php`, customer, { headers: this.headers })
    .map((data) => console.log(JSON.stringify(data)));
  }

login(email: string, password: string) {
    return this.http.post(`${this.BASE_URL}/login.php`, {email: email, password: password}, { headers: this.headers })
    .map(res => res.json())
    .subscribe((custData) =>
    {
      if (custData.success === "true"){
        sessionStorage.setItem("firstName", custData.firstName);
        sessionStorage.setItem("lastName", custData.lastName);
        sessionStorage.setItem("id", custData.id);
        sessionStorage.setItem("email", custData.email);
        alert(custData.message + " " + custData.firstName);
        sessionStorage.setItem("success", custData.success);
      }
      else if (custData.status == 0){
        alert("Please check your internet connection or maybe the server is donw");
      }
    });
  }

  logout() {
      // remove user from local storage to log user out
      sessionStorage.clear();
  }

  setIsLoggedIn(){
    this.isLoggedIn = true;
  }
  
  getIsLoggedIn(){
    return this.isLoggedIn;
  }

}
