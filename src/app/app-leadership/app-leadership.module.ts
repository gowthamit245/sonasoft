import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutLeadershipComponent } from './layout-leadership/layout-leadership.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutLeadershipComponent,
    children: [
      {
        path: '',
        component: TestimonialsComponent
      },
      {
        path: 'demo',
        component: TestimonialsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [LayoutLeadershipComponent, TestimonialsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AppLeadershipModule { }
