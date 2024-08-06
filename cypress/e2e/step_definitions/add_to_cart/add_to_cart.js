import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../pageObjects/loginPage';
import InventoryPage from '../../../pageObjects/inventoryPage';
import CartPage from '../../../pageObjects/cartPage';
import {PRODUTO1,PRODUTO2} from '../../../support/constants';

// #region Configuração Inicial
    Given('que estou logado na aplicação e na página de inventário', () => {
        LoginPage.loginWithSuccess()
        InventoryPage.verifyPage()
    });
// #endregion

// #region Ações no Carrinho
    When('adiciono um produto ao carrinho', () => {
        InventoryPage.addItemToCart(PRODUTO1)
    });
    
    When('adiciono dois produtos ao carrinho', () => {
        InventoryPage.addItemToCart(PRODUTO1)
        InventoryPage.addItemToCart(PRODUTO2)
    })
    
    When('vou para a página de carrinho', () => {
    InventoryPage.goToCart();
    CartPage.verifyCartItemDetails()
    })
// #endregion

// #region Resultados Esperados
    Then('o produto deve estar no carrinho', () => {
        CartPage.verifyCartBadgeCount('1')
        CartPage.verifyItemInCart(PRODUTO1)
    })

    Then('os produtos A e B devem estar no carrinho', () => {
        CartPage.verifyCartBadgeCount('2')
        CartPage.verifyItemInCart(PRODUTO1)
        CartPage.verifyItemInCart(PRODUTO2)

    })
    
    
// #endregion