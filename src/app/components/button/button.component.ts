import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button (click)="onClick.emit()" class="w-full px-5 py-2 rounded-xl shadown-md hover:opacity-90" [class]="variant() === 'primary' ? 'bg-blue-500 text-white' : 'bg-white text-black border'">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input('Button');

  variant = input<'primary' | 'secondary'>('primary');

  onClick = output();
}
