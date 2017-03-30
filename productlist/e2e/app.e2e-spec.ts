import { ProductlistPage } from './app.po';

describe('productlist App', function() {
  let page: ProductlistPage;

  beforeEach(() => {
    page = new ProductlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
