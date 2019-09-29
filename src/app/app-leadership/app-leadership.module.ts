import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutLeadershipComponent } from './layout-leadership/layout-leadership.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { TechnologyPartnerComponent } from './technology-partner/technology-partner.component';
import { WhitepapersComponent } from './whitepapers/whitepapers.component';
import { BlogComponent } from './blog/blog.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { SolutionsComponent } from './solutions/solutions.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutLeadershipComponent,
    children: [
      {
        path: 'testimonials',
        component: TestimonialsComponent
      },
      {
        path: 'case-studies',
        component: TestimonialsComponent
      },
      {
        path: 'new_events',
        component: NewsEventsComponent
      },
      {
        path: 'technology_partner',
        component: TechnologyPartnerComponent
      }
      ,
      {
        path: 'whitepaper',
        component: WhitepapersComponent
      }
      ,
      {
        path: 'blog',
        component: BlogComponent
      }
      ,
      {
        path: 'leadership',
        component: LeadershipComponent
      }
      ,
      {
        path: 'solutions',
        component: SolutionsComponent
      }
      
    ]
  }
];

@NgModule({
  declarations: [LayoutLeadershipComponent, TestimonialsComponent, NewsEventsComponent, TechnologyPartnerComponent, WhitepapersComponent, BlogComponent, LeadershipComponent, SolutionsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AppLeadershipModule { }
