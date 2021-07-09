
export class AccountDetail {
  url = '/my-account/edit-account/';
  elements = {
    getUserInput: () => cy.get('#username'),
    getPasswordInput: () => cy.get('#password'),
    getLoginBtn: () => cy.get('[name="login"]'),
    getEditAccountForm: () => cy.get('form.edit-account')
  };

  navigate() {
    cy.visit(this.url);
  }

  setUsername(username: string) {
    this.elements.getUserInput().type(Cypress.env(username) || username);
  }

  setPassword(password: string) {
    this.elements.getPasswordInput().type(Cypress.env(password) || password);
  }

  clickLoginBtn() {
    this.elements.getLoginBtn().click();
  }
}

export const AccountDetailPage = new AccountDetail();
