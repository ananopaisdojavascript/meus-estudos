Feature: Contact List App

  Scenario: Visiting the Contact List App
  Given I open the Contact List App
  Then I see the title "Nossa Lista de Contatos"

  Scenario: Seeing the other components of the Contact List App
  Then I see the list of contacts
  Then I see the button of deleting contacts
  Then I see the "Cadastrar Contato" link

  Scenario: Seeing an especific name on the contact list
  Then I see the names "Ana", "Luana" and "Maria"

  Scenario: Visit the Create Contact Page
  When I click on "Cadastrar Contato" link
  Then I see the "Cadastrar Contato" page

  Scenario: Seeing the components of the Create Contact page
  Then I see a title with the name "Cadastrar Contato"
  Then I see a disabled button named "Cadastrar"
  Then I see another button named "Cancelar"
  And I see a form field with the title "Digitar nome" inside
  And I see another form field with the title "Digitar telefone" inside

  Scenario: Creating a contact
  When I type the name "Jennie" on the name field form
  And I type the phone number "(11) 99086-7944" on the phone field form
  Then I click on the button "Cadastrar" to create a contact and return to the main page

  Scenario: Visiting the Update Contact Page
  When I click on the name "Ana"
  Then I see a title named "Editar Contato"
  And I see a disabled button with the name "Atualizar"
  And I see another button with the name "Voltar"

  Scenario: Updating a contact
  When I type " Paula Lopes Araujo" on the name form field
  Then I click on the button named "Atualizar" to update the contact
  And I click on "Voltar" to return to the main page

