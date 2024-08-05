import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pages/login/loginPage'
import InventoryPage from '../../pages/inventory/InventoryPage'
import CartPage from '../../pages/cart/cartPage'
import { PRODUTO1, PRODUTO2 } from '../../support/constants'

// #region Configuração Inicial
Given('o usuário está logado na aplicação', () => {
  LoginPage.loginWithSuccess(); // Loga o usuário na aplicação.
})

When('navega para a página de inventário', () => {
  InventoryPage.verifyPage(); // Garante que a página de inventário está visível.
})
// #endregion

// #region Ações no Carrinho
When('adiciona um produto ao carrinho', () => {
  InventoryPage.addItemToCart(PRODUTO1)
})

When('adiciona dois produtos ao carrinho', () => {
  InventoryPage.addItemToCart(PRODUTO1)
  InventoryPage.addItemToCart(PRODUTO2)
});

When('vai para a página de carrinho', () => {
  CartPage.goToCart(); // Navega para a página do carrinho.
})
// #endregion

// #region Verificações no Carrinho
Then('o produto deve estar no carrinho', () => {
  CartPage.verifyCartBadgeCount('1'); // Verifica que o badge do carrinho mostra 1 item.
  CartPage.verifyCartItemVisibility(PRODUTO1); // Verifica que o PRODUTO1 está visível no carrinho.
  CartPage.verifyCartItemDetails(PRODUTO1); // Verifica os detalhes do PRODUTO1 no carrinho.
})

Then('os produtos devem estar no carrinho', () => {
  CartPage.verifyCartBadgeCount('2'); // Verifica que o badge do carrinho mostra 2 itens.
  CartPage.verifyCartItemVisibility(PRODUTO1); // Verifica que o PRODUTO1 está visível no carrinho.
  CartPage.verifyCartItemVisibility(PRODUTO2); // Verifica que o PRODUTO2 está visível no carrinho.
  CartPage.verifyCartItemDetails(PRODUTO1); // Verifica os detalhes do PRODUTO1 no carrinho.
  CartPage.verifyCartItemDetails(PRODUTO2); // Verifica os detalhes do PRODUTO2 no carrinho.
})
// #endregion