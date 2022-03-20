/// <reference types="cypress" />

describe("Login Functionality", () => {
    before(() => {
        cy.log(Cypress.config().baseUrl)
        
    })
    
    it('first test', () => {
        cy.log(Cypress.env("NODE_ENV"))
    })
})