import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Customer } from '../../../Model/Customer.component';
import { DashboardService } from '../dashboard-service';

@Injectable()
export class RegisterCustomerService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'https://uncreditable-window.000webhostapp.com';

  constructor(private http: Http, private dashboardService: DashboardService) { }

  postNewCustomer(customer: Customer) {
    return this.http.post(`${this.BASE_URL}/addCustomer.php`, customer, { headers: this.headers })
    .map((data) => console.log(JSON.stringify(data)));
  }

    login(username: string, password: string) {
      return this.http.post(`${this.BASE_URL}/login.php`, JSON.stringify({ username: username, password: password }), { headers: this.headers })
          .map((response: Response) => {
              let user = response.json();
              if (user && user.token) {
                  localStorage.setItem('email', JSON.stringify(user));
              }
          });
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('email');
  }
}
