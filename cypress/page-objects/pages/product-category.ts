import {SearchResultsPage} from './search-results';
import {CartComponent} from '../../page-objects/components/add-cart';

export class ProductCategory {
  url = '/product-category/';

  navigate(category: string){
    cy.visit(this.url + category);
  }

  addProductToCart(productTitle: string){
    SearchResultsPage.elements.getProductCardByText(productTitle).within(() => {
      CartComponent.addProduct();
      CartComponent.viewCart();
    });
  }

}

export const ProductCategoryPage = new ProductCategory();
