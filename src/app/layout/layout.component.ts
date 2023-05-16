import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonComponent } from '../shared/components/button/button.component';

@Component({
  selector: 'eztrack-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, ButtonComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
