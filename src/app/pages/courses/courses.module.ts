import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CustomSnackbarComponent } from '../../custom-snackbar/custom-snackbar.component';

@NgModule({
  declarations: [CoursesComponent, CustomSnackbarComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
