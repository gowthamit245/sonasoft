import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-home/app-home.module').then(mod => mod.AppHomeModule)
  },
  {
    path: '',
    loadChildren: () => import('./app-aboutus/app-aboutus.module').then(mod => mod.AppAboutusModule)
  },
  {
    path: '',
    loadChildren: () => import('./app-leadership/app-leadership.module').then(mod => mod.AppLeadershipModule)
  },
  {
    path: '',
    loadChildren: () => import('./front-end/front-end.module').then(mod => mod.FrontEndModule)
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
