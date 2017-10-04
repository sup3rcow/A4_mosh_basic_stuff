import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormArrayComponent } from './new-course-form-array/new-course-form-array.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFolowersComponent } from './github-folowers/github-folowers.component';
import { GithubFolowersService } from './github-folowers/github-folowers.service';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    TitleCasePipe,
    FavoriteComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    NewCourseFormArrayComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFolowersComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule // importas kako bi mogao pozivati rest http servise, import modul, a on ima definirane provajdere za DI
               // pa ne moras nista deifnirati dole u providers
  ],
  providers: [
    CourseService, // registriras DI
    PostService,
    GithubFolowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler } // postavis AppErrorHandler da bude globalni error handler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
