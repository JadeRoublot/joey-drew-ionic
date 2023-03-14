import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {
  
  constructor(private Movie: MovieService) { }

  movies!:any;

  ngOnInit() {
    this.Movie.getAllMovies().subscribe((data: any) => {
      this.movies = data;
    })
  }

}
