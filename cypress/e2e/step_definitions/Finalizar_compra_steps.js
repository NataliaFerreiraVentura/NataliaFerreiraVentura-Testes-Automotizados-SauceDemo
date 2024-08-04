import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pages/login/loginPage'
import InventoryPage from '../../pages/inventory/InventoryPage'
import CartPage from '../../pages/cart/cartPage'
import { PRODUTO1 } from '../../support/constants'
import CheckoutPage from '../../pages/checkout/checkoutPage'

// #region Configuração Inicial
Given("o usuário está logado na aplicação", () => {
  LoginPage.loginWithSuccess()
  InventoryPage.verifyPage()
});
// #endregion

// #region Ações no Carrinho
When("adiciona produtos ao carrinho", () => {
  InventoryPage.addItemToCart(PRODUTO1)
})

When("navega para o carrinho", () => {
  CartPage.goToCart()
})
// #endregion

// #region Checkout
When("prossegue para o checkout", () => {
  CheckoutPage.gotoCheckout()
});

When("preenche as informações de pagamento", () => {
  CheckoutPage.fillPaymentInformation()
});

When("clica no botão em continuar", () => {
  CheckoutPage.clickContinue()
});

Then("as informações da compra devem ser exibidas", () => {
  CartPage.verifyCartListVisibility()
  CheckoutPage.verifyPurchaseOverview()
});

When("finaliza a compra", () => {
  CheckoutPage.clickFinish()
});
// #endregion

// #region Resultados Esperados
Then("a mensagem de sucesso deve ser exibida", () => {
  CheckoutPage.verifySuccessMessage()
})
// #endregion
