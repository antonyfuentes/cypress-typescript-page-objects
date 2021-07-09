/// <reference types="cypress" />

import {HeaderComponent} from '../page-objects/components/header';
import {Common} from '../page-objects/common';
import {ProductDetailPage} from '../page-objects/pages/product-detail';
import {SearchResultsPage} from '../page-objects/pages/search-results';
import {HomePage} from '../page-objects/pages/home';

describe('Search page tests', () => {
  beforeEach(() => {
    HomePage.navigate();
  });

  it('should be able to search a keyword that matches one single product', () => {
    HeaderComponent.searchKeyword('Belt');
    cy.url().should('include', '/product/belt/');
    ProductDetailPage.elements.getProductTitle().should('contain.text', 'Belt');
  });

  it('should be able to search a keyword that matches multiple products', () => {
    HeaderComponent.searchKeyword('Hoodie');
    cy.url().should('include', '/?s=Hoodie&post_type=product');
    SearchResultsPage.elements.getSearchResults().its('length').should('be.eq', 4);
  });

  it('should be able to search a keyword that doesnt match any products', () => {
    HeaderComponent.searchKeyword('DoesntExist');
    Common.elements.getInfoMessage()
      .should('be.visible')
      .and('contain.text', 'No products were found matching your selection.');
  });

});
