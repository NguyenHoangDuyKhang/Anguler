import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './page/products/products.component';
import { StarComponent } from './page/star/star.component';
import { DialogComponent } from './page/products/dialog.component';
import { ProductsDetailComponent } from './page/products/products-detail/products-detail.component';
import { HeaderComponent } from './page/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './page/unit/create/create.component';
import { EditComponent } from './page/unit/edit/edit.component';
import { DeleteComponent } from './page/unit/delete/delete.component';
import { UnitComponent } from './page/unit/unit.component';
import { PaginatorComponent } from './@theme/component/paginator/paginator.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StarComponent,
    DialogComponent,
    ProductsDetailComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    UnitComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
