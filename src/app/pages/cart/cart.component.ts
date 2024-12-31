import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent, NzEmptyModule],
  template: `
    <main class="p-8">
      <h1 class="text-2xl mb-2">Shopping Cart</h1>
      @if (cartService.items().length === 0) {
        <nz-empty nzNotFoundImage="simple"></nz-empty>
      } @else {
        <ul class="flex flex-col gap-2">
          @for (item of cartService.items(); track item.id) {
            <app-cart-item [item]="item" (onItemRemove)="this.cartService.removeFromCart($event)" />
          }
        </ul>
        <app-order-summary />
      }
    </main>
  `,
  styles: ``
})
export class CartComponent {
  cartService = inject(CartService);
}
