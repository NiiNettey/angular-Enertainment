// src/app/models/data.ts
import { Movie } from './movie';

export interface Data {
  trending: Movie[];
  recommended: Movie[];
  movies: Movie[];
  tvSeries: Movie[];
}
