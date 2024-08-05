import LoginElements from './LoginElements';
import {BASE_URL,VALID_USERNAME,VALID_PASSWORD,INVALID_USERNAME,INVALID_PASSWORD} from '../../support/constants';

class LoginPage {
  // #region Métodos de Navegação
  // Método para acessar a página de login
  visit() {
    cy.visit(BASE_URL + 'index.html'); // Usa BASE_URL para acessar a URL
  }
  // #endregion

  // #region Métodos de Preenchimento de Formulário
  // Método para preencher o campo de nome de usuário
  fillUsername(username = VALID_USERNAME) {
    cy.get(LoginElements.username).type(username);
  }

  // Método para preencher o campo de senha
  fillPassword(password = VALID_PASSWORD) {
    cy.get(LoginElements.password).type(password);
  }
  // #endregion

  // #region Métodos de Login
  // Método para fazer login com credenciais válidas
  loginWithSuccess(username = VALID_USERNAME, password = VALID_PASSWORD) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    cy.get(LoginElements.loginButton).click();
  }

  // Método para fazer login com credenciais inválidas
  loginWithInvalidCredentials() {
    this.visit();
    this.fillUsername(INVALID_USERNAME);
    this.fillPassword(INVALID_PASSWORD);
    cy.get(LoginElements.loginButton).click();
  }
  // #endregion

  // #region Métodos de Ação
  // Método para clicar no botão baseado no texto
  clickLogin(buttonText) {
    cy.contains(buttonText).click();
  }
  // #endregion

  // #region Métodos de Verificação
  // Método para verificar a mensagem de erro
  verifyErrorMessage(errorMessage) {
    cy.get(LoginElements.errorMessage).should('contain.text', errorMessage);
  }
  // #endregion
}

export default new LoginPage();