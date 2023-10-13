/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('login', (user, pass)=>{
    cy.get('input[name="username"]').type(user);
    cy.get('button').should('be.disabled');
    cy.get('input[name="password"]').type(pass);
    cy.get('button').should('be.enabled').click();
});

Cypress.Commands.add('toFirstDetail', ()=>{
    cy.visit('/');
    cy.url().should('include', 'overview');
    cy.get('tr:first-child()').click();
    cy.get("h2").should("not.be.empty");
});

declare namespace Cypress {
    interface Chainable {
        login(user: string, pass: string): Chainable<void>,
        toFirstDetail():Chainable<void>
    }
}
// -- This is a parent command --
//Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
//Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }