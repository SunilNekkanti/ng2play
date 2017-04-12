import {Component} from '@angular/core';
import {AdvertsService} from './adverts.service';

@Component({
    selector: 'advertisement',
    templateUrl: './adverts.component.html'
})

export class AdvertsComponent {
    adverts;
    isActive = true;
    typedText = "Nothing";

    constructor(private _advertService: AdvertsService) {
        this.adverts = _advertService.getAllAdverts();
    }
    onClick($event) {
        if (this.isActive){
            this.isActive = false;
        }else {
            this.isActive = true;
        }

        console.log($event);
    }
}
