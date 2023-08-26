import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `https://cpsu-test-api.herokuapp.com/api/camt2023
		/shows`;
  }

  getMovie(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + 'movies');
  }
}
