import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { VinylService } from '../../services/vinyl.service';
@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.page.html',
  styleUrls: ['./vinyl.page.scss'],
})
export class VinylPage implements OnInit {
  modif: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
