describe('creation festival', () => {
  it('login as admin', () => {
    cy.simpleLogin();
  });

  it('go to creation forlder', () => {
    cy.get('button').contains('Créer un nouveau festival').click();
    cy.url().should('include', '/festival/form/');
  });

  it('fill category', () => {
    cy.get('tui-select[formControlName="category"]').click();
    cy.get('tui-data-listFestival-wrapper').click();
  });

  it('fill tag', () => {
    cy.get('tui-select[formControlName="tag"]').click();
    cy.get('tui-data-listFestival.ng-star-inserted > :nth-child(3)').click();
  });

  it('fill title', () => {
    cy.get('tui-input').eq(0).type('creation festival systeme par cypress');
  });

  it('fill priority', () => {
    cy.get('tui-select[formControlName="priority"]').click();
    cy.get('tui-data-listFestival.ng-star-inserted > :nth-child(2)').click();
  });

  it('fill title', () => {
    cy.get('quill-editor').type('description festival sys depuis cypress');
  });

  it('send festival', () => {
    cy.contains('Valider').click();
    cy.url().should('include', '/festival/listFestival');
  });
});
