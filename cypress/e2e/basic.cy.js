describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h1').should('be.visible');
  });

  it('displays posts list', () => {
    cy.get('ul').should('exist');
  });
});
