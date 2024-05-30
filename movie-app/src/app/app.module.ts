// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TrendingComponent } from './components/trending/trending.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { BookmarkedComponent } from './components/bookmarked/bookmarked.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TrendingComponent,
    RecommendedComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
