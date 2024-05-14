import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lab2Component } from './page/lab2/lab2.component';
import { Lab3Component } from './page/lab3/lab3.component';

@NgModule({
  declarations: [
    AppComponent,
    Lab2Component,
    Lab3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
