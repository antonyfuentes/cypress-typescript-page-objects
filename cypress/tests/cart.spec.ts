/// <reference types="cypress" />

import {ProductCategoryPage} from '../page-objects/pages/product-category';
import {CartPage} from '../page-objects/pages/cart';
import {HomePage} from '../page-objects/pages/home';
import {Common} from '../page-objects/common';
import {ProductDetailPage} from '../page-objects/pages/product-detail';
import {CartComponent} from '../page-objects/components/add-cart';
import {APIRequest} from '../support/api-requests';

describe('Cart page tests', () => {

  it('should be able add products to the cart from the category page', () => {
    ProductCategoryPage.navigate('hoodies/');
    ProductCategoryPage.addProductToCart('Hoodie with Zipper');
    
    CartPage.elements.getProductName().should('contain.text', 'Hoodie with Zipper');
    CartPage.elements.getCartSubtotal().should('contain.text', '$45.00');
    cy.url().should('include', CartPage.url);
    cy.title().should('include', CartPage.title);
  });

  it('should be able add products to the cart from the product detail page', () => {
    ProductDetailPage.navigate('hoodie-with-pocket/');
    CartComponent.addProduct();
    CartComponent.viewCart();
    
    CartPage.elements.getProductName().should('contain.text', 'Hoodie with Pocket');
    CartPage.elements.getCartSubtotal().should('contain.text', '$35.00');
    cy.url().should('include', CartPage.url);
    cy.title().should('include', CartPage.title);
  });

  it('should be able to remove products from the cart', ()=>{
    HomePage.navigate();
    APIRequest.addProductToCart('Hoodie with Pocket');
    CartPage.navigate();
    CartPage.removeProduct();

    Common.elements.getMessage().should('contain.text', '“Hoodie with Pocket” removed. Undo?');
    Common.elements.getInfoMessage().should('contain.text', 'Your cart is currently empty.');
    CartPage.elements.getCartSubtotal().should('not.exist');
  });

});
