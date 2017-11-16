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
import { UpcomingComponent } from './Dashboard/Driver/Driver/upcoming/upcoming.component';
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
import { RegisterDriverComponent } from './Forms/register-driver/register-driver.component';
import { AuthGuard } from './Auth/auth.guard';
import { RestaurantService } from './services/Restaurant/restaurant.service';

//Google Maps
import { AgmCoreModule } from '@agm/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { OrderConfirmationComponent } from './Dashboard/Customer/order-confirmation/order-confirmation.component';
import { CheckoutComponent } from './Dashboard/Customer/checkout/checkout.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductsService } from './services/products.service';
import { LocalStorageServie, StorageService } from './services/Storage.service';
import { CachcingServiceBase } from './services/catching.service';
import { ShoppingCartComponent } from './Dashboard/Customer/shopping-cart/shopping-cart.component';
=======
=======
>>>>>>> parent of a520a2f... sdfdf

>>>>>>> parent of a520a2f... sdfdf

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
    UpcomingComponent,
    RestaurantComponent,
    AddItemsComponent,
    ViewOrdersComponent,
    RegisterDriverComponent,
    RegisterRestaurantComponent,
    LoginRestComponent,
    OrderConfirmationComponent,
    CheckoutComponent,
    ShoppingCartComponent,
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
         path: 'home.html', component: MainComponent
      },
      {
        path: 'login/username/userRole=1', component: CustomerComponent,
        canActivate: [AuthGuard] 
     },
     {
         path: 'login.html/username/userRole=2', component: DriverComponent,
         canActivate: [AuthGuard] 
      },
      {
        path: 'login.html/username/userRole=3',
         component: RestaurantComponent,
         canActivate: [AuthGuard] 
     },
     {
       path: 'driver.html',
       component: RegisterDriverComponent
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
     }
    ]),
  HttpModule ],
  providers: [
    RegisterCustomerService,
    AlertService,
    AuthenticationService,
    AuthGuard,
<<<<<<< HEAD
<<<<<<< HEAD
    RestaurantService,
    ShoppingCartService,
    ProductsService,
    { provide: StorageService, useClass: LocalStorageServie }
    
=======
    RestaurantService
>>>>>>> parent of a520a2f... sdfdf
=======
    RestaurantService
>>>>>>> parent of a520a2f... sdfdf
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
