
import { RouteModule } from './models/route/route.module';
import { MaterialModule } from './models/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserloginComponent } from './comp/userlogin/userlogin.component';
import { UserdetailsComponent } from './comp/userdetails/userdetails.component';
import { UserregisterComponent } from './comp/userregister/userregister.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataSerivces } from './services/data.service';
import { AuthInterceptor} from './services/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UserdetailsComponent,
    UserregisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouteModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataSerivces,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
