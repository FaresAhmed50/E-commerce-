import {Routes} from '@angular/router';
import {AuthLayoutComponent} from './Core/Layout/auth-layout/auth-layout.component';
import {authGuard} from './Core/Gaurds/auth/auth.guard';
import {loginUSerGuard} from './Core/Gaurds/user/login-user.guard';

export const routes: Routes = [

  { path: 'auth', canActivate:[loginUSerGuard] , component: AuthLayoutComponent , children: [
      {path: '' , canActivate:[loginUSerGuard] , loadComponent: () => import('./Core/Pages/register/register.component').then(c => c.RegisterComponent)},
      {path:'login' , canActivate:[loginUSerGuard] , loadComponent: () => import('./Core/Pages/login/login.component').then(c => c.LoginComponent)},
      {path:'register' , canActivate:[loginUSerGuard] , loadComponent:() => import('./Core/Pages/register/register.component').then(c => c.RegisterComponent)},
    ]
  },
  {path:'' , canActivate:[loginUSerGuard] , loadComponent: () => import('./Core/Pages/login/login.component').then(c => c.LoginComponent)},
  {path:'home' , canActivate:[authGuard]  , loadComponent: () => import('./Feature/Pages/home/home.component').then(c => c.HomeComponent)},
  {path:'shop' , canActivate:[authGuard] ,  loadComponent: () => import('./Feature/Pages/shop/shop.component').then(c => c.ShopComponent)},
  {path:'products' , canActivate:[authGuard] , loadComponent: () => import('./Feature/Pages/products/products.component').then(c => c.ProductsComponent)},
  {path:'contact-us' , canActivate:[authGuard] , loadComponent: () => import('./Feature/Pages/contact-us/contact-us.component').then(c => c.ContactUsComponent)},
  {path:'wishlist' , canActivate:[authGuard] , loadComponent: () => import('./Feature/Pages/wish-list/wish-list.component').then(c => c.WishListComponent)},
  {path:'cart' , canActivate:[authGuard] ,loadComponent: () => import('./Feature/Pages/cart/cart.component').then(c => c.CartComponent) },
  {path:'userprofile' , canActivate:[authGuard]  , loadComponent: () => import('./Feature/Pages/user-profile/user-profile.component').then(c => c.UserProfileComponent)},



  {path:'**' , loadComponent: () => import('./Core/Pages/not-found/not-found.component').then(c => c.NotFoundComponent)},


];
