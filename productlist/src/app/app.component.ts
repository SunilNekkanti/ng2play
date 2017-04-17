import { Component } from '@angular/core';

import {ProductService} from './product/product.service';
import {AdvertsService} from './adverts.service';
import {TranslateService} from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// At the very core, we have components. A component encapsulates the template, data and
// behavior of a view. It is actually more accurate to call it a view component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, AdvertsService, TranslateService]
})

export class AppComponent {
  title = 'ng-Kitchensink';
  imageUrl = 'http://lorempixel.com/400/200/';
  testArray;
//  param = {value: 'world'};
 // param2 = {value: 'test'};


  constructor(translate: TranslateService){
    this.testArray = ['coca cola', 'coffee beans', 'shell garage', 'three star hotel', 'spam advert', 'test'];
    translate.addLangs(["af", "es"]);
      // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('af');

//         translate.get('HELLO', {value: 'world'}).subscribe((res: string) => {
//           console.log(res);
// });

//       translate.get('Goodbye', {value: 'test'}).subscribe((res: string) => {
//           console.log(res);
// });
  }
}
