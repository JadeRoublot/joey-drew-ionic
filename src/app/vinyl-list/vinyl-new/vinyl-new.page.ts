import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Vinyl } from '../../models/vinyl.model';
import { VinylService } from '../../services/vinyl.service';

@Component({
  selector: 'app-vinyl-new',
  templateUrl: './vinyl-new.page.html',
  styleUrls: ['./vinyl-new.page.scss'],
})
export class VinylNewPage implements OnInit {
  public vinyl!: Vinyl;

  constructor(
    private Vinyl: VinylService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.vinyl = new Vinyl();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Film enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tab/vinyl']);
      }, 2000);
    });
  }


  add() {
    this.Vinyl.saveNewVinyl(this.vinyl).subscribe(() => {
      this.vinyl = new Vinyl();
      this.presentToast();
    })
  }
}
