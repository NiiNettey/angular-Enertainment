import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { HomeComponent } from './screens/home/home.component';
import { MoviesComponent } from './screens/movies/movies.component';
import { SeriesComponent } from './screens/series/series.component';
import { BookmarksComponent } from './screens/bookmarks/bookmarks.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent,
  },
];
