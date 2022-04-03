import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetRequestComponent } from './get-request/get-request.component';
import { GetApisComponent } from './get-apis/get-apis.component';

import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { RandomUserComponent } from './random-user/random-user.component';
import { JustFieldsComponent } from './just-fields/just-fields.component';





@NgModule({
  declarations: [
    AppComponent,
    GetRequestComponent,
    GetApisComponent,
    RandomUserComponent,
    JustFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
