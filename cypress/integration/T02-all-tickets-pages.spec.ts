describe('click on all pages', () => {
  it('login as admin', () => {
    cy.simpleLogin();
  });

  it('watch a festival with action button and return to listFestival', () => {
    cy.get('a[ng-reflect-icon="tuiIconShowLarge"]').first().click();
    cy.url().should('include', '/festival/form/');

    cy.get('button').contains('Retour').click();
    cy.url().should('include', '/festival/listFestival');
  });

  it('go to festival creation and return to listFestival', () => {
    cy.get('button').contains('Créer un nouveau festival').click();
    cy.url().should('include', '/festival/form/');

    cy.get('div[routerLink="/festival/listFestival"]').click();
    cy.url().should('include', '/festival/listFestival');
  });

  it('watch a festival with is title and return to listFestival', () => {
    cy.get('tui-line-clamp').first().click();
    cy.url().should('include', '/festival/form/');

    cy.get('.item > .icon').first().click();
    cy.url().should('include', '/festival/listFestival');
  });
});
