import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { PageComponent } from './page/page.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [PageComponent, ContactusComponent],
  imports: [
    CommonModule,
    StaticpagesRoutingModule
  ]
})
export class StaticpagesModule { }
