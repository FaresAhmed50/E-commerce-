import { Routes } from '@angular/router';
import {AuthLayoutComponent} from './Core/Layout/auth-layout/auth-layout.component';

export const routes: Routes = [

  { path: 'auth', component: AuthLayoutComponent , children: [
      {path: '' , loadComponent: () => import('./Core/Pages/register/register.component').then(c => c.RegisterComponent)},
      {path:'login', loadComponent: () => import('./Core/Pages/login/login.component').then(c => c.LoginComponent)},
    ]
  },
  {path:'' , loadComponent: () => import('./Core/Pages/login/login.component').then(c => c.LoginComponent)},
  {path:'home' , loadComponent: () => import('./Feature/Pages/home/home.component').then(c => c.HomeComponent)},
  {path:'shop' , loadComponent: () => import('./Feature/Pages/shop/shop.component').then(c => c.ShopComponent)},
  {path:'products' , loadComponent: () => import('./Feature/Pages/products/products.component').then(c => c.ProductsComponent)},
  {path:'contact-us' , loadComponent: () => import('./Feature/Pages/contact-us/contact-us.component').then(c => c.ContactUsComponent)},
  {path:'wishlist' , loadComponent: () => import('./Feature/Pages/wish-list/wish-list.component').then(c => c.WishListComponent)},
  {path:'cart' ,loadComponent: () => import('./Feature/Pages/cart/cart.component').then(c => c.CartComponent) },



  {path:'**' , loadComponent: () => import('./Core/Pages/not-found/not-found.component').then(c => c.NotFoundComponent)},


];
