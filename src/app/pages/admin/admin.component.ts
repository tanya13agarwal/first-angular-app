import { Component, inject, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Strings } from '../../enum/strings.enum';
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../interfaces/course.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  // model: any = {};
  // cover!: string | null;
  // cover_file: any;
  // showError = false;

  model = signal<any>({});
  cover = signal<string | null>(null);
  cover_file = signal<any>(null);
  showError = signal<boolean>(false);
  isSaved = signal<boolean>(false);

  toaster = inject(ToastrService);

  // inject courseService
  private courseService = inject(CourseService);
  // courses: any[] = [];

  // jse hi initialize kro, courses aa jaye saare
  ngOnInit() {
    console.log("admin ngOnInit");
    // this.getCourses();
  }

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

  onFileSelected(event: any) {
    console.log(event);
    const file = event.target.files[0];
    if (file) {
      // this.cover_file = file;
      this.cover_file.set(file);
      const reader = new FileReader();
      console.log(reader);
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        // this.cover = dataUrl;
        this.cover.set(dataUrl);
        console.log('image:', this.cover);
      };
      reader.readAsDataURL(file);
      // this.showError = false;
      this.showError.set(false);
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid || !this.cover) {
      console.log('form invalid');
      this.toaster.error("Form invalid", "Error");
      form.control.markAllAsTouched();

      if (!this.cover) {
        this.showError.set(true);
      }
      return;
    }
    console.log('form valid, value=', form.value);

    this.saveCourse(form);
    this.toaster.success("Course created successfully");
  }

  clearForm(form: NgForm) {
    form.reset();
    this.cover.set(null);
    this.cover_file.set(null);
  }

  async saveCourse(form: NgForm) {
    try {
      const formValue = form.value;
      console.log(formValue);

      const data: Course = {
        ...formValue,
        image: this.cover(),
        // id: this.courses.length + 1,
      };

      await this.courseService.addCourse(data);

      // this.courses = [ ...this.courses, data ];
      // this.setItem(this.courses);

      // we want that form tb hi clear ho jb data save ho jaye and since it is aysnc func isliye promise kind of lgaa dia
      this.isSaved.set(true);
      setTimeout(() => {
        this.isSaved.set(false);
      }, 2000);
      this.clearForm(form);
    } catch (e) {
      console.log(e);
    }
  }

  deleteCourse(course: any) {
    // this.courses = this.courses.filter(course_item => course_item.id != course.id);
    // this.setItem(this.courses);
  }

  // setItem(data: any){
  //   localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));
  // }

}
