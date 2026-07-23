import { Routes } from '@angular/router';
import { ProductsPage } from './components/products-page/products-page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/container/container').then((m) => m.Container),
  },
  {
    path: 'products',
    component: ProductsPage,
  },
];
