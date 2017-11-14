import { Customer } from '../../../Model/Customer.component';
import { RegisterCustomerService } from '../../services/Customer/register-customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { RestaurantService } from '../../services/Restaurant/restaurant.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  searchResults: String = '';
  public isLogged: boolean;
  // customer: Customer;
  public firstName: string;
  public lastName: string;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;
 
  constructor(private registerCustomerService:RegisterCustomerService,
     private router: Router, 
     private route: ActivatedRoute,
     private mapsAPILoader: MapsAPILoader,
     private ngZone: NgZone,
     private restaurantService:RestaurantService) {
     this.isLogged = this.registerCustomerService.getIsLoggedIn();
     console.log("status:", this.isLogged);
    }
 
  ngOnInit() {
    this.firstName = sessionStorage.getItem("firstName");
    this.lastName = sessionStorage.getItem("lastName");

     //set google maps defaults
     this.zoom = 4;
     this.latitude = 39.8282;
     this.longitude = -98.5795;
 
     //create search FormControl
     this.searchControl = new FormControl();
 
     //set current position
     this.setCurrentPosition();
 
     //load Places Autocomplete
     this.mapsAPILoader.load().then(() => {
       let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
         types: ["address"]
       });
       autocomplete.addListener("place_changed", () => {
         this.ngZone.run(() => {
           //get the place result
           let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
           //verify result
           if (place.geometry === undefined || place.geometry === null) {
             return;
           }
 
           //set latitude, longitude and zoom
           this.latitude = place.geometry.location.lat();
           this.longitude = place.geometry.location.lng();
           this.zoom = 12;
         });
       });
     });
  }

  logout(){
     this.registerCustomerService.logout();
     this.isLogged = false;
     this.firstName = "";
     this.lastName = "";
     this.router.navigate(['/login.html']);
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
