import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
    private movies: Movie[] = [
        new Movie(1, "11:15", 1, ["A7","A8","A9","B10","B11"]),
        new Movie(2, "14:00",1,["B2","B4","B5","B6","C8"]),
        new Movie(3, "16:45",1,["A7","A8","A9","B10","B11"]),
        new Movie(4, "19:30",1,["B2","B4","B5","B6","C8"]),
        new Movie(5, "11:45",2,["A7","A8","A9","B10","B11"]),
        new Movie(6, "14:15",2,["B2","B4","B5","B6","C8"]),
        new Movie(7, "16:45",2,["A7","A8","A9","B10","B11"]),
        new Movie(8, "19:15",2,["B2","B4","B5","B6","C8"]),
        new Movie(9, "21:45",2,["A7","A8","A9","B10","B11"]),
        new Movie(10, "12:00",3,["B2","B4","B5","B6","C8"]),
        new Movie(11, "17:30",3,["A7","A8","A9","B10","B11"]),
        new Movie(12, "11:30",4,["B2","B4","B5","B6","C8"]),
        new Movie(13, "16:30",4,["A7","A8","A9","B10","B11"]),
        new Movie(14, "21:15",4,["B2","B4","B5","B6","C8"])
    ];

    getMovies(): Observable<Movie[]>{
        return from([this.movies]);
    }
}

    