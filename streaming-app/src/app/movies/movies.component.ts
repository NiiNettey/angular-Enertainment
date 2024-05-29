import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="search-bar">
      <input [(ngModel)]="searchQuery" (input)="search()" placeholder="Search for movies">
    </div>
    <div class="content">
      <div class="items">
        <div *ngFor="let item of movies" class="item">
          <img [src]="item.thumbnail.regular.small" [alt]="item.title">
          <p>{{ item.title }} ({{ item.year }})</p>
          <p>Rating: {{ item.rating }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .search-bar {
      margin-bottom: 20px;
    }
    .search-bar input {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: none;
    }
    .content .items {
      display: flex;
      flex-wrap: wrap;
    }
    .item {
      background-color: #3a3a3c;
      margin: 10px;
      padding: 10px;
      border-radius: 8px;
      width: calc(25% - 40px);
      box-sizing: border-box;
      text-align: center;
    }
    .item img {
      width: 100%;
      border-radius: 8px;
    }
  `]
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  searchQuery: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.movies = data.filter((item: { category: string; }) => item.category === 'Movie');
    });
  }

  search(): void {
    const query = this.searchQuery.toLowerCase();
    this.movies = this.movies.filter(item => item.title.toLowerCase().includes(query));
  }
}
