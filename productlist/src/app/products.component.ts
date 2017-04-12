import {Component} from '@angular/core';
import {ProductService} from './product.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'products',
    templateUrl: './products.component.html'
})

export class ProductsComponent {
    products;
    testString: string = 'Empty string';

    constructor(private _productService: ProductService){
        this.products = _productService.getProducts();
    }
}
