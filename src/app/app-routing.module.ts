import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-home/app-home.module').then(mod => mod.AppHomeModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./app-aboutus/app-aboutus.module').then(mod => mod.AppAboutusModule)
  },
  {
    path: 'leader-ship',
    loadChildren: () => import('./app-leadership/app-leadership.module').then(mod => mod.AppLeadershipModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
