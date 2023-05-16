import { Route } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { BudgetComponent } from './budget/budget.component';
import { LinkComponent } from './link/link.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'auth/register', component: RegisterComponent },
      { path: 'auth/login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'budget', component: BudgetComponent },
      { path: 'link', component: LinkComponent },
    ],
  },
];
