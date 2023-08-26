import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class MovieRepository {
  private movies: Movie[] = [];
  private theaters: number[] = [];
  private showTimes: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    this.dataSource.getMovies().subscribe((data) => {
      this.movies = data;
      this.theaters = data
        .map((m) => m.theater ?? 0)
        .filter((c, index, array) => array.indexOf(c) === index)
        .sort();
      this.showTimes = data
        .map((m) => m.showTime ?? '(None)')
        .filter((c, index, array) => array.indexOf(c) === index)
        .sort();
    });
  }

  getMovies(theater?: number): Movie[] {
    return this.movies.filter(
      (m) => theater == undefined || theater == m.theater
    );
  }

  getMovie(id: number): Movie | undefined {
    return this.movies.find((m) => m.id == id);
  }

  getTheater(): number[] {
    return this.theaters;
  }

  getShowTime(): string[] {
    return this.showTimes;
  }
}
