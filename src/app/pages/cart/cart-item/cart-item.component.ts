import { Component, input, output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
   <li class="p-8 shadow-lg rounded-xl flex gap-2 items-center">
      <img [src]="item().image" [alt]="item().title" class="block w-[50px] h-[50px] object-contain rounded-md">
      <div class="flex-grow">
        <h5 class="text-lg font-semibold">
          {{ item().title }}
        </h5>
        <p>{{item().price}}</p>
      </div>
      <app-button label="Remove" variant="secondary" (onClick)="this.onItemRemove.emit(item().id)" />
    </li>
  `,
  styles: ``
})
export class CartItemComponent {
  item = input.required<Product>();

  onItemRemove = output<number>();
}
