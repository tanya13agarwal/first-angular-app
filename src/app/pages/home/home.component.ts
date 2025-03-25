import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
// import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  val: number = 2;
  courses: any[] = [];

  private http = inject(HttpClient);

  constructor(private router: Router) { }

  ngOnInit() {

    // this.getCourses();
    this.fetchHttpData();
  }

  async fetchHttpData() {
    // if using subscribe, never use async else it would return a promise
    //  this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
    //   next: (posts) => {
    //     console.log(posts);
    //   },
    //   error: (e) => {
    //     console.log(e);
    //   }
    //  }); 

    try {
      const posts = await lastValueFrom(
        this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
      );
  
      console.log('posts: ', posts);
    } catch(e) {
      console.log(e);
    }
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

  // navigate() {
  //   this.router.navigate(['/about']);
  // }
}
