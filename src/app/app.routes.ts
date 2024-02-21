import { Routes } from '@angular/router';
import { LoginComponent } from './auth/ui/login/login.component';
import { HomeComponent } from './home/ui/home/home.component';
import { AuthGuard } from './auth/application/AuthGuard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
