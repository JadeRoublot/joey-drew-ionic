import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.page.html',
  styleUrls: ['./movie-new.page.scss'],
})
export class MovieNewPage implements OnInit {
  public movie!: Movie;
  constructor(
    private Movie: MovieService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.movie = new Movie();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Film enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tab/movie']);
      }, 2000);
    });
  }


  add() {
    this.Movie.saveNewMovie(this.movie).subscribe(() => {
      this.movie = new Movie();
      this.presentToast();
    })
  }

}
