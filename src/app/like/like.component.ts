import { Component, Input } from '@angular/core';

@Component({
  selector: 'like-box',
  templateUrl: 'like.component.html',
  styleUrls: [ './like.component.css' ]
})
export class LikeComponent  {
  numberOfLikes : number = 0;
  numberOfDislikes : number = 0;
  
  
  likeButtonClick(index:number) {
    this.numberOfLikes++;
  }

  dislikeButtonClick(index:number) {
    this.numberOfDislikes--;
  }
}
