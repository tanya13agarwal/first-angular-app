import { Injectable, signal, WritableSignal } from '@angular/core';
import { Strings } from '../../enum/strings.enum';
import { Course } from '../../interfaces/course.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // behaviour subject      // method1
  // value of this behaviour subject is [] and type is Course[]
  // private courses$ = new BehaviorSubject<Course[]>([]);
  // get courses() {
  //   return this.courses$.asObservable();
  // }

  // Signal instead of RxJs
  private courses: WritableSignal<Course[]> = signal<Course[]>([]);
  get coursesSignal() {
    return this.courses.asReadonly();
  }

  //jb bhi ye service initiate hogi, ctor will be called automatically and getCourses will be executed
  constructor() {
    this.loadCourses(); 
   }

  // getCourses(): Course[] {
  //   if (typeof localStorage !== 'undefined') {
  //     const data = localStorage.getItem(Strings.STORAGE_KEY);
  //     // console.log("get vala data:", data);
  //     if (data) {
  //       const courses = JSON.parse(data);
  //       // return courses;
  //       // update observable value
  //       // this.courses$.next(courses); // method1
  //       // this.updateCourses(courses); // method2
  //       this.courses.set(courses);      // method3
  //       return courses;
  //     }
  //   } else {
  //     console.warn('localStorage is not available');
  //   }
  //   return [];
  // }

  loadCourses()  {
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem(Strings.STORAGE_KEY);
      // console.log("get vala data:", data);
      if (data) {
        const courses = JSON.parse(data);
        // return courses;
        // update observable value
        // this.courses$.next(courses); // method1
        // this.updateCourses(courses); // method2
        this.courses.set(courses);      // method3
        // return courses;
      }
    } else {
      console.warn('localStorage is not available');
    }
    // return [];
  }

  getCourses(): Course[] {
    return this.courses();
  }

  addCourse(data: Course){
    // const courses = this.courses$.value;
    // const newCourses = [ ...courses, { ...data, id: courses.length + 1 } ];

    // update the courses 
    // this.courses$.next(newCourses);
    // this.updateCourses(newCourses);

    // const courses = this.courses();
    // const newCourse = { ...data, id: courses.length + 1 };
    // const newCourses = [...courses, newCourse];

    // this.courses.update((courses_data) => [...courses_data, newCourse]);

    // // save in local storage
    // this.setItem(newCourses);
    // return newCourses;

    let updatedCourses: Course[] = [];
    this.courses.update(courses => {
      const newCourse = {...data, id: courses.length+1};
      updatedCourses = [...courses, newCourse];
      this.setItem(updatedCourses);
      return updatedCourses;
    });

    return updatedCourses; 
  }

  deleteCourse(data: Course) {
    // let courses: Course[] = this.courses$.value; 
    // if id matches, us data ko chodh k baaki sara data leke aao
    // courses = courses.filter(course_item => course_item.id != data.id);

    // this.updateCourses(courses);
    // this.setItem(courses);

    this.courses.update((courses) => {
      const updatedCourses = courses.filter(c => c.id !== data.id);
      this.setItem(updatedCourses);
      return updatedCourses;
    });
  }

  // updateCourses(data: Course[]){
  //   this.courses$.next(data);
  // }

  setItem(data: Course[]) {
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));
  }


}
