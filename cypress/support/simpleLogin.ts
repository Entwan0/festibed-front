namespace Cypress {
  export interface Chainable {
    simpleLogin: () => void;
  }
}

Cypress.Commands.add('simpleLogin', () => {
  cy.visit('/');
  cy.url().should('include', '/login');

  cy.get('tui-input').type('admin');
  cy.get('tui-input-password').children().type('admin');
  cy.get('button').click();

  cy.get('tui-notification').should('not.exist');
  cy.url().should('include', '/festival/listFestival');
});
