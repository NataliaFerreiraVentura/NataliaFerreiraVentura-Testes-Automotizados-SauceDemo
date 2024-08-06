import {BASE_URL,VALID_USERNAME,VALID_PASSWORD,INVALID_USERNAME,INVALID_PASSWORD} from '../support/constants';

class LoginPage {
// #region Métodos de Navegação
visitPage() {
  cy.visit(BASE_URL)
}
// #endregion

// #region Métodos de Preenchimento de Formulário
fillUsername(username) {
  cy.get('[data-test="username"]').type(username)
}

fillPassword(password) {
  cy.get('[data-test="password"]').type(password)
}
// #endregion

// #region Métodos de Login
fiilWithValidCredentials() {
  this.visitPage()
  this.fillUsername(VALID_USERNAME)
  this.fillPassword(VALID_PASSWORD)
}

loginWithSuccess() {
  this.visitPage()
  this.fillUsername(VALID_USERNAME)
  this.fillPassword(VALID_PASSWORD)
  this.clickLoginButton()
}

fillWithInvalidCredentials() {
  this.visitPage();
  this.fillUsername(INVALID_USERNAME)
  this.fillPassword(INVALID_PASSWORD)
}
  // #endregion

// #region Métodos de Ação
clickLoginButton() {
  cy.get('#login-button').click()
}
// #endregion

// #region Métodos de Verificação
verifyErrorMessage(message) {
  cy.contains(message).should('be.visible')
}
  // #endregion
  }

export default new LoginPage();