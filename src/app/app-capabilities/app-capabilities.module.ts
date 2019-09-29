import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BigDataComponent } from './big-data/big-data.component';
import { LayoutCapabilitiesComponent } from './layout-capabilities/layout-capabilities.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutCapabilitiesComponent,
    children: [
      {
        path: 'big-data',
        component: BigDataComponent
      }
    ]
  }
];

@NgModule({
  declarations: [BigDataComponent, LayoutCapabilitiesComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AppCapabilitiesModule { }
