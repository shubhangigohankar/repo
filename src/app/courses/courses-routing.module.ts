import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent} from './courses-list/courses-list.component';
import {CoursesDetailedComponent} from './courses-detailed/courses-detailed.component';

const routes: Routes = [
  {path:'courses', component:CoursesListComponent},
  {path:'courses/:id', component:CoursesDetailedComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
