import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import InventoryPage from '../../../pageObjects/inventoryPage';
import LoginPage from '../../../pageObjects/loginPage';

// #region Configuração Inicial
Given('que estou logado na aplicação', () => {
    LoginPage.loginWithSuccess()
    InventoryPage.verifyPage()
});
// #endregion

// #region Filtragem e Ordenação de Produtos
When('aplico o filtro {string}', (sortOption) => {
    InventoryPage.applySortFilter(sortOption)
});

Then('os produtos devem ser exibidos em ordem de preço crescente', () => {
    InventoryPage.verifyProductsInPriceOrder()
})

Then('os produtos devem ser exibidos em ordem alfabética {string}', (order) => {
    InventoryPage.verifyProductsInAlphabeticalOrder(order)
});
// #endregion

// #region Resultados Esperados
Then('eu devo ver a lista de produtos', () => {
    InventoryPage.verifyProductListVisible()
});

Then('a lista de produtos deve conter {int} itens', (itemCount) => {
    InventoryPage.verifyProductCount(itemCount)
});
// #endregion