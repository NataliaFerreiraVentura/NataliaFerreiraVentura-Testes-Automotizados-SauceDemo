import LoginElements from './LoginElements';
import {BASE_URL,VALID_USERNAME,VALID_PASSWORD,INVALID_USERNAME,INVALID_PASSWORD,WAIT_TIME,} from '../../support/constants';

class LoginPage {

  // #region Navegação
  visit() {
    cy.visit(BASE_URL);
  }
  // #endregion

  // #region Ações de Login
  fillUsername(username = VALID_USERNAME) {
    cy.get(LoginElements.username).type(username);
  }

  fillPassword(password = VALID_PASSWORD) {
    cy.get(LoginElements.password).type(password);
  }

  clickLogin() {
    cy.get(LoginElements.loginButton).click();
  }

  loginWithInvalidCredentials() {
    this.fillUsername(INVALID_USERNAME);
    this.fillPassword(INVALID_PASSWORD);
    cy.wait(WAIT_TIME); 
  }

  loginWithSuccess(username = VALID_USERNAME, password = VALID_PASSWORD) {
    this.visit()
    this.fillUsername(username)
    this.fillPassword(password)
    this.clickLogin()
    cy.wait(WAIT_TIME)
  }
  // #endregion

  // #region Verificações
  verifyErrorMessage(errorMessage) {
    cy.get(LoginElements.errorMessage)
      .should('be.visible')
      .should('contain.text', errorMessage);
  }
  // #endregion
}

export default new LoginPage();
