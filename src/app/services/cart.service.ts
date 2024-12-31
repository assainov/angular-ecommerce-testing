import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = signal<Product[]>([]);

  total = computed(() => {
    return this.items().reduce((total, item) => total + item.price, 0);
  });

  constructor() { }

  addToCart(product: Product) {
    this.items.update((products) => [...products, product]);
  }

  removeFromCart(productId: number) {
    this.items.update((products) => products.filter((product) => product.id !== productId));
  }
}
