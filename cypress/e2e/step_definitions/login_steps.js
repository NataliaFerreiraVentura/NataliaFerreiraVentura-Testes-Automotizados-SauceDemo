import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/login/loginPage';
import InventoryPage from '../../pages/inventory/InventoryPage';

// #region Configuração Inicial
Given('que o usuário navega para a página de login', () => {
  LoginPage.visit();
});
// #endregion

// #region Ações de Login
When('o nome de usuário e a senha válidos são inseridos', () => {
  LoginPage.fillUsername();
  LoginPage.fillPassword();
});

When('credenciais inválidas são inseridas', () => {
  LoginPage.loginWithInvalidCredentials();
});

When('clica no botão {string}', (buttonText) => {
  LoginPage.clickLogin(buttonText);
});
// #endregion

// #region Resultados Esperados
Then('deve ser redirecionado para a página inicial', () => {
  InventoryPage.verifyPage();
});

Then('uma mensagem de erro {string} deve ser exibida', (errorMessage) => {
  LoginPage.verifyErrorMessage(errorMessage);
});
// #endregion
