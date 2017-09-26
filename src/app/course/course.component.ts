import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
    title = 'List of components';
    imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    colSpan = 2;
    isActive = true;
    courses: string[];
    email = 'me@example.com';
    course = {
        title: 'The Complete Angular Course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date,
        text: 'this is custom pipe example(moras dodati u app.modeule), creating custom angular filter'
    };

    onKeyUp4() {
        alert(this.email);
    }

    getTitle() {
        return this.title;
        }

        onSave($event) {
            $event.stopPropagation(); // zaustavis event bubbleing, ovo je obicna js metoda
            alert('Saved' + $event.screenX);
        }

        onKeyUp($event) {
            if ($event.keyCode === 13) {
                alert('Key pressed ' + $event.code + ' js nacin');
            }
        }

        onKeyUp2($event) {
             alert($event.target.value + ' preko eventa');
        }
        onKeyUp3(mojavarijabla) {
            alert(mojavarijabla + ' template varijabla');
       }
    // logic for calling http service
    constructor(service: CourseService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }

}
