import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './page/products/products.component';
import { StarComponent } from './page/star/star.component';
import { DialogComponent } from './page/products/dialog.component';
import { ProductsDetailComponent } from './page/products/products-detail/products-detail.component';
import { HeaderComponent } from './page/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { NotFoundComponent } from './page/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StarComponent,
    DialogComponent,
    ProductsDetailComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent
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
