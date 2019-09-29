import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxGalleryModule } from 'ngx-gallery';
import { MatVideoModule } from 'mat-video';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    MatVideoModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
