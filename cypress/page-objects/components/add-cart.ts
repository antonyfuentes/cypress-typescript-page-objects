
export class AddToCart {

  actions = {
    getUrl: () => cy.url(),
    getTitle: () => cy.title()
  };

  elements = {
    getAddBtn: () => cy.contains('Add to cart'),
    getViewBtn: () => cy.contains('View cart')
  };

  addProduct(){
    this.elements.getAddBtn().click();
  }

  viewCart(){
    this.elements.getViewBtn().click();
  }

}

export const CartComponent = new AddToCart();
