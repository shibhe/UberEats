import { Router, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Restaurant } from '../../../../Model/Restaurant.component';
import { RestaurantService } from '../../../services/Restaurant/restaurant.service';
import { AlertService } from '../../../services/Alert.service';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {
  restaurant = new Restaurant();
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  loading = false;
  

  @ViewChild("city")
  public searchElementRef: ElementRef;
 
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  private restaurantService: RestaurantService,
  private router: Router,
  private alertService: AlertService) { }

  ngOnInit() {

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
          this.restaurant.city = place.name;
        });
      });
    });
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

  OnSubmit(){
    this.loading = true;
    this.restaurantService.postNewRestaurant(this.restaurant)
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/rest-login.html']);
                //this.restaurant = new Restaurant();
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }
}
