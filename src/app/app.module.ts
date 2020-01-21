import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoursesModule} from './courses/courses.module';
import {StaticpagesModule} from './staticpages/staticpages.module';
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';
import {HttpClientModule} from"@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BanerComponent} from './baner/baner.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    StaticpagesModule,
    AdminModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
