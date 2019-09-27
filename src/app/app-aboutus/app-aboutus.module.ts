import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAboutusComponent } from './layout-aboutus/layout-aboutus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAboutusComponent,
    children: [
      {
        path: '',
        component: AboutusComponent
      }
    ]
  }
];

@NgModule({
  declarations: [LayoutAboutusComponent, AboutusComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AppAboutusModule { }
