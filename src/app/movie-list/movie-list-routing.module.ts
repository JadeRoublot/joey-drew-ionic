import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListPage } from './movie-list.page';

const routes: Routes = [
  {
    path: '',
    component: MovieListPage
  },
  {
    path: 'newMovie',
    loadChildren: () => import('./movie-new/movie-new.module').then( m => m.MovieNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./movie/movie.module').then( m => m.MoviePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieListPageRoutingModule {}
