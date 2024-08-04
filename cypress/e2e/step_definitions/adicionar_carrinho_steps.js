import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pages/login/loginPage'
import InventoryPage from '../../pages/inventory/InventoryPage'
import CartPage from '../../pages/cart/cartPage'
import {PRODUTO1,PRODUTO2} from '../../support/constants';

// #region Configuração Inicial
Given("o usuário está logado na aplicação", () => {
  LoginPage.loginWithSuccess()
});

When("navega para a página de inventário", () => {
  InventoryPage.verifyPage()
});
// #endregion

// #region Ações no Carrinho
When("adiciona um produto ao carrinho", () => {
  InventoryPage.addItemToCart(PRODUTO1)
});

When("adiciona dois produtos ao carrinho", () => {
  InventoryPage.addItemToCart(PRODUTO1)
  InventoryPage.addItemToCart(PRODUTO2)
});

When('vai para a página de carrinho', () => {
  CartPage.goToCart()
});
// #endregion

// #region Verificações no Carrinho
Then("o produto deve estar no carrinho", () => {
  CartPage.verifyCartBadgeCount("1")
  CartPage.verifyCartItemVisibility(PRODUTO1)
  CartPage.verifyCartItemDetails(PRODUTO1)
});

Then("os produtos devem estar no carrinho", () => {
  CartPage.verifyCartBadgeCount("2")
  CartPage.verifyCartItemVisibility(PRODUTO1)
  CartPage.verifyCartItemVisibility(PRODUTO1)
  CartPage.verifyCartItemDetails(PRODUTO2)
  CartPage.verifyCartItemDetails(PRODUTO2)
});
// #endregion