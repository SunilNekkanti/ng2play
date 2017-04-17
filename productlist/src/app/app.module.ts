import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.components';
import { AdvertsComponent } from './adverts.compontent';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RatingComponent } from './rating/rating.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}

export class App {
}

// entry point to application
@NgModule({
  declarations: [ // to declare which components, directives or pipes are in this module
    AppComponent,
    ProductsComponent,
    ProductComponent,
    AdvertsComponent,
    RatingComponent
  ],
  imports: [ // to specify what other modules do we use for this module
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [], // to specify any application wide services we want to use
  bootstrap: [AppComponent]
})
export class AppModule { }
