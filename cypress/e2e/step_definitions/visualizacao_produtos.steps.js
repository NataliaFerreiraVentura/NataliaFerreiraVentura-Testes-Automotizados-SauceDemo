import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pages/login/loginPage'
import InventoryPage from '../../pages/inventory/InventoryPage'

// #region Configuração Inicial
/**
 * Garante que o usuário está logado na aplicação.
 * Utiliza credenciais válidas para fazer login.
 */
Given('usuário está logado na aplicação', () => {
  LoginPage.loginWithSuccess()
})

/**
 * Verifica se a página de inventário foi carregada.
 * Confirma que a URL da página contém '/inventory.html'.
 */
When('navega para a página de inventário', () => {
  InventoryPage.verifyPage()
})
// #endregion

// #region Verificação de Produtos
/**
 * Verifica se a lista de produtos está visível na página de inventário.
 */
Then('o usuário deve ver a lista de produtos', () => {
  InventoryPage.verifyProductListVisible()
});

/**
 * Verifica se um produto específico está visível na lista de produtos.
 * @param {string} productName - Nome do produto a ser verificado.
 */
Then('o produto {string} deve estar visível', (productName) => {
  InventoryPage.verifyProductPresence(productName)
});

/**
 * Verifica se a descrição de um produto específico está visível.
 */
Then('a descrição do produto deve estar visível', () => {
  InventoryPage.verifyProductDescription('Sauce Labs Backpack');
})
// #endregion

// #region Filtros e Ordenação
/**
 * Aplica um filtro de ordenação na lista de produtos.
 * @param {string} filterOption - Opção de filtro a ser aplicada.
 */
When('aplica o filtro {string}', (filterOption) => {
  InventoryPage.applySortFilter(filterOption);
})

/**
 * Verifica se os produtos estão exibidos em ordem de preço crescente.
 */
Then('os produtos devem ser exibidos em ordem de preço crescente', () => {
  InventoryPage.verifyProductsInPriceOrder();
})

/**
 * Seleciona uma opção no filtro de ordenação.
 * @param {string} sortOption - Opção de ordenação a ser selecionada.
 */
When('seleciona a opção {string} no filtro de ordenação', (sortOption) => {
  InventoryPage.applySortFilter(sortOption);
})

/**
 * Verifica se os produtos estão exibidos em ordem alfabética decrescente.
 */
Then('os produtos devem ser exibidos em ordem alfabética decrescente', () => {
  InventoryPage.verifyProductsInAlphabeticalOrder();
})
// #endregion