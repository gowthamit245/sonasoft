import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHomeComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];
@NgModule({
  declarations: [LayoutHomeComponent, HomeComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AppHomeModule { }
