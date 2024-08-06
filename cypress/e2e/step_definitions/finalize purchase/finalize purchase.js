import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../../pageObjects/loginPage'
import InventoryPage from '../../../pageObjects/inventoryPage'
import CartPage from '../../../pageObjects/cartPage'
import CheckoutPage from '../../../pageObjects/checkoutPage'
import {PRODUTO1,PRODUTO2} from '../../../support/constants'


// #region Configuração Inicial
    Given('que estou logado na aplicação', () => {
        LoginPage.loginWithSuccess()
        InventoryPage.verifyPage()
    })
// #endregion

// #region Ações no Carrinho
    When('adiciono um produto ao carrinho', () => {
        
        InventoryPage.addItemToCart(PRODUTO1)
        .addItemToCart(PRODUTO1)
        CartPage.verifyCartBadgeCount('1')
    })
  
    When('adiciono o Produto A ao carrinho', () => {
        
        InventoryPage.addItemToCart(PRODUTO1)
        CartPage.verifyCartBadgeCount('1')
    })
    
    When('adiciono o Produto B ao carrinho', () => {
        InventoryPage.addItemToCart(PRODUTO2)
        CartPage.verifyCartBadgeCount('2')
    })
    
    When('navego para o carrinho', () => {
        InventoryPage.goToCart()
    })
// #endregion

// #region Ações no  Checkout
    When('prossigo para o checkout', () => {
        CheckoutPage.gotoCheckout()
    })
    
    When('preencho as informações de pagamento', () => {
        CheckoutPage.fillPaymentInformation()
    })
    
    When('clico no botão Continuar', () => {
        CheckoutPage.clickContinue()
    })
// #endregion
  
// #region Verificações de Compra
    Then('as informações da compra devem ser exibidas corretamente', () => {
        CheckoutPage.verifyPurchaseOverview()
    })
    
    Then('a compra deve ser finalizada com sucesso', () => {
    CheckoutPage.clickFinish()
    })
    
    Then('uma mensagem de sucesso deve ser exibida', () => {
        CheckoutPage.verifySuccessMessage()
    })
// #endregion