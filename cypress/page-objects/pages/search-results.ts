export class SearchResults {

  elements = {
    // Locator
    productCard: () => '.product',

    // Getter
    getSearchResults: () => cy.get(this.elements.productCard()),
    getProductCardByText: (text: string) => cy.contains(this.elements.productCard(), text)
  };

}

export const SearchResultsPage = new SearchResults();
