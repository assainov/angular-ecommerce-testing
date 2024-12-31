import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductListComponent,
    title: 'Angular Ecommerce'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart'
  },
];
