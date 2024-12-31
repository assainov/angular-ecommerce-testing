import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from "./product-card/product-card.component";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, NzSkeletonModule],
  template: `
  @if (products().length === 0) {
    <div class="p-8 grid grid-cols-2 gap-2">
      @for(skeleton of skeletonItems; track $index) {
        <div class="border rounded-lg p-4 shadow-md">
          <nz-skeleton [nzActive]="true" />
          <nz-skeleton [nzActive]="true" />
        </div>
      }
    </div>
  } @else {
    <div class="p-8 grid grid-cols-2 gap-2">
      @for (product of products(); track product.id) {
        <app-product-card [product]="product" />
      }
    </div>
  }
  `,
  styles: ``
})
export class ProductListComponent {

  async ngOnInit() {
    const response = await fetch('https://fakestoreapi.com/products/category/electronics');

    const products = await response.json();

    this.products.set(products);
  }

  products = signal<Product[]>([])

  skeletonItems = Array(5).fill(0);
}
