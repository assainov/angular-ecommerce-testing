import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-order-summary',
  imports: [ButtonComponent],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border mt-10 flex flex-col gap-4">
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <span class="text-lg">Total</span>
          <span>{{'$' + this.cartService.total()}}</span>
        </div>
      </div>
      <app-button label="Proceed to Checkout" variant="primary" />
    </div>
  `,
  styles: ``
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
}
