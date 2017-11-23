import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { Order } from '../../../../Model/OrderCart';
import { CartService } from '../../../services/cart-service/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public creditCard;
  public CVV;
  public expiryDate: string;
  public Address;
  public order = new Order();

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  public total: string = '';

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private cartService: CartService) { }

  ngOnInit() {
    this.creditCard = sessionStorage.getItem("creditCard")
    this.CVV = sessionStorage.getItem("CVV")
    this.expiryDate = sessionStorage.getItem("expiryDate")
    this.expiryDate = this.expiryDate.replace("T00:00:00", "");
    this.total = sessionStorage.getItem("total");
   
  
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
      
        this.order.address = place.name;
        alert(this.Address);
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
  confirmCheckout(){
    this.cartService.PlaceOrder(this.order)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
          console.log(error);
      });
    this.router.navigate(['/login/username/userRole=1/order/check-out/payment/confirm-cart']);
  }
}
