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
  modif!: boolean;
  vinyl: any = null;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Vinyl: VinylService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.modif = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.Vinyl.get(id).subscribe((value: any) => {
      this.vinyl = value;
    });
  }
  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Etes-vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Confirmer',
            handler: () => { this.modif = !this.modif}
          }
        ]
      });
  
      await alert.present();
    } else {
    this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Vinyl.update(this.vinyl).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Vinyl.delete(id);
    this.router.navigate(['/tab/vinyl'])
  }

}
