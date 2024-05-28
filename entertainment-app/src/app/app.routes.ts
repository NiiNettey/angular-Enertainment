import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'signup', loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent) },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'movies', loadComponent: () => import('./movies/movies.component').then(m => m.MoviesComponent) },
  { path: 'series', loadComponent: () => import('./series/series.component').then(m => m.SeriesComponent) },
  { path: 'favorites', loadComponent: () => import('./favorites/favorites.component').then(m => m.FavoritesComponent) }
];
