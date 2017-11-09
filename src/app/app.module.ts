import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http, HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { MainComponent } from './body/main/main.component';
import { HeaderComponent } from './body/header/header.component';
import { FooterComponent } from './body/footer/footer.component';
import { TabsComponent } from './other/tabs/tabs.component';
import { RegisterCustomerComponent } from './Forms/register-customer/register-customer.component';

// Materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule, MatSelectModule, MatTabsModule, MatListModule, MatStepperModule, MatDialogModule } from '@angular/material';

// Router
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Forms/login/login.component';

// Services
import { RegisterCustomerService } from './services/Customer/register-customer.service';
import { UserHeaderComponent } from './Dashboard/user-header/user-header.component';
import { CustomerComponent } from './Dashboard/Customer/Body/customer/customer.component';
import { ItemService } from './services/item.service';
import { DriverComponent } from './Dashboard/Driver/driver/driver.component';
import { OrderComponent } from './Dashboard/Driver/Driver/order/order.component';
import { UpcomingComponent } from './Dashboard/Driver/Driver/upcoming/upcoming.component';
import { RestaurantComponent } from './Dashboard/Restaurant/restaurant/restaurant.component';
import { AddItemsComponent } from './Dashboard/Restaurant/add-items/add-items.component';
import { ViewOrdersComponent } from './Dashboard/Restaurant/view-orders/view-orders.component';
import { DashboardService } from './services/dashboard-service';
import { AlertService } from './services/Alert.service';
import { AuthenticationService } from './services/AuthenticateService';
import { RegisterDriverComponent } from './Forms/register-driver/register-driver.component';
import { AuthGuard } from './Auth/auth.guard';
import { RegisterRestaurantComponent } from './Forms/Restaurant/register-restaurant/register-restaurant.component';
import { LoginRestComponent } from './Forms/Restaurant/login-rest/login-rest.component';

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
  ],
  imports: [
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
         path: 'login.html/username/userRole=2', component: DriverComponent
      },
      {
        path: 'login.html/username/userRole=3', component: RestaurantComponent
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
     }
    ]),
  HttpModule ],
  providers: [
    RegisterCustomerService,
    ItemService,
    DashboardService,
    AlertService,
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
