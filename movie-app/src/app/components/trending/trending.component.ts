// src/app/components/trending/trending.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trending: Movie[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.trending = data.trending;
    });
  }
}
