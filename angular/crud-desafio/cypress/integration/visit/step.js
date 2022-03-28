/// <reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open the Contact List App', () => {
  cy.visit('/contacts')
})

Then('I see the title {string}', (title) => {
  cy.get('.contact-list-title').should('contain', title)
})

Then('I see the list of contacts', () => {
  cy.get('#contact-list').should('be.visible')
})

Then('I see the button of deleting contacts', () => {
  cy.get('.delete-contact').should('be.visible')
})

Then('I see the {string} link', (linkName) => {
  cy.get('.create-contact').should('contain', linkName)
})

Then('I see the names {string}, {string} and {string}', (nameOne, nameTwo, nameThree) => {
  cy.get('.contact-name').should('contain', nameOne, nameTwo, nameThree)
})

When('I click on {string} link', (link) => {
  cy.get('.create-contact').should('contain', link).click()
  cy.visit('/contacts/create')
})

Then('I see the {string} page', (pageName) => {
  cy.get('app-contact-create').should('be.visible', pageName)
})

Then('I see a title with the name {string}', (createTitle) => {
  cy.contains(createTitle)
})

Then('I see a disabled button named {string}', (createButtonName) => {
  cy.get('.include-contact').should('be.visible', createButtonName)
})

Then('I see another button named {string}', (cancelButtonName) => {
  cy.get('.clean-contact-form').should('be.visible', cancelButtonName)
})

Then('I see a form field with the title {string} inside', (typeName) => {
  cy.get('input[name="name"]').should('be.visible', typeName)
})

Then('I see another form field with the title {string} inside', (typePhone) => {
  cy.get('input[name="phone"]').should('be.visible', typePhone)
})

When('I type the name {string} on the name field form', (name) => {
	cy.get('input[name="name"]').type(name);
});

When('I type the phone number {string} on the phone field form', (phone) => {
	cy.get('input[name="phone"]').type(phone)
});

Then('I click on the button {string} to create a contact and return to the main page', (createNewContact) => {
	cy.get('.include-contact').should('be.visible', createNewContact).click()
});

When('I click on the name {string}', (name) => {
	cy.contains(name).click()
  cy.visit('/contacts/1')
});

Then('I see a title named {string}', (title) => {
	cy.contains(title)
});

Then('I see a disabled button with the name {string}', (updateButton) => {
	cy.get('.update-contact').should('be.visible', updateButton)
});

Then('I see another button with the name {string}', (returnButton) => {
	cy.get('.contact-list-btn').should('be.visible', returnButton)
});

When('I type {string} on the name form field', (typeLastName) => {
	cy.get('input[name="name"]').type(typeLastName);
});

Then('I click on the button named {string} to update the contact', (clickUpdateButton) => {
	cy.get('.update-contact').should('be.visible', clickUpdateButton).click()
});

Then('I click on {string} to return to the main page', (returnMain) => {
	cy.get('.contact-list-btn').should('be.visible', returnMain).click()
});



