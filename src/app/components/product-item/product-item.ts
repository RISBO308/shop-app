import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../../models/product.models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})

export class ProductItem {
  public product = input.required<Product>();
  public showDescription = signal(false);
  public inCart = signal(false);
  private readonly cartService = inject(CartService);

  public toggleDescription(): void {
    this.showDescription.update((value) => !value);
  }

  public addToCart(): void {
    if (!this.inCart()) {
      this.inCart.set(true);
      this.cartService.increment();
    }
  }

  public removeFromCart(): void {
    if (this.inCart()) {
      this.inCart.set(false);
      this.cartService.decrement();
    }
  }
}
