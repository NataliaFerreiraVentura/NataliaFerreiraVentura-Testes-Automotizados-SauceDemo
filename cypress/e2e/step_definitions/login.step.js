import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// #region Passos compartilhados

// Acessa a pagina antes de qualquer interação
Given('o usuário está na página de login', () => {
  cy.visit('https://www.saucedemo.com/v1/') 
})

// Clica no botão de login
When('o usuário clica no botão {string}', (buttonText) => {
  cy.get('#login-button').contains(buttonText).click()
})
// #endregion

// #region Login com sucesso

When('o usuário insere o nome de usuário e a senha', () => {
  const username = 'standard_user'
  const password = 'secret_sauce'
  
  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
})

Then('o usuário deve ser redirecionado para a página inicial', () => {
  cy.url().should('include', '/v1/')
}) 
// #endregion
 
// #region Login com dados inválidos

When('o usuário insere credenciais inválidas', () => {
  const username = 'invalid_user'
  const password = 'invalid_password'

  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
})

// Valida se o usuário vê uma mensagem de erro
Then('o usuário deve ver uma mensagem de erro {string}', (errorMessage) => {
  cy.get('[data-test="error"]').should('contain.text', errorMessage)
})
// #endregion