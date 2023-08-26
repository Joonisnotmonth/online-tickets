export class Movie{
    constructor(
        public id?: number,
        public showTime?: string,
        public theater?: number,
        public unavailableSeats?: object
    ){}
}