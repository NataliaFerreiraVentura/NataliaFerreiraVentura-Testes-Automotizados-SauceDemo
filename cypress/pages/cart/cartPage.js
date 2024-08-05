import { CartElements, CartInterface } from './cartElement'

class CartPage {

  // #region Navegação
  /**
   * Navega para o carrinho e verifica se a URL inclui '/cart.html'
   */
  goToCart() {
    cy.get(CartInterface.cartLink).click()
    cy.url().should('include', '/cart.html')
  }
  // #endregion

  // #region Verificações
  /**
   * Verifica se o número de itens no badge do carrinho corresponde ao esperado
   * @param {number} expectedCount - Número esperado de itens no carrinho
   */
  verifyCartBadgeCount(expectedCount) {
    cy.get(CartInterface.cartBadge, { timeout: 10000 })
      .should('be.visible')
      .and('contain', expectedCount)
  }

  /**
   * Verifica se um item específico está visível no carrinho
   * @param {string} productName - Nome do produto a verificar
   */
  verifyCartItemVisibility(productName) {
    cy.contains(productName).should('be.visible')
  }

  /**
   * Verifica se a barra de preço de um item específico está visível no carrinho
   * @param {string} productName - Nome do produto a verificar
   */
  verifyCartItemDetails(productName) {
    cy.contains(productName)
      .parents(CartElements.cartItem)
      .find(CartElements.itemPriceBar)
      .should('be.visible')
  }

  /**
   * Verifica se um item específico n está ou não  no carrinho
   * @param {string} productName - Nome do produto a verificar
   */
  verifyItemNotInCart(productName) {
    cy.contains(productName).should('not.exist');
  }  

  verifyItemInCart(productName) {
    // Verifica se o contêiner da lista de itens está visível
    cy.get(CartInterface.cartList).should('be.visible')
    // Verifica se o item específico está presente na lista de itens do carrinho
    cy.get(CartElements.cartItem) // Ajuste se necessário para garantir que todos os itens sejam verificados
      .should('contain.text', productName)
  }

  /**
   * Verifica se a lista de itens do carrinho está visível
   */
  verifyCartListVisibility() {
    cy.get(CartInterface.cartList).should('be.visible')
  }
  
  // #endregion

  // #region Ações no Carrinho
  /**
   * Remove um item específico do carrinho
   * @param {string} productName - Nome do produto a remover
   */
  removeItemFromCart(productName) {
    cy.contains(productName)
      .parents(CartElements.cartItem)
      .find(CartElements.removeButton)
      .contains('REMOVE')
      .click()
  }

  // #endregion
  
}

export default new CartPage()