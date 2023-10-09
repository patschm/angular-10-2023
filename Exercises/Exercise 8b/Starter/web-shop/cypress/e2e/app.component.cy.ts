/// <reference types="cypress" />

// TODO: 1 Write unit test for the main page
// npx cypress open
console.log('Start e2e tests: npx cypress open');
describe('AppComponent', ()=>{
    beforeEach(()=>{
         cy.intercept('GET', 'https://localhost:5001/productgroups', 
             { fixture: 'productgroups.json',statusCode:200 }).as('getgroups');
        //cy.intercept('GET', 'https://localhost:5001/productgroups').as('getgroups');
        cy.visit('/');
    });
    // TODO: 1a Test if the home menu shows the correct title, url path and component
    
    
    // TODO: 1b
    // Test if the productgroup menu shows the correct 
    // - title 
    // - url path
    // - component
    // - 5 productgroups
    // - images
    
    // TODO: 1c
    // Test if an unknow url results in the not found component
    


    it('should show about', ()=>{
        cy.get('a.nav-link').contains('About').click();
        cy.url().should('include', '/about');
        cy.title().should('eq', 'About');
        cy.get("h1").should("have.text", 'About');
    });
    it('should show login', ()=>{
        cy.get('a.nav-link').contains('Login').click();
        cy.url().should('include', '/login');
        cy.title().should('eq', 'Login');   
    });
   
});