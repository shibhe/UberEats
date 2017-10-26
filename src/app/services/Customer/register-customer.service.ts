import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterCustomerService {

  POST_CUSTOMER_URL = 'http://192.168.2.39/UberEats/addCustomer.php';

  constructor(private http: Http) { }

  postNewCustomer(customer){ 
     return this.http.post(this.POST_CUSTOMER_URL, customer).map(req => req.json());
  }

  deleteCustomer(id){
    return this.http.delete(this.POST_CUSTOMER_URL + '/' + id).toPromise()
      .then()
      .catch();
   }

  updateCustomer(customer){ 
    return this.http.put(this.POST_CUSTOMER_URL, customer).toPromise()
      .then()
      .catch();
  }

  getAllCustomers(){ 
    return this.http.get(this.POST_CUSTOMER_URL).subscribe((data) => console.log(data));
  }

  getCustomer(id){ 
    return this.http.get(this.POST_CUSTOMER_URL + '/' + id).subscribe((data) => console.log(data));
  }
}
