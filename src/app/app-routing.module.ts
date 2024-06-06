import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import { ProductsComponent } from './page/products/products.component';
import { StarComponent } from './page/star/star.component';
import {ProductsDetailComponent} from './page/products/products-detail/products-detail.component'
import {NotFoundComponent} from './page/not-found/not-found.component';
import {LoginComponent} from './auth/login/login.component';
import {UnitComponent} from './page/unit/unit.component';
// import {AddProductComponent} from './page/add-product/add-product.component';
import {CreateComponent} from './page/unit/create/create.component';
import { AuthGuard } from './@core/guards/auth.guaeds';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', redirectTo: 'login' , pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: ProductsComponent,
    // children: [
    //   {
    //     path: ':id',
    //     component: ProductsDetailComponent,
    //   },
    // ]
  },
  // {
  //   path: 'start',
  //   component: StarComponent,
  // },
  {
    path: 'products/:id',
    canActivate: [AuthGuard],
    component: ProductsDetailComponent,
  },
  {
    path: 'unit',
    canActivate: [AuthGuard],
    component: UnitComponent,
  },
  {
    path: 'add-product',
    canActivate: [AuthGuard],
    component: CreateComponent,
  },
  {
    path: '**', component: NotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
