import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinylListPage } from './vinyl-list.page';

const routes: Routes = [
  {
    path: '',
    component: VinylListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinylListPageRoutingModule {}
