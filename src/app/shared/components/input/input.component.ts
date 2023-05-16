import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eztrack-input',
  standalone: true,
  imports: [CommonModule],
  template: `<p>input works!</p>`,
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent {}
