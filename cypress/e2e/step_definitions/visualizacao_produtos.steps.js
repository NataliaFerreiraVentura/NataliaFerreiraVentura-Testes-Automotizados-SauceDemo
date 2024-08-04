import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pages/login/loginPage'
import InventoryPage from '../../pages/inventory/InventoryPage'

// #region Configuração Inicial
Given('usuário está logado na aplicação', () => {
  LoginPage.loginWithSuccess()
});

When('navega para a página de inventário', () => {

  InventoryPage.verifyPage()
});
// #endregion

// #region Verificação de Produtos
Then('o usuário deve ver a lista de produtos', () => {
  InventoryPage.verifyProductListVisible();
});

Then('o produto {string} deve estar visivel', (productName) => {
  InventoryPage.verifyProductPresence(productName);
});

Then('a descrição do produto deve estar visivel', () => {
  InventoryPage.verifyProductDescription('Sauce Labs Backpack');
});
// #endregion

// #region Filtros e Ordenação
When('aplica o filtro {string}', (filterOption) => {
  InventoryPage.applySortFilter(filterOption);
});

Then('os produtos devem ser exibidos em ordem de preço crescente', () => {
  InventoryPage.verifyProductsInPriceOrder();
});

When('seleciona a opção {string} no filtro de ordenação', (sortOption) => {
  InventoryPage.applySortFilter(sortOption);
});

Then('os produtos devem ser exibidos em ordem alfabética decrescente', () => {
  InventoryPage.verifyProductsInAlphabeticalOrder();
});
// #endregion
