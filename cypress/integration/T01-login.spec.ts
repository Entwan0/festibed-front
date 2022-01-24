import '../support/index';

describe('/', () => {
  it('redirect to /login when user is unauthenticated', () => {
    cy.visit('/');
    cy.url().should('include', '/login');
  });
});

describe('/login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('show a notification when form is invalid', () => {
    cy.get('button').click();

    cy.get('tui-notification[ng-reflect-status=warning]').contains('Erreur');
  });

  it('show a notification when credentials are invalid', () => {
    cy.get('tui-input').type('invalid');
    cy.get('tui-input-password').children().type('credentials');
    cy.get('button').click();

    cy.get('tui-notification[ng-reflect-status=error]').contains('Erreur');
  });

  it('login as admin', () => {
    cy.simpleLogin();
  });
});
