import { Component, OnInit } from '@angular/core';
import { SecretService } from '../services/secret.service';

@Component({
  selector: 'app-secret-list',
  templateUrl: './secret-list.page.html',
  styleUrls: ['./secret-list.page.scss'],
})
export class SecretListPage implements OnInit {

  constructor(private Secret: SecretService) { }

  secrets!:any;

  ngOnInit() {
    this.Secret.getAllSecrets().subscribe((data: any) => {
      this.secrets = data;
    })
  }

}
