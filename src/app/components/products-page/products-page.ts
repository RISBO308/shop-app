import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductList],
  template: `
    <section class="products-page">
      <h1>Nos produits</h1>
      <app-product-list></app-product-list>
    </section>
  `,
  styles: `
    .products-page {
      padding: 2rem 1rem 3rem;
    }

    .products-page h1 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #231d2d;
      font-size: 2rem;
    }
  `,
})
export class ProductsPage {}
