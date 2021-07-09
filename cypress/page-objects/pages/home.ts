
export class Home {
  url = '/';
  title = "Anto's Closet – Our style is clean and confident, comfortable and accessible, classic and modern.";

  navigate() {
    cy.visit(this.url);
  }

}

export const HomePage = new Home();
