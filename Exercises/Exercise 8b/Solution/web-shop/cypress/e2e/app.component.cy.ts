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
    // Test if the home menu shows the correct title, url path and component
    it('should show home', ()=>{
        cy.get('a.nav-link').contains('Home').click();
        cy.url().should('include', '/home');
        cy.title().should('eq', 'Home');
        cy.get("h1").should("have.text", 'Home');
    });
    // Test if the productgroup menu shows the correct 
    // - title 
    // - url path
    // - component
    // - 5 productgroups
    // - images
    it('should show productgroups', ()=>{
        cy.get('a.nav-link').contains('Product groups').click();
        cy.url().should('include', '/productgroups');
        cy.wait('@getgroups').its('response.statusCode').should('eq', 200);
        cy.title().should('eq', 'Product groups');
        cy.get('div.col-md-4').should('have.length', 5);     
        cy.get('img').should('be.visible').and(($imgs)=>{
            expect($imgs[0].naturalWidth).to.be.greaterThan(0);
        });   
    });
    // Test if an unknow url results in the not found component
    it('should show not found', ()=>{
        cy.visit('/blabla');
        cy.url().should('include', '/blabla');
        cy.title().should('eq', 'Not Found');
        cy.get("h1").should("have.text", '404 Not Found');
    });


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
        cy.get('button').should('be.disabled');
        cy.get('input[name="username"]').type('aaa');
        cy.get('button').should('be.disabled');
        cy.get('input[name="password"]').type('aaa');
        cy.get('button').should('be.enabled');
        // or via custom command (see support/commands.ts)
        //cy.login('bbb', 'bbb');
    });
   
});