import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pages/login/loginPage'
import InventoryPage from '../../pages/inventory/InventoryPage'
import CartPage from '../../pages/cart/cartPage'
import { PRODUTO1 } from '../../support/constants'

// #region Configuração Inicial
Given("o usuário está logado na aplicação", () => {
  LoginPage.loginWithSuccess()
  InventoryPage.verifyPage()
})
// #endregion

// #region Ações no Carrinho
When("adiciona um produto específico ao carrinho", () => {
  InventoryPage.addItemToCart(PRODUTO1);
})

When("navega para o carrinho", () => {
  CartPage.goToCart();
})

When("remove o produto específico do carrinho", () => {
  CartPage.removeItemFromCart(PRODUTO1)
})
// #endregion

// #region Verificações
Then("o produto removido não deve estar mais no carrinho", () => {
  CartPage.verifyItemNotInCart(PRODUTO1)
})
// #endregion
