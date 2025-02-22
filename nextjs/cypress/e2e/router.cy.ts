describe('app works correctly with routes', () => {
  before(() => {
    cy.visit('/');
    cy.viewport(1800, 1200);
  });

  it('main', () => {
    cy.contains('Get started by editing');
  });
});