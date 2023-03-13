export class Vinyl {

    id?: string;
    title: string;
    releaseDate: string;
    productor: string;
    movieUsing: string;
    link: string;
    tour: boolean;

    constructor() {

        this.title = '';
        this.releaseDate = '';
        this.productor = '';
        this.movieUsing = '';
        this.link = '. . .';
        this.tour = false;

    }
}