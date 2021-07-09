export class Checkout {
  url = '/checkout/';
  title = 'Checkout';
  elements = {
    getShippingAddressCheckbox: () => cy.get('#ship-to-different-address-checkbox'),
    getTermsCheckbox: () => cy.get('#terms'),
    getPlaceOrderBtn: () => cy.get('#place_order'),
    
    // Billing form fields
    getNameField: () => cy.get('#billing_first_name'),
    getLastnameField: () => cy.get('#billing_last_name'),
    getCompanyField: () => cy.get('#billing_company'),
    getCountrySelector: () => cy.get('#select2-billing_country-container'),
    getCountrySelectorSearch: () => cy.get('input[aria-owns="select2-billing_country-results"]'),
    getStreetAddressField: () => cy.get('#billing_address_1'),
    getCityField: () => cy.get('#billing_city'),
    getStateField: () => cy.get('#billing_state'),
    getPostalcodeField: () => cy.get('#billing_postcode'),
    getPhoneField: () => cy.get('#billing_phone'),
    getEmailField: () => cy.get('#billing_email')
  };

  navigate() {
    cy.visit(this.url);
  }

  skipDifferentShippingAddress(){
    this.elements.getTermsCheckbox().check();
  }

  acceptTerms(){
    this.elements.getShippingAddressCheckbox().uncheck();
  }

  placeOrder(){
    this.elements.getPlaceOrderBtn().click();
  }

  fillBillingForm(formDataFixture: string){
    cy.fixture(formDataFixture).then((data) => {
      this.elements.getNameField().type(data.name);
      this.elements.getLastnameField().type(data.lastName);
      this.elements.getCompanyField().type(data.company);
      this.elements.getCountrySelector().click();
      this.elements.getCountrySelectorSearch().type(`${data.country}{enter}`);
      this.elements.getStreetAddressField().type(data.streetAddress1);
      this.elements.getCityField().type(data.city);
      this.elements.getStateField().type(data.state);
      this.elements.getPostalcodeField().type(data.postalCode);
      this.elements.getPhoneField().type(data.phone);
      this.elements.getEmailField().type(data.email);
    });
  }

}

export const CheckoutPage = new Checkout();
