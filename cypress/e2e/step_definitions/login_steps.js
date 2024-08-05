import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pages/login/loginPage'
import InventoryPage from '../../pages/inventory/InventoryPage'

// #region Configuração Inicial
/**
 * Navega para a página de login.
 */
Given('que o usuário navega para a página de login', () => {
  LoginPage.visit()
});
// #endregion

// #region Ações de Login
/**
 * Preenche o nome de usuário e a senha válidos.
 */
When('o nome de usuário e a senha válidos são inseridos', () => {
  LoginPage.fillUsername()
  LoginPage.fillPassword()
});

/**
 * Insere credenciais inválidas e aguarda o tempo definido.
 */
When('credenciais inválidas são inseridas', () => {
  LoginPage.loginWithInvalidCredentials()
});

/**
 * Clica no botão de login com base no texto fornecido.
 * @param {string} buttonText - Texto do botão a ser clicado.
 */
When('clica no botão {string}', (buttonText) => {
  LoginPage.clickLogin(buttonText)
});
// #endregion

// #region Resultados Esperados
/**
 * Verifica se o redirecionamento para a página inicial ocorreu.
 */
Then('deve ser redirecionado para a página inicial', () => {
  InventoryPage.verifyPage()
});

/**
 * Verifica se a mensagem de erro exibida corresponde à esperada.
 * @param {string} errorMessage - Mensagem de erro esperada.
 */
Then('uma mensagem de erro {string} deve ser exibida', (errorMessage) => {
  LoginPage.verifyErrorMessage(errorMessage)
});
// #endregion