import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { MenuComponent } from './menu/menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { DetailComponent } from './detail/detail.component';
import { NavComponent } from './nav/nav.component';
import { OnepageComponent } from './onepage/onepage.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlugifyPipe } from './slugify.pipe';

@NgModule({
  declarations: [
    SlugifyPipe,
    AppComponent,
    MenuComponent,
    ProjectsComponent,
    DetailComponent,
    NavComponent,
    OnepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
