import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import { ProductsComponent } from './page/products/products.component';
import { StarComponent } from './page/star/star.component';
import {ProductsDetailComponent} from './page/products/products-detail/products-detail.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    // children: [
    //   {
    //     path: ':id',
    //     component: ProductsDetailComponent,
    //   },
    // ] 
  },
  {
    path: 'start',
    component: StarComponent,
  },
  {
    path: 'products/:id',
    component: ProductsDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
