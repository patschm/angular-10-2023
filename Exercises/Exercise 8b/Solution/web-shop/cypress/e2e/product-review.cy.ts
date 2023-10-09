/// <reference types="cypress" />

// TODO 2: Write E2E tests for the product details page (http://localhost:4200/products/product/590164/general)
// 
describe('Product Review', ()=>{
    before(()=>{
    });
    // Test that the login screen is shown and login (username an password should be the same)
    // Optionally, create a custom command for the login actions
    it('should show product reviews detail', ()=>{
        cy.visit('/products/product/590164/reviews');
        cy.get('.nav > :nth-child(4) > .nav-link').click();
        cy.url().should('include', '/login');
        // cy.get('input[name="username"]').type('aaa');
        // cy.get('button').should('be.disabled');
        // cy.get('input[name="password"]').type('aaa');
        // cy.get('button').should('be.enabled').click();
        cy.login('ccc', 'ccc');
        cy.get('h3').contains('Your Review');
    });
    // Test the review functionality
    it('should submit a review', ()=>{
        cy.visit('/products/product/590164/reviews');
        cy.get('.nav > :nth-child(4) > .nav-link').click();
        cy.url().should('include', '/login');
        cy.login('ccc', 'ccc');
        cy.url().should('include', '/review');
        cy.get('h3').contains('Your Review');
        cy.get('input[name="score"]').type('5');
        cy.get('input[name="author"]').type('Peter');
        cy.get('textarea[name="text"]').type('A very good product');
        cy.get('button[type="submit"]').should('be.enabled').click();
        cy.url().should('include', '/reviews');
        cy.get('article').should('have.length.gt', 0);
    });
});