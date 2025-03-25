import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './main-app/header/header.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FooterComponent } from './main-app/footer/footer.component';
import { provideHttpClient } from '@angular/common/http';
import { HoverColorDirective } from './directives/hoverColor/hover-color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutComponent,
    HeaderComponent,
    FooterComponent,
    // HoverColorDirective,
    // CoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSnackBarModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
