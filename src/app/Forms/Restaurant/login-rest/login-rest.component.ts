import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../services/Alert.service';
import { RestaurantService } from '../../../services/Restaurant/restaurant.service';
import { Restaurant } from '../../../../Model/Restaurant.component';

@Component({
  selector: 'app-login-rest',
  templateUrl: './login-rest.component.html',
  styleUrls: ['./login-rest.component.css']
})
export class LoginRestComponent implements OnInit {

  restaurant = new Restaurant();
  loading = false;
  returnUrl: string;

  constructor(private restaurantService: RestaurantService,
     private route: ActivatedRoute,
     private router: Router,
     private alertService: AlertService) { }

  ngOnInit() {
      // reset login status
      this.restaurantService.logout();
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


   // tslint:disable-next-line:one-line
   onSubmit(){
    this.loading = true;
    let email = this.restaurant.email;
    let password = this.restaurant.password;
    this.restaurantService.login(email, password);
    this.restaurantService.setIsLoggedIn();
    this.alertService.success('Login successful', true);
    this.router.navigate(['/login.html/username/userRole=3']);
   
  }
}
