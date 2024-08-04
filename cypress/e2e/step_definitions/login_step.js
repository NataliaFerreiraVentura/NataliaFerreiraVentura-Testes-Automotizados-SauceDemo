import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/login/loginPage';
import InventoryPage from '../../pages/inventory/InventoryPage';

//#region Configuração inicial
Given('que o usuário navega para a página de login', () => {
  LoginPage.visit();
});
//#endregion

// #region Passos dos testes

// Realiza login com credenciais válidas
When('o nome de usuário e a senha válidos são inseridos', () => {
  LoginPage.fillUsername();
  LoginPage.fillPassword();
});

// Realiza login com credenciais inválidas
When('credenciais inválidas são inseridas', () => {
  LoginPage.loginWithInvalidCredentials();
});

// Clica no botão especificado
When('clica no botão {string}', (buttonText) => {
  LoginPage.clickLogin(buttonText);
});
//#endregion

//#region Resultados esperados

// Verifica se o usuário é redirecionado para a página inicial
Then('deve ser redirecionado para a página inicial', () => {
  InventoryPage.verifyPage();
});

// Verifica se a mensagem de erro é exibida
Then('uma mensagem de erro {string} deve ser exibida', (errorMessage) => {
  LoginPage.verifyErrorMessage(errorMessage);
});
//#endregion
