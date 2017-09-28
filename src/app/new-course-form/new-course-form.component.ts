import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  categories = [
    {
      id: 1,
      name: 'Angular'
    },
    {
      id: 2,
      name: 'c#'
    },
    {
      id: 3,
      name: 'javascript'
    }
  ];

  log(x) {
    console.log(x);
  }
  submit(x) {
    console.log(x.value);
  }
}
