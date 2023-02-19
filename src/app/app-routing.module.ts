import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'movie-list',
    loadChildren: () => import('./movie-list/movie-list.module').then( m => m.MovieListPageModule)
  },
  {
    path: 'vinyl-list',
    loadChildren: () => import('./vinyl-list/vinyl-list.module').then( m => m.VinylListPageModule)
  },
  {
    path: 'secret-list',
    loadChildren: () => import('./secret-list/secret-list.module').then( m => m.SecretListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
