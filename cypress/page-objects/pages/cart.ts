export class Cart {
  url = '/cart/';
  title = 'Cart';
  elements = {
    getProductName: () => cy.get('.product-name'),
    getCartSubtotal: () => cy.get('.cart-subtotal'),
    getRemoveIcon: () => cy.get('.remove'),
    getCheckoutButton: () => cy.get('.checkout-button')
  };

  navigate() {
    cy.visit(this.url);
  }

  removeProduct(){
    this.elements.getRemoveIcon().click();
  }

  proceedToCheckout(){
    this.elements.getCheckoutButton().click();
  }

}

export const CartPage = new Cart();
