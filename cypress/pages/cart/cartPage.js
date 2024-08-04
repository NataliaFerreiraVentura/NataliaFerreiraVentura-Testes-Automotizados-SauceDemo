import { CartElements, CartInterface } from './cartElement'

class CartPage {

  // #region Navegação
  goToCart() {
      cy.get(CartInterface.cartLink).click()
      cy.url().should('include', '/cart.html')
        }
  // #endregion

  // #region Verificações
  verifyCartBadgeCount(expectedCount) {
    cy.get(CartInterface.cartBadge, { timeout: 10000 }) 
      .should('be.visible') 
      .and('contain', expectedCount) 
  }
  
  verifyCartItemVisibility(productName) {
    cy.contains(productName).should('be.visible')
  }

  verifyCartItemDetails(productName) {
    cy.contains(productName)
      .parents(CartElements.cartItem)
      .find(CartElements.itemPriceBar)
      .should('be.visible')
  }

  verifyItemNotInCart(productName) {
      cy.contains(productName).should('not.exist');
  }

  verifyCartListVisibility() {
      cy.get(CartInterface.cartList).should('be.visible');
  }
  // #endregion

  // #region Método para remover um item do carrinho
  removeItemFromCart(productName) {
     cy.contains(productName)
    .parents(CartElements.cartItem)
    .find(CartElements.removeButton)
    .contains('REMOVE')
    .click();
}

removeItemsFromCart(productNames) {
  productNames.forEach(productName => {
    cy.contains(productName)
      .parents(CartElements.cartItem)
      .find(CartElements.removeButton)
      .contains('REMOVE')
      .click();
  });
}
// #endregion

}

export default new CartPage()
