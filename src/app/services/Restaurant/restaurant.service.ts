import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Restaurant } from '../../../Model/Restaurant.component';


@Injectable()
export class RestaurantService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost:61297';
  public isLoggedIn;

  constructor(private http: Http) { }


  postNewRestaurant(restaurant: Restaurant){
    return this.http.post(`${this.BASE_URL}/api/Restaurants`, restaurant, { headers: this.headers})
    .map((data) => console.log(JSON.stringify(data)));
  }

  login(email: string, password: string) {
    return this.http.post(`${this.BASE_URL}/api/Restaurants?email=${email}&password=${password}`, {email: email, password: password}, { headers: this.headers })
    .map(res => res.json())
    .subscribe((data) =>
    {
        sessionStorage.setItem("id", data.Id);
        sessionStorage.setItem("firstName", data.firstName);
        sessionStorage.setItem("lastName", data.lastName);
        sessionStorage.setItem("email", data.email);
        sessionStorage.setItem("password", data.password);
    });
  }

  updateRestDetails(id: number, restaurant: Restaurant){
    return this.http.put(`${this.BASE_URL}/api/Restaurants/${id}`, restaurant, { headers: this.headers })
    .map((results: Response) => results.json());
  }

  viewRestDetails(){
    return this.http.get(`${this.BASE_URL}/api/Restaurant`)
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
