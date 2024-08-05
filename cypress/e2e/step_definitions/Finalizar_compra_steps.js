import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pages/login/loginPage'
import InventoryPage from '../../pages/inventory/InventoryPage'
import CartPage from '../../pages/cart/cartPage'
import CheckoutPage from '../../pages/checkout/checkoutPage'
import { PRODUTO1, PRODUTO2 } from '../../support/constants'

// #region Configuração Inicial
Given('o usuário está logado na aplicação', () => {
  LoginPage.loginWithSuccess(); // Loga o usuário na aplicação
  InventoryPage.verifyPage(); // Garante que a página de inventário está visível
})
// #endregion

// #region Ações no Carrinho
When('o usuário adiciona um produto ao carrinho', () => {
  InventoryPage.addItemToCart(PRODUTO1); // Adiciona o PRODUTO1 ao carrinho
})

When('o usuário adiciona o Produto A ao carrinho', () => {
  InventoryPage.addItemToCart(PRODUTO1); // Adiciona o Produto A (PRODUTO1) ao carrinho
})

When('o usuário adiciona o Produto B ao carrinho', () => {
  InventoryPage.addItemToCart(PRODUTO2); // Adiciona o Produto B (PRODUTO2) ao carrinho
})

When('o usuário navega para o carrinho', () => {
  CartPage.goToCart(); // Navega para a página do carrinho
})
// #endregion

// #region Checkout
When('o usuário prossegue para o checkout', () => {
  CheckoutPage.gotoCheckout(); // Inicia o processo de checkout
})

When('o usuário preenche as informações de pagamento', () => {
  CheckoutPage.fillPaymentInformation(); // Preenche informações de pagamento
})

When('o usuário clica no botão "Continuar"', () => {
  CheckoutPage.clickContinue(); // Clica no botão para prosseguir no checkout
})
// #endregion

// #region Verificações de Compra
Then('as informações da compra devem ser exibidas corretamente', () => {
  CheckoutPage.verifyPurchaseOverview(); // Verifica se as informações da compra estão corretas
})

Then('a compra deve ser finalizada com sucesso', () => {
  CheckoutPage.clickFinish(); // Finaliza a compra
})

Then('uma mensagem de sucesso deve ser exibida', () => {
  CheckoutPage.verifySuccessMessage(); // Verifica a exibição da mensagem de sucesso
})
// #endregion