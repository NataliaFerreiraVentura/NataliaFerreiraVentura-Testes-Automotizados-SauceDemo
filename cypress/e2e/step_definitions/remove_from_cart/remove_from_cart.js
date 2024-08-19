import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../pageObjects/loginPage';
import InventoryPage from '../../../pageObjects/inventoryPage';
import CartPage from '../../../pageObjects/cartPage';
import {PRODUTO1,PRODUTO2} from '../../../support/constants';

//#region Configuração Inicial
  Given('que estou logado na aplicação', () => {
       LoginPage.loginWithSuccess()
       InventoryPage.verifyPage()
    })
//#endregion

//#region Ações no Carrinho
  When('adiciono um produto específico ao carrinho', () => {
      InventoryPage.addItemToCart(PRODUTO1)
    })
  
  When('adiciono dois produtos específicos ao carrinho', () => {
      InventoryPage.addItemToCart(PRODUTO1)
      InventoryPage.addItemToCart(PRODUTO2)
    })
  
  When('navego para o carrinho', () => {
      InventoryPage.goToCart()
      CartPage.verifyCartItemDetails()
    })

  When('removo o produto  do carrinho', () => {
      CartPage.removeItemFromCart(PRODUTO1); // Remove o produto PRODUTO1 do carrinho
    })

  When('removo um produto específico do carrinho', () => {
      CartPage.removeItemFromCart(PRODUTO2)
    })
//#endregion

//#region Resultados esperados
  Then('o produto removido não deve estar mais no carrinho', () => {
      CartPage.verifyItemNotInCart(PRODUTO1); 
    })
  
  Then('o outro produto deve permanecer no carrinho', () => {
      CartPage.verifyItemInCart(PRODUTO1)
    })
//#endregion