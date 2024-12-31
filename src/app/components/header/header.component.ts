import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ButtonComponent],
  template: `
    <p class="bg-slate-100 px-10 py-3 shadow-md flex justify-between items-center">
      <a routerLink='/' class="text-lg">My Store</a>
      <app-button
        [label]="'Cart (' + cartService.items().length + ')'"
        routerLink="/cart" />
    </p>
  `,
  styles: ``
})
export class HeaderComponent {
  cartService = inject(CartService);
}
