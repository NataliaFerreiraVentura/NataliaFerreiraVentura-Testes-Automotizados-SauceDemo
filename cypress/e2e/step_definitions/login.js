import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// Acessa a pagina antes de qualquer interação
Given('o usuário está na página de login', () => {
  cy.visit('https://www.saucedemo.com/v1/') 
})

// Realiza o login na aplicação
When('o usuário insere o nome de usuário e a senha', () => {
  const username = 'standard_user'
  const password = 'secret_sauce'
  
  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
})

When('o usuário clica no botão {string}', (buttonText) => {
   cy.get('#login-button').contains(buttonText).click()
})

//Valida se a ação foi concluida
Then('o usuário deve ser redirecionado para a página inicial', () => {
  cy.url().should('include', '/v1/')
})