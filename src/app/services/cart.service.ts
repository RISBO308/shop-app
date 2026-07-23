import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public readonly cartCount = signal(0);

  public increment(): void {
    this.cartCount.update((value) => value + 1);
  }

  public decrement(): void {
    this.cartCount.update((value) => Math.max(0, value - 1));
  }
}
