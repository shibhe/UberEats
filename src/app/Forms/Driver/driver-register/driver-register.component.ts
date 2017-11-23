import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { Driver } from '../../../../Model/Driver.component';
import { DriverService } from '../../../services/Driver/driver.service';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.css']
})
export class DriverRegisterComponent implements OnInit {
  loading = false;
  driver = new Driver();
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;
 
  constructor(
     private router: Router, 
     private route: ActivatedRoute,
     private mapsAPILoader: MapsAPILoader,
     private ngZone: NgZone,
     private driverService: DriverService
     ) {
    }
 
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
           this.driver.city = place.name;
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
  
  OnSubmit() {
    this.loading = true;
    this.driverService.postNewDriver(this.driver)
        .subscribe(
            data => {
                this.router.navigate(['/driver-login.html']);
                console.log("Status:", data)
            },
            error => {
              console.log("Status:", error)
                this.loading = false;
            });
 }
}
