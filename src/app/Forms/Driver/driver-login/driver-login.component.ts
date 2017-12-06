import { Component, OnInit } from '@angular/core';
import { Driver } from '../../../../Model/Driver.component';
import { DriverService } from '../../../services/Driver/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css']
})
export class DriverLoginComponent implements OnInit {

  driver = new Driver();
  loading = false;
  
  
  constructor( private driverService: DriverService,
   private router: Router) { }

  ngOnInit() {
     // reset login status
     this.driverService.logout();
  }

  onSubmit(){
    this.loading = true;
    let email = this.driver.email;
    let password = this.driver.password;
    this.driverService.login(email, password)
    .subscribe((data) =>
    {
        if (data.status == 404){
          alert("Invalid username or password");
        }
        else if (data.status == 500) {
            alert("Please check your internet connection and try again later");
        }
        else{
          this.driverService.setIsLoggedIn();
          sessionStorage.setItem("id", data.id);
          sessionStorage.setItem("firstName", data.firstName);
          sessionStorage.setItem("lastName", data.lastName);
          sessionStorage.setItem("email", data.email);
          sessionStorage.setItem("password", data.password);
          sessionStorage.setItem("transportType", data.transportType);
          alert('Login successful');
          this.router.navigate(['/login.html/username/userRole=2']);        }
    });

  }
}
