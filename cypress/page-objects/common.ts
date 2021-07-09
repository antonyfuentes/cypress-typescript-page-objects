export class Commons {

  elements = {
    getErrorMessage: () => cy.get('.woocommerce-error'),
    getInfoMessage: () => cy.get('.woocommerce-info'),
    getMessage: () => cy.get('.woocommerce-message')
  };

}

export const Common = new Commons();
