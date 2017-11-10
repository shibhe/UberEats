import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addItems(){
    this.router.navigate(['/login.html/username/role=3/addItems'])
  }
}
