import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { OnepageModule } from './onepage/onepage.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnepageComponent } from './onepage/onepage.component';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { MenuComponent } from './menu/menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { DetailComponent } from './detail/detail.component';
import { NavComponent } from './nav/nav.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    OnepageComponent,
    MenuComponent,
    ProjectsComponent,
    DetailComponent,
    NavComponent,
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
