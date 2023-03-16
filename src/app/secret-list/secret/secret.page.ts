import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { SecretService } from '../../services/secret.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.page.html',
  styleUrls: ['./secret.page.scss'],
})
export class SecretPage implements OnInit {
  modif!: boolean;
  secret: any = null;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Secret: SecretService,
    private toastCtrl: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.modif = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.Secret.get(id).subscribe((value: any) => {
      this.secret = value;
    });
  }

 
}
