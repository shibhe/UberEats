import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http, HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { MainComponent } from './body/main/main.component';
import { HeaderComponent } from './body/header/header.component';
import { FooterComponent } from './body/footer/footer.component';
import { TabsComponent } from './other/tabs/tabs.component';
import { RegisterCustomerComponent } from './Forms/register-customer/register-customer.component';
import { RegisterRestaurantComponent } from './Forms/Restaurant/register-restaurant/register-restaurant.component';
import { LoginRestComponent } from './Forms/Restaurant/login-rest/login-rest.component';
import { DriverComponent } from './Dashboard/Driver/driver/driver.component';
import { OrderComponent } from './Dashboard/Driver/Driver/order/order.component';
import { RestaurantComponent } from './Dashboard/Restaurant/restaurant/restaurant.component';
import { AddItemsComponent } from './Dashboard/Restaurant/add-items/add-items.component';
import { ViewOrdersComponent } from './Dashboard/Restaurant/view-orders/view-orders.component';
import { UserHeaderComponent } from './Dashboard/user-header/user-header.component';
import { CustomerComponent } from './Dashboard/Customer/Body/customer/customer.component';

// Materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule, MatSelectModule, MatTabsModule, MatListModule, MatStepperModule, MatDialogModule } from '@angular/material';

// Router
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Forms/login/login.component';

// Services
import { RegisterCustomerService } from './services/Customer/register-customer.service';
import { AlertService } from './services/Alert.service';
import { AuthenticationService } from './services/AuthenticateService';
import { AuthGuard } from './Auth/auth.guard';
import { RestaurantService } from './services/Restaurant/restaurant.service';

//Google Maps
import { AgmCoreModule } from '@agm/core';

//Currency
import { CurrencyPipe } from '@angular/common';



import { ItemsService } from './services/Restaurant/Items/items.service';
import { CheckoutComponent } from './Dashboard/checkout/checkout.component';
import { DriverLoginComponent } from './Forms/Driver/driver-login/driver-login.component';
import { DriverRegisterComponent } from './Forms/Driver/driver-register/driver-register.component';
import { CartService } from './services/cart-service/cart.service';
import { PaymentComponent } from './Dashboard/Customer/payment/payment.component';
import { DriverService } from './services/Driver/driver.service';
import { UpcomingOrdersComponent } from './Dashboard/Driver/up-coming-orders/upcoming-orders/upcoming-orders.component';
import { CartListComponent } from './Dashboard/Customer/cart-list/cart-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    RegisterCustomerComponent,
    LoginComponent,
    UserHeaderComponent,
    CustomerComponent,
    DriverComponent,
    OrderComponent,
    RestaurantComponent,
    AddItemsComponent,
    ViewOrdersComponent,
    RegisterRestaurantComponent,
    LoginRestComponent,
    CheckoutComponent,
    DriverLoginComponent,
    DriverRegisterComponent,
    PaymentComponent,
    UpcomingOrdersComponent,
    CartListComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAFGs7AtYmEHWpxylce1yGopRYBcLeSaQ0",
      libraries: ["places"]
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatStepperModule,
    MatListModule,
    MatDialogModule,
    RouterModule.forRoot([
      {
        path: 'register.html',
        component: RegisterCustomerComponent
      },
      {
        path: 'login.html',
        component: LoginComponent
      },
      {
         path: 'home.html', 
         component: MainComponent
      },
      {
        path: 'login/username/userRole=1', component: CustomerComponent,
        canActivate: [AuthGuard] 
     },
     {
         path: 'login.html/username/userRole=2',
         component: DriverComponent
      },
      {
        path: 'login.html/username/userRole=3',
         component: RestaurantComponent,
     },
     {
       path: 'driver.html',
       component: DriverRegisterComponent
     },
     {
       path: 'Restaurant.html',
       component: RegisterRestaurantComponent
     },
     {
       path: 'rest-login.html',
       component: LoginRestComponent
     },
     {
       path: 'login.html/username/role=3/addItems',
       component: AddItemsComponent
     },
     {
       path: "driver-login.html",
       component: DriverLoginComponent
     },
     {
      path: 'login/username/userRole=1/order/check-out/payment/confirm-cart',
      component: CheckoutComponent
     },
     {
      path: 'login/username/userRole=1/order/check-out/payment',
      component: PaymentComponent
     }
    ]),
  HttpModule ],
  providers: [
    RegisterCustomerService,
    AlertService,
    AuthenticationService,
    AuthGuard,
    RestaurantService,
    ItemsService,
    CartService,
    DriverService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
