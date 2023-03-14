import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  modif: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
