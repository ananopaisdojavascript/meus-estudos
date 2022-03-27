import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to the home page', () => {
  cy.visit('http://localhost:4200/')
})

When('the home page has loaded', () => {
  cy.get('app-girls').should('be.visible')
})

Then('I see the home page', () => {
  cy.get('h1').should('be.visible')
  cy.get('form').should('be.visible')
  cy.get('table').should('be.visible')
})
