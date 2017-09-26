import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

@Input('isActive') isLiked:boolean;
@Input('likesCount') totalLikes:number;

  onClick() {
    this.totalLikes += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
  }
}
