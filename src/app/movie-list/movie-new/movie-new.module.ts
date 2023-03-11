import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieNewPageRoutingModule } from './movie-new-routing.module';

import { MovieNewPage } from './movie-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieNewPageRoutingModule
  ],
  declarations: [MovieNewPage]
})
export class MovieNewPageModule {}
