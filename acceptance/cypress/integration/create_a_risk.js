describe('As an infosec lead I create a risk', function() {
    it('displays the risk in the app', function() {
        cy.visit(Cypress.env('host'));

        cy.get('[data-test="addrisk"]').click();

        cy.contains("the talking horse");
      })
  })