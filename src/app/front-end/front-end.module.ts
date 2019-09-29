import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFrontComponent } from './layout-front/layout-front.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutFrontComponent,
    children: [
      {
        path: 'contact',
      component: ContactUsComponent
      }
    ]
  }
];
@NgModule({
  declarations: [LayoutFrontComponent, ContactUsComponent],
  imports: [
    CommonModule,  RouterModule.forChild(routes)
  ]
})
export class FrontEndModule { }
