import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/components/button/button.component';

@Component({
  selector: 'eztrack-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
