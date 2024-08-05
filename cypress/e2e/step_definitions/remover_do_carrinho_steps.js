import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pages/login/loginPage'
import InventoryPage from '../../pages/inventory/InventoryPage'
import CartPage from '../../pages/cart/cartPage'
import { PRODUTO1, PRODUTO2 } from '../../support/constants'

// Configuração Inicial
Given('o usuário está logado na aplicação', () => {
  LoginPage.loginWithSuccess(); // Realiza o login do usuário
  InventoryPage.verifyPage(); // Verifica se a página de inventário está visível
})

// Ações no Carrinho
When('adiciona um produto específico ao carrinho', () => {
  InventoryPage.addItemToCart(PRODUTO1); // Adiciona o produto PRODUTO1 ao carrinho
})

Given('adiciona dois produtos específicos ao carrinho', () => {
  InventoryPage.addItemToCart(PRODUTO1); // Adiciona PRODUTO1 ao carrinho
  InventoryPage.addItemToCart(PRODUTO2); // Adiciona PRODUTO2 ao carrinho
})

When('navega para o carrinho', () => {
  CartPage.goToCart(); // Navega para a página do carrinho
})

When('remove o produto específico do carrinho', () => {
  CartPage.removeItemFromCart(PRODUTO1); // Remove o produto PRODUTO1 do carrinho
})

// Verificações
Then('o produto removido não deve estar mais no carrinho', () => {
  CartPage.verifyItemNotInCart(PRODUTO1); // Confirma que o produto PRODUTO1 foi removido
})

Then('o outro produto deve permanecer no carrinho', () => {
  CartPage.verifyItemInCart(PRODUTO2); // Confirma que o produto PRODUTO2 ainda está no carrinho
})