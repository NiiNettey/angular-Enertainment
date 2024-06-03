import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { TrendingCardComponent } from '../../components/trending-card/trending-card.component';
import { Movie } from '../../Interface/movie';
import { DataService } from '../../services/data.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    FormsModule,
    TrendingCardComponent,
    MovieCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  searchData: string = '';
  trendingMovie: Movie[] = [];
  movie: Movie[] = [];

  constructor(private movies: DataService) {}

  ngOnInit(): void {
    this.movies.getTrendingMovies().subscribe((movie) => {
      this.trendingMovie = movie;
    });

    this.movies.getRemainingMovies().subscribe((movie) => {
      this.movie = movie;
    });
  }

  search() {
    console.log(this.searchData);
  }
}
