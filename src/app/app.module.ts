import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Interceptor } from "./services/interceptor";
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './client/about/about.component';
import { ShopComponent } from './client/shop/shop.component';
import { NavbarComponent } from "./navigation/navbar/navbar.component";
import { SidenavComponent } from "./navigation/sidenav/sidenav.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    DashboardComponent,
    AboutComponent,
    ShopComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
