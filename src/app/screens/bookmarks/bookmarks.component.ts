import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Movie } from '../../Interface/movie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieCardComponent, NavBarComponent],
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarkedMovies$: Observable<Movie[]> = of([]);
  searchData: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.bookmarkedMovies$ = this.dataService.getBookmarks();
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
