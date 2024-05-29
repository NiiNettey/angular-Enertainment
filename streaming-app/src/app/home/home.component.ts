import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="search-bar">
      <input [(ngModel)]="searchQuery" (input)="search()" placeholder="Search for movies or TV series">
    </div>
    <div class="content">
      <div class="section">
        <h2>Trending</h2>
        <div class="items">
          <div *ngFor="let item of trendingItems" class="item">
            <img [src]="item.thumbnail.regular.small" [alt]="item.title">
            <p>{{ item.title }} ({{ item.year }})</p>
            <p>Rating: {{ item.rating }}</p>
          </div>
        </div>
      </div>
      <div class="section">
        <h2>Recommended for You</h2>
        <div class="items">
          <div *ngFor="let item of recommendedItems" class="item">
            <img [src]="item.thumbnail.regular.small" [alt]="item.title">
            <p>{{ item.title }} ({{ item.year }})</p>
            <p>Rating: {{ item.rating }}</p>
          </div>
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
export class HomeComponent implements OnInit {
  trendingItems: any[] = [];
  recommendedItems: any[] = [];
  searchQuery: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.trendingItems = data.filter((item: { isTrending: any; }) => item.isTrending);
      this.recommendedItems = data.slice(0, 8);
    });
  }

  search(): void {
    const query = this.searchQuery.toLowerCase();
    this.trendingItems = this.trendingItems.filter(item => item.title.toLowerCase().includes(query));
    this.recommendedItems = this.recommendedItems.filter(item => item.title.toLowerCase().includes(query));
  }
}
