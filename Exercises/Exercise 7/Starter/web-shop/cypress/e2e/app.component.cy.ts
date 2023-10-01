/// <reference types="cypress" />
describe('AppComponent', ()=>{
    before(()=>{
        console.log('--- Before all')
        // npm install cypress --save-dev
        // npx cypress open
        // Don't do this. Start (web) servers before cypress)
        //cy.exec('npm start');
    });
    after(()=>{
        console.log('--- After all')
    });
    afterEach(()=>{
        console.log('--- After each')
    });
    beforeEach(()=>{
        // Maybe not a good idea to intercept service call.
         cy.intercept('GET', 'https://localhost:5001/productgroups', 
             { fixture: 'productgroups.json',statusCode:200 }).as('getgroups');
        //cy.intercept('GET', 'https://localhost:5001/productgroups').as('getgroups');
        cy.visit('/');
    });
    it('should show home', ()=>{
        cy.get('a.nav-link').contains('Home').click();
        cy.title().should('eq', 'Home');
        cy.get("h1").should("have.text", 'Home');
    });
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
        // cy.get('input[name="username"]').type('aaa');
        // cy.get('button').should('be.disabled');
        // cy.get('input[name="password"]').type('aaa');
        // cy.get('button').should('be.enabled');
        // or via custom command (see support/commands.ts)
        cy.login('bbb', 'bbb');
    });
    it('should show not found', ()=>{
        cy.visit('/blabla');
        cy.url().should('include', '/blabla');
        cy.title().should('eq', 'Not Found');
        cy.get("h1").should("have.text", '404 Not Found');
    });
});