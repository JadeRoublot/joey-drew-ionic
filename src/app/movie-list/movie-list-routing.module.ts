import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListPage } from './movie-list.page';

const routes: Routes = [
  {
    path: '',
    component: MovieListPage
  },
  {
    path: 'movie-new',
    loadChildren: () => import('./movie-new/movie-new.module').then( m => m.MovieNewPageModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then( m => m.MoviePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieListPageRoutingModule {}
