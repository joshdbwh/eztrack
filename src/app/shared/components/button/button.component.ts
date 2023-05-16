import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'eztrack-button',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  template: ` <button
    mat-raised-button
    [ngClass]="type"
    [routerLink]="routerLink"
    routerLinkActive="active"
    (click)="handleClick()"
  >
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() type: 'base' | 'nav' | 'submit' = 'submit';
  @Input() routerLink: string[] | string = [];
  @Output() clickEvent = new EventEmitter<void>();

  handleClick(): void {
    this.clickEvent.emit();
  }
}
