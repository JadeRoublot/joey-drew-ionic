import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinylListPageRoutingModule } from './vinyl-list-routing.module';

import { VinylListPage } from './vinyl-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinylListPageRoutingModule
  ],
  declarations: [VinylListPage]
})
export class VinylListPageModule {}
