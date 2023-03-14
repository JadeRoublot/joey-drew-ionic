import { Component, OnInit } from '@angular/core';
import { VinylService } from '../services/vinyl.service';
@Component({
  selector: 'app-vinyl-list',
  templateUrl: './vinyl-list.page.html',
  styleUrls: ['./vinyl-list.page.scss'],
})
export class VinylListPage implements OnInit {

  constructor(private Vinyl: VinylService) { }

  vinyls!:any;
  
  ngOnInit() {
    this.Vinyl.getAllVinyls().subscribe((data: any) => {
      this.vinyls = data;
    })
  }

}
