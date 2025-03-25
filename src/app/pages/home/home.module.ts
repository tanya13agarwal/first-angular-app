import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoursesModule } from '../courses/courses.module';
import { HomeComponent } from './home.component';
import { AboutModule } from '../about/about.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoursesModule,
    AboutModule
  ]
})
export class HomeModule { }
