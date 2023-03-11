import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinylListPage } from './vinyl-list.page';

const routes: Routes = [
  {
    path: '',
    component: VinylListPage
  },
  {
    path: 'newVinyl',
    loadChildren: () => import('./vinyl-new/vinyl-new.module').then( m => m.VinylNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./vinyl/vinyl.module').then( m => m.VinylPageModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinylListPageRoutingModule {}
