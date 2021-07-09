/// <reference types="cypress" />
import {APIRequest} from '../support/api-requests';
import {HomePage} from '../page-objects/pages/home';
import {CartPage} from '../page-objects/pages/cart';
import {CheckoutPage} from '../page-objects/pages/checkout';
import {OrderPage} from '../page-objects/pages/order';
import {Common} from '../page-objects/common';

describe('Checkout page tests', () => {
  before(()=>{
    HomePage.navigate();
  });

  it('should be able to checkout an order', ()=>{
    APIRequest.addProductToCart('Hoodie with Pocket');
    CartPage.navigate();
    CartPage.proceedToCheckout();

    CheckoutPage.fillBillingForm('billing-details-data');
    CheckoutPage.skipDifferentShippingAddress();
    CheckoutPage.acceptTerms();
    CheckoutPage.placeOrder();
    
    OrderPage.elements.getOrderTitle().should('contain.text', 'Order received');
    OrderPage.elements.getThankYouMessage().should('contain.text', 'Thank you. Your order has been received.');
    cy.url().should('include', OrderPage.url);
  });

});
