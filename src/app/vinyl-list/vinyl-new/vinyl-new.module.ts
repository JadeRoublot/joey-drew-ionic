import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinylNewPageRoutingModule } from './vinyl-new-routing.module';

import { VinylNewPage } from './vinyl-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinylNewPageRoutingModule
  ],
  declarations: [VinylNewPage]
})
export class VinylNewPageModule {}
