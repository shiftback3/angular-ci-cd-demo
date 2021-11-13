describe('Login', () => {
    it('should not login if the form is invalid', () => {
      cy.visit('/');
    //   cy.url().should('includes','login');
    cy.get('[name="email"]').type('superadmin@localhost');
    cy.get('button').click();
    cy.url().should('not.include','dashboard');
    
    });

    it('should login if the form is valid', () => {
        cy.visit('/');
      //   cy.url().should('includes','login');
      cy.get('[name="email"]').type('superadmin@localhost');
      cy.get('[name="password"]').type('secret');
      cy.get('button').click();
      cy.url().should('include','dashboard');
      
      })
  })
  