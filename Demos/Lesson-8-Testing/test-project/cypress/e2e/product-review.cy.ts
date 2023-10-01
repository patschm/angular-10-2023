/// <reference types="cypress" />
describe('Product Review', ()=>{
    before(()=>{
        // cy.intercept('GET', 'https://localhost:5001/products/**', {fixture:'product.json'});
        // cy.intercept('GET', 'https://localhost:5001/products/reviews/**', {fixture:'reviews.json'});
        // cy.intercept('POST', 'https://localhost:5001/products/reviews', 
        //     {
        //         "productID": 1,
        //         "author": "User",
        //         "text":	"Product is very good",
        //         "score":5
        //     });
    });
    it('should show product reviews detail', ()=>{
        cy.visit('/products/product/590164/reviews');
        cy.get('.nav > :nth-child(4) > .nav-link').click();
        cy.url().should('include', '/login');
        cy.login('ccc', 'ccc');
        cy.get('h3').contains('Your Review');
    });
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