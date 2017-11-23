import { Injectable } from '@angular/core';
import { Driver } from '../../../Model/Driver.component';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class DriverService {

  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost:61297';
  private isLoggedIn;

  constructor(private http: Http) {
    this.isLoggedIn = true;
  }

  postNewDriver(driver: Driver) {
    return this.http.post(`${this.BASE_URL}/api/Drivers`, driver, { headers: this.headers })
    .map((data) => console.log(JSON.stringify(data)));
  }

 login(email: string, password: string) {
    return this.http.post(`${this.BASE_URL}/api/Drivers?email=${email}&password=${password}`, {email: email, password: password}, { headers: this.headers})
    .map(res => res.json())
    .subscribe((data) =>
    {
        sessionStorage.setItem("id", data.id);
        sessionStorage.setItem("firstName", data.firstName);
        sessionStorage.setItem("lastName", data.lastName);
        sessionStorage.setItem("email", data.email);
        sessionStorage.setItem("password", data.password);
        sessionStorage.setItem("transportType", data.transportType);
    });
}

  updateDriverDetails(id: number, driver: Driver){
    return this.http.put(`${this.BASE_URL}/api/Drivers/${id}`, driver, { headers: this.headers })
    .map((results: Response) => results.json());
  }

  viewDriverDetails(){
    return this.http.get(`${this.BASE_URL}/api/Drivers`)
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
