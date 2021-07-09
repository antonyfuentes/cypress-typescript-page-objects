export class Order {
  url = '/checkout/order-received';
  title = 'Checkout';

  elements = {
    getOrderTitle: () => cy.get('.entry-title'),
    getThankYouMessage: () => cy.get('.woocommerce-thankyou-order-received')
  };

}

export const OrderPage = new Order();
