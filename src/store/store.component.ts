import { Component } from '@angular/core';
import { Movie } from 'src/model/movie.model';
import { MovieRepository } from 'src/model/movie.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
})
export class StoreComponent {
  selectedTheater: number | undefined;
  selectedPage = 1;

  constructor(private repository: MovieRepository, private router: Router) {}

  get movies(): Movie[] {
    //return this.repository.getMovies();
    //return this.repository.getMovies(this.selectedTheater);
    let pageIndex = this.selectedPage - 1;
    return this.repository
      .getMovies(this.selectedTheater)
      .slice(pageIndex, pageIndex);
  }

  get theaters(): number[] {
    return this.repository.getTheater();
  }

  changeTheater(newTheater?: number) {
    this.selectedTheater = newTheater;
  }

  get showtimes(): string[] {
    return this.repository.getShowTime();
    // const theaters = this.repository.getTheater();
    // const allShowtimes: string[] = [];

    // theaters.forEach((theater) => {
    //   theater.showtimes.forEach((showtime) => {
    //     allShowtimes.push(showtime);
    //   });
    // });

    // return allShowtimes;
  }
}
