import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  selector: 'eztrack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eztrack';
}
