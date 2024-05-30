// src/app/models/movie.ts
export interface Movie {
  id: number;
  title: string;
  year: number;
  type: 'Movie' | 'TV Series';
  rating: string;
  thumbnail: string;
}

