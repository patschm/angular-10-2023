/// <reference types="cypress" />

// npm install cypress --save-dev
// npx cypress open
describe('AppComponent', ()=>{
    before(()=>{
        console.log('--- Before all')
        // Don't do this. Start (web) servers before cypress)
        // cy.exec('npm start');
    });
    after(()=>{
        console.log('--- After all')
    });
    afterEach(()=>{
        console.log('--- After each')
    });
    beforeEach(()=>{
        console.log('--- Before each');
        // Maybe not a good idea to intercept service call.
        //cy.intercept('GET', 'https://localhost:5001/products/all/*', 
        //     { fixture: 'products.json',statusCode:200 }).as('getproducts');
        cy.intercept('GET', 'https://localhost:5001/products/all/*').as('getproducts');
    });
    it('should show overview', ()=>{
        cy.visit('/');
        cy.url().should('include', 'overview');
        cy.wait('@getproducts').its('response.statusCode').should('eq', 200);
        cy.title().should('eq', 'Products');
        cy.get('tbody>tr').should('have.length', 10);     
    });
    it('should show navigate to detail', ()=>{
        cy.visit('/');
        cy.get('tr:first-child()').click();
        cy.url().should('include', 'detail');
        cy.title().should('eq', 'Details');
        cy.get("h2").should("not.be.empty");
    });
    
    describe('Product Details', ()=>{
        it('should show image', ()=>{
            cy.toFirstDetail();
            cy.get('img').should('be.visible').and(($imgs)=>{
                expect($imgs[0].naturalWidth).to.be.greaterThan(0);
                expect($imgs[0]).attr('title').to.exist;
                expect($imgs[0]).attr('title').not.empty;
            });   
        });
        it('should have score', ()=>{
            cy.toFirstDetail();
            cy.get('h4[data-cy-score]').should('not.be.empty');
        });
        it('should have specifications', ()=>{
            cy.toFirstDetail();
            cy.get('tr[data-cy-spec]').should('have.length.gt', 0);
        });
    });
});