import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAboutusComponent } from './layout-aboutus/layout-aboutus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CommunityCareComponent } from './community-care/community-care.component';
import { CareersComponent } from './careers/careers.component';
import { IBMPartnershipComponent } from './ibm-partnership/ibm-partnership.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAboutusComponent,
    children: [
      {
        path: 'about-us',
      component: AboutusComponent
      },
      {
        path: 'community-care',
        component: CommunityCareComponent
      },
      {
        path: 'careers',
        component: CareersComponent
      },
      {
        path: 'ibm-partnership',
        component: IBMPartnershipComponent
      },
    ]
  }
];

@NgModule({
  declarations: [LayoutAboutusComponent, 
    AboutusComponent, 
    CommunityCareComponent, 
    CareersComponent, 
    IBMPartnershipComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AppAboutusModule { }
