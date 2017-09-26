import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app!';

  post = {
    title: 'Title',
    isFavorite: true
  };

  tweet = {
    body: 'I like this!!',
    isLiked: true,
    likesCount: 10
  };

  private courses = [1, 2];

  viewMode = 'map';

  coursesFor; // ucitas sa "servera"

  isButtonBlue = true;

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('changeddd ' + eventArgs.newValue);
  }
  onAdd() {
    const random = Math.floor(Math.random() * 100) + 100; // br izmedju 100 i 200
    this.coursesFor.push({id: random, name: 'course' + random + 'ngFor'});
  }
  onRemove(c) {
    const index = this.coursesFor.indexOf(c);
    this.coursesFor.splice(index, 1);
  }
  onChange(c) {
    c.name = 'changed(direk mijenjas property value na ulaznom parametru functiona)';
  }

  loadCourses() {
    this.coursesFor = [
      {id: 1, name: 'course1ngFor'},
      {id: 2, name: 'course2ngFor'},
      {id: 3, name: 'course3ngFor'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
