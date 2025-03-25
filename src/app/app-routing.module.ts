import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // {path: '', redirectTo:'/home', pathMatch:'full'},
  // {path: 'home', component: HomeComponent},
  // {path: 'about/:id', component: AboutComponent},

  // lazy loading
  { path: '', loadChildren: () => import('./pages/home/home.module').then(c=>c.HomeModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(c=>c.AboutModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  { path: 'courses', loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule) },
];   

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 