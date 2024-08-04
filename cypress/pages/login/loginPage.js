import LoginElements from './LoginElements'

class LoginPage {
  // Define variáveis para username e password válidos
  validUsername = 'standard_user'
  validPassword = 'secret_sauce'
  
  // Define variáveis para username e password inválidos
  invalidUsername = 'invalid_user'
  invalidPassword = 'invalid_password'

  // Visita a página de login
  visit() {
    cy.visit('https://www.saucedemo.com/v1/')
  }

  // Preenche o campo de nome de usuário valido
  fillUsername(username = this.validUsername) {
    cy.get(LoginElements.username).type(username)
  }

  // Preenche o campo de senha valido
  fillPassword(password = this.validPassword) {
    cy.get(LoginElements.password).type(password)
  }

  clickLogin() {
    cy.get(LoginElements.loginButton).click();
  }
 

  // Faz login com credenciais inválidas
  loginWithInvalidCredentials() {
    this.fillUsername(this.invalidUsername)
    this.fillPassword(this.invalidPassword)
    cy.wait(5500) 
  }

  verifyErrorMessage(errorMessage) {
    
    cy.get(LoginElements.errorMessage)
      .should('be.visible')
      .should('contain.text', errorMessage)
  }

  static loginWithSuccess() {
    this.fillUsername(validUsername);
    this.fillPassword(validPassword);
    this.clickLogin();
  }

}

export default new LoginPage()
