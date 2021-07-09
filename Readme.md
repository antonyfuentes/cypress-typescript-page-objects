## Automated UI testing project, implemented with Cypress (TypeScript + PO)
Cypress is a next generation front end testing tool built for the modern web. It address the key pain points developers and QA engineers face when testing modern applications.
For more information visit: https://www.cypress.io/

<img src="https://raw.githubusercontent.com/antonyfuentes/cypress-typescript-page-objects/main/demo.gif" width="80%"/>

### Local setup
macOS:
- First install NodeJs: `brew install node`
- Then install the dependencies from `package.json` with the following command: `npm install`
- If this is your first time running cypress, then also run `npx cypress install`
- For more info, [check the official install guide](https://docs.cypress.io/guides/getting-started/installing-cypress)

### Running tests locally
- Before running any tests please make sure that the following two env variables are defined in your system:
  - `CYPRESS_ECOMMERCE_USER`
  - `CYPRESS_ECOMMERCE_PASS`
- To open Cypress' GUI run `npx cypress open`. The you will be able to run the tests from there
- If you want to run the tests from your terminal, simply run: `npm run test:chrome`

### Tests implemented:
- Nine tests in total were implemented as part of this framework using TypeScript as the backbone programming language
- The page object pattern and page factory approach were used
- Some tests rely on intectations with the API as well to gather data required by the tests. Which demonstrates one of the greatest features incorporated in Cypress
- Application under test: https://github.com/antonyfuentes/testing-playground
- This project also already includes the necessary changes to allow it to run on `Gitlab CI`
