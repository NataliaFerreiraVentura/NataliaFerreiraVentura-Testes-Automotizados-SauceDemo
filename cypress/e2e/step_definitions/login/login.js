import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../pageObjects/loginPage';
import InventoryPage from '../../../pageObjects/inventoryPage';


// #region Configuração Inicial
   Given('que esteja na  página de login', () => {
        LoginPage.visitPage();
    });
// #endregion

//#region Navegação pagina de login
  When('o usuario  preenche o formulario de  "login"', () => {
      LoginPage.fiilWithValidCredentials();
    });
  
  When('o usuario  preenche o formulario de "login" com usuario e senha inválidos', () => {
      LoginPage.fillWithInvalidCredentials();
    });

  When('clica no botão Login', () => {
      LoginPage.clickLoginButton();
    });
// #endregion

// #region Resultados Esperados

   Then('será redirecionado para a página inicial', () => {
      InventoryPage.verifyPage();
    });

   Then('uma mensagem de erro {string} será exibida', (mensagemErro) => {
       LoginPage.verifyErrorMessage(mensagemErro);
    });
// #endregion
