export class Header {
  elements = {
    getHeaderSection: () => cy.get('#masthead'),
    getSearchInput: () => this.elements.getHeaderSection().find('.search-field')
  };

  searchKeyword(keyword: string){
    this.elements.getSearchInput().type(keyword).type('{enter}');
  }

}

export const HeaderComponent = new Header();
