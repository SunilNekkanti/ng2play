import { Component } from '@angular/core';

@Component({
    selector: 'rating',
    templateUrl: 'rating.components.html'
})

export class RatingComponent{
    rating = 0;

    onClick(ratingValue){
        this.rating = ratingValue;
    }
}