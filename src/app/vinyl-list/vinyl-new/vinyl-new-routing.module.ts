import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinylNewPage } from './vinyl-new.page';

const routes: Routes = [
  {
    path: '',
    component: VinylNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinylNewPageRoutingModule {}
