import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean;
  @Output('change12') click = new EventEmitter();

  onClick() {
      this.isSelected = !this.isSelected;

      const outObj: FavoriteChangedEventArgs = { newValue: this.isSelected };
      this.click.emit(outObj);
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
