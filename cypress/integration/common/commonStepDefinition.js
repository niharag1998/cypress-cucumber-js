import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('Step definition for given', () => {
    cy.log('this works');
})
Given('Step definition for When', () => {
    cy.log('this works');
})
Given('Step definition for Then', () => {
    cy.log('this works');
})
Given('Step definition for And', () => {
    cy.log('this works');
})