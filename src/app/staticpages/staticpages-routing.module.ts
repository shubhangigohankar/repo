import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from './page/page.component';
import {ContactusComponent} from './contactus/contactus.component';

const routes: Routes = [
  {path:'page/:slug', component:PageComponent},
  {path:'contactus', component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
