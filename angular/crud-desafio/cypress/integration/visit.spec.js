/// <reference types="cypress" />

describe('Visiting the app', () => {
  // Acessar a página
  beforeEach(() => {
    cy.visit('/contacts')
  })

  // Mostrar o título da página inicial
  it('should display the title of the contact list', () => {
    cy.title('Nossa Lista de Contatos')
  })

  // Mostrar a lista de contatos
  it('should display the contact list', () => {
    cy.get('#contact-list').should('be.visible')
  })

  // Mostrar os nomes que estão na lista
  it('should display the contact names', () => {
    cy.get('.contact-name').should('be.visible')
  })

  // Mostrar o botão de apagar contato
  it('should display the delete contact button', () => {
    cy.get('.delete-contact').should('be.visible')
  })

  // Mostrar o link que acessa o cadastro de contatos
  it('should display the include contact link', () => {
    cy.get('.create-contact').should('contain', 'Cadastrar Contato')
  })
})

describe('Show the page of including contacts', () => {
  it('should display the page of including contacts', () => {
    cy.get('.create-contact').should('contain', 'Cadastrar Contato').click()
    cy.visit('/contacts/create')
  })

  it('should display the title of the contact including page', () => {
    cy.title('Cadastrar Contato')
  })

  it('should display the create contact form', () => {
    cy.get('form').should('be.visible')
  })

  it('should fill the name Jennie on the name form field', () => {
    cy.get('input[name="name"]').type('Jennie');
  })

  it('should type the phone number (11) 99086-7944', () => {
    cy.get('input[name="phone"]').type('(11) 99086-7944')
  })

  it('should display the button of including contacts', () => {
    cy.get('.include-contact').should('be.visible')
  })

  it('should include the name Jennie on the contact list and return to the contact list', () => {
    cy.get('.include-contact').should('be.visible').click()
  })
})

describe('Show the page of updating contacts', () => {
  it('should click on the name Ana to enter the update contact page', () => {
    cy.contains('Ana').click()
    cy.visit('/contacts/1')
  })

  it('should type on the name field Paula Lopes Araujo', () => {
    cy.get('input[name="name"]').type(' Paula Lopes Araujo');
  })

  it('should display the button of updating contacts', () => {
    cy.get('.update-contact').should('be.visible')
  })

  it('should update the name field on the contact list', () => {
    cy.get('.update-contact').should('be.visible').click()
  })

  it('should display the button which returns to the contact list', () => {
    cy.get('.contact-list-btn').should('be.visible')
  })

  it('should return to the contact list', () => {
    cy.get('.contact-list-btn').should('be.visible').click()
  })
})

describe('Delete a contact', () => {
  it('should click on the button to delete the contact Jennie', () => {
    cy.contains('Jennie')
    cy.get('.delete-contact').contains('Jennie').should('be.visible').click({ multiple: true })
  })
})
