import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../pageObjects/loginPage';
import InventoryPage from '../../../pageObjects/inventoryPage';


// #region Configuração Inicial
Given('que eu navego para a página de login', () => {
    LoginPage.visitPage();
});
// #endregion

//#region Navegação pagina de login
When('insiro um usuário e uma senha válidos', () => {
    LoginPage.fiilWithValidCredentials();
});

When('insiro credenciais inválidas', () => {
    LoginPage.fillWithInvalidCredentials();
});

When('o formulário de login é submetido', () => {
    LoginPage.clickLoginButton();
});
// #endregion

// #region Resultados Esperados

Then('devo ser redirecionado para a página inicial', () => {
    InventoryPage.verifyPage();
});

Then('uma mensagem de erro {string} deve ser exibida', (mensagemErro) => {
    LoginPage.verifyErrorMessage(mensagemErro);
});
// #endregion
