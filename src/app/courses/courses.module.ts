import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesFeaturedComponent } from './courses-featured/courses-featured.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailedComponent } from './courses-detailed/courses-detailed.component';
import { CoursesRecentComponent } from './courses-recent/courses-recent.component';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';


@NgModule({
  declarations: [CoursesFeaturedComponent, CoursesListComponent, CoursesDetailedComponent, CoursesRecentComponent, CoursesCategoryComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports:[CoursesFeaturedComponent]
})
export class CoursesModule { }
