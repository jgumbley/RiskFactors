describe('As an infosec lead I create a risk', function() {
    it('displays the risk in the app', function() {
        cy.visit('http://localhost:3000/');

        cy.get('[data-test="addrisk"]').click();

        cy.contains("the talking horse");
      })
  })