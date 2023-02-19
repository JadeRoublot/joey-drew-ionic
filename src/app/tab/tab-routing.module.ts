import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path:'tab',
    component: TabPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'movie',
        loadChildren: () => import('../movie-list/movie-list.module').then( m => m.MovieListPageModule)
      },
      {
        path: 'vinyl',
        loadChildren: () => import('../vinyl-list/vinyl-list.module').then( m => m.VinylListPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then( m => m.UserPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
    ]
   } ,
   {
    path:'',
    redirectTo:'/tab/home',
    pathMatch:'full'
   }
    
    
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
