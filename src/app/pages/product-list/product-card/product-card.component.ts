import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col relative">
      <img class="w-32 h-32 object-contain object-center mx-auto" [src]="product().image" alt="product image" />
      <div class="flex flex-col">
        <h3 class="text-lg font-semibold mt-4 line-clamp-3 min-h-[84px]">{{ product().title }}</h3>
        <p class="text-slate-700 font-bold mt-2">{{ '$' + product().price }}</p>
      </div>
      <app-button label="Add to Cart" class='mt-3' (onClick)="onAddToCartClick()" />
      <span class="absolute top-4 right-6">
        <p class="text-sm font-semibold" [class]="product().stock ? 'text-green-600' : 'text-red-500'">
          @if (product().stock) {
            {{ product().stock }} left
          } @else {
            Out of stock
          }
        </p>
      </span>
    </div>
  `,
  styles: `
  `
})
export class ProductCardComponent {
  product = input.required<Product>();

  cartService = inject(CartService);

  notification = inject(NzNotificationService);

  onAddToCartClick = () => {
    this.cartService.addToCart(this.product());
    this.createNotification('success');
  }

  createNotification(type: string): void {
    this.notification.create(
      type,
      'Success',
      'Item added to cart',
      {
        nzDuration: 1000
      }
    );
  }
}
