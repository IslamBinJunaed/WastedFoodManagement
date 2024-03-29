import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenets/home/home.component';
import { LoginComponent } from './componenets/login/login.component';
import { NgoRegComponent } from './componenets/ngo-reg/ngo-reg.component';
import { RestaurantRegComponent } from './componenets/restaurant-reg/restaurant-reg.component';
import { NgoHomeComponent } from './componenets/ngo-home/ngo-home.component';
import { AdminHomeComponent } from './componenets/admin-home/admin-home.component';
import { RestaurantHomeComponent } from './componenets/restaurant-home/restaurant-home.component';
import { AdminLoginComponent } from './componenets/admin-login/admin-login.component';
import { RecoverPasswordComponent } from './componenets/recover-password/recover-password.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './services/user.service';
import { AuthGuard } from './auth/auth.guard';
import { NewPasswordComponent } from './componenets/new-password/new-password.component';
import { FormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AvailablePackageComponent } from './componenets/available-package/available-package.component';
import { ResNotificationsComponent } from './componenets/res-notifications/res-notifications.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NgoRegComponent,
    RestaurantRegComponent,
    NgoHomeComponent,
    AdminHomeComponent,
    RestaurantHomeComponent,
    AdminLoginComponent,
    RecoverPasswordComponent,
    NewPasswordComponent,
    AvailablePackageComponent,
    ResNotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    GooglePlaceModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
