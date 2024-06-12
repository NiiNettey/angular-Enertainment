import { Component, NgModule, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FormsModule, NgModel } from '@angular/forms';
import { Movie } from '../../Interface/movie';
import { DataService } from '../../services/data.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [NavBarComponent, FormsModule, MovieCardComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent implements OnInit {
  searchData: string = '';
  movie: Movie[] = [];

  constructor(private movies: DataService) {}

  ngOnInit(): void {
    this.movies.getSeries().subscribe((movie) => {
      this.movie = movie;
    });
  }

  search(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.searchData = query;
    localStorage.setItem('searchData', this.searchData);
  }


  filterMovies(movies: Movie[]): Movie[] {
    if (!this.searchData) {
      return movies;
    }
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.searchData.toLowerCase().trim())
    );
  }
}
