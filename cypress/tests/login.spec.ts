/// <reference types="cypress" />

import { AccountDetailPage } from '../page-objects/pages/account-details';
import { Common } from '../page-objects/common';

describe('Account details page tests', () => {
  beforeEach(() => {
    AccountDetailPage.navigate();
  });

  it('should be able to login into account details with valid credentials', () => {
    AccountDetailPage.setUsername('ECOMMERCE_USER');
    AccountDetailPage.setPassword('ECOMMERCE_PASS');
    AccountDetailPage.clickLoginBtn();
    AccountDetailPage.elements.getEditAccountForm().should('be.visible');
  });

  it('should not be able to login into account details with invalid credentials', () => {
    AccountDetailPage.setUsername('johndoe');
    AccountDetailPage.setPassword('invalidpassword');
    AccountDetailPage.clickLoginBtn();
    Common.elements.getErrorMessage()
      .should('contain.text', 'Unknown username. Check again or try your email address.')
      .and('be.visible');
    AccountDetailPage.elements.getEditAccountForm().should('not.exist');
  });

});
