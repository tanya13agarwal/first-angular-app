import { Component, OnInit } from '@angular/core';
// this is the main logic area(code)

// @Component is the decorator
@Component({
  selector: 'app-root', //name of the component with which it will be referred
  templateUrl: './app.component.html', // location of html template
  standalone: false,
  styleUrl: './app.component.scss' // location of css file where the css logic of html template lies
})
export class AppComponent implements OnInit {
  title = 'first-app-ngmodule';

  constructor(){
    console.log("inside ctor");
  }
  ngOnInit(){
    this.changeTitle();
  }

  changeTitle(){
    this.title = "updated title";
  }
}
 