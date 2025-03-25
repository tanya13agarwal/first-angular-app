import { Component, inject } from '@angular/core';
import { CourseService } from '../services/course/course.service';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snackbar',
  standalone: false,
  
  templateUrl: './custom-snackbar.component.html',
  styleUrl: './custom-snackbar.component.scss'
})
export class CustomSnackbarComponent {

  constructor(public snackBarRef: MatSnackBarRef<CustomSnackbarComponent>) {}
  courseService = inject(CourseService);
  undoDelete() {
    console.log("undo deleted course");
    this.snackBarRef.dismissWithAction();
  }

}
