class CartPage {
  
  // #region Verificações
    verifyCartBadgeCount(expectedCount) {
      cy.get('.shopping_cart_badge', { timeout: 10000 }).should('be.visible')
      .and('contain', expectedCount)
    }
   
    verifyCartItemVisibility(productName) {
      cy.contains(productName).should('be.visible')
    }
    
    verifyCartItemDetails() {
    
      cy.get('.inventory_item_price')
      .should('be.visible');
    }
    
    verifyItemNotInCart(productName) {
      cy.contains(productName).should('not.exist')
    }  
    
    verifyItemInCart(productName) {
      cy.get('.cart_list').should('be.visible')
      cy.get('.cart_item').should('contain.text', productName)
    }
    
    verifyItemInCart() {
      cy.get('.cart_list').should('be.visible')
    }
    // #endregion

    //# Ações no Carrinho
    removeItemFromCart(productName) {
      cy.contains(productName).parents('.cart_item')
      .find('.btn_secondary').contains('REMOVE').click()
    }
    // #endregion
}

export default new CartPage()