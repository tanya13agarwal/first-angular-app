import { Component, computed, effect, inject, input, Input, output, SecurityContext, signal } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../../custom-snackbar/custom-snackbar.component';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  // @Input() courses: any;      // method 1
  // courses: Course[] = [];     // method 2
  //  creating writable signal (for effect )  // method 3  
  // courses = signal<Course[]>([]); 

  // @Input() isAdmin = false; // initial value of isDelete/isAdmin (only accesible to admin) is false. // method 1 - input decorator
  isAdmin = input<boolean>(false, 
  // {
  //   alias: 'isAdm',
  // transform: (value: boolean)=>{
  //   // execute any code
  //   return value;
  // }
  // }
);

  // @Output() del = new EventEmitter();
  // del = output<string>({
  //   // alias: '',
  // });

  coursesSub!: Subscription;

  // constructor(private courseService: CourseService) {} // method 1
  // 2nd method used to inject
  private courseService = inject(CourseService);
  // private sanitizer = inject(DomSanitizer);

  // use effect to automatically respond to changes in the service's courses signal (kind of useEffect)
  // constructor() {
    // effect(() => {
    //   const courses = this.courseService.coursesSignal();
    //   // agr abhi aaye hue courses not same as already existing ones, tbhi update kro
    //   if (courses !== this.courses()) {
    //     this.courses.set(courses);
    //     console.log('updated courses:', this.courses());
    //   }
    // }, { allowSignalWrites: true });
  // }

  constructor(private _snackBar: MatSnackBar) {}


  // alternate method for effect
  courses = computed(()=> this.courseService.coursesSignal());

  ngOnInit() {
    // // this.courses = this.courseService.getCourses();     // method1 w/o signals
    // this.courses.set(this.courseService.getCourses());     // method2 with signals  
    // // console.log("inside c: ", this.courses);
    // // this.getCourses();
    // // we need to inject getCourses from courses service

    // // subscribe to courseService to create observable to use it
    // this.coursesSub = this.courseService.courses.subscribe({
    //   next: (courses) => {
    //     // this.courses = courses;
    //     // console.log("courses: ", this.courses);
    //     this.courses.set(courses);
    //     console.log("courses: ", this.courses());
    //   },
    //   error: (e) => {
    //     console.log(e);
    //   }
    // })
  }

  // sanitizeUrl(value: string){
  //   return this.sanitizer.sanitize(SecurityContext.URL, value) || null;
  // }

  // getCourses() {
  //   if (typeof localStorage !== 'undefined') {
  //     const data = localStorage.getItem(Strings.STORAGE_KEY);
  //     console.log("get vala data:", data);
  //     if (data) {
  //       this.courses = JSON.parse(data);
  //     }
  //   } else {
  //     console.warn('localStorage is not available');
  //   }
  // }

  deleteCourse(course: Course) {
    const deleteCourse = this.courseService.deleteCourse(course);
    this.courseService.loadCourses();
    // this.openSnackBar();
    this.openCustomSnackBar();
    // this.del.emit(course);
  }

  openCustomSnackBar(){
    this._snackBar.openFromComponent(CustomSnackbarComponent);
  }

  openSnackBar() {
    // this._snackBar.open("Course deleted successfully"); // simple message snackbar
    // this._snackBar.open("Course deleted successfully", "okay"); // message snackbar with action
    this._snackBar.open("Course deleted successfully", "undo", {
      // duration: 5000, // snackbar lasts for 5 seconds
      horizontalPosition: 'center',
      verticalPosition: 'top'
    }); // config snackbar (you can provide configurations in this case)
  }

  ngOnDestroy() {
    // console.log("courses on destroy");
    // if(this.coursesSub){
    //   this.coursesSub.unsubscribe();
    // }
  }

}
