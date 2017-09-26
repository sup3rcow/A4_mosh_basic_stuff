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

  coursesFor = [
    {id: 1, name: 'course1ngFor'},
    {id: 2, name: 'course2ngFor'},
    {id: 3, name: 'course3ngFor'}
  ];

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('changeddd ' + eventArgs);
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

}
