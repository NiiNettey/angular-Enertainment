import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { MoviesComponent } from './app/movies/movies.component';
import { SeriesComponent } from './app/series/series.component';
import { FavoritesComponent } from './app/favorites/favorites.component';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'favorites', component: FavoritesComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(RouterModule, HttpClientModule, FormsModule)
  ]
});
