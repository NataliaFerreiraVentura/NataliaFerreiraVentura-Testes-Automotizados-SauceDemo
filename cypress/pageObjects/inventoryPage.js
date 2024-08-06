class InventoryPage {
  
//#region Métodos de Filtro e Ordenação
applySortFilter(sortOption) {
  cy.get('.product_sort_container').select(sortOption)
}

verifyProductsInPriceOrder() {
  cy.get('.inventory_item_price').then($prices => {
    const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).to.deep.equal(sortedPrices);
})
}

verifyProductsInAlphabeticalOrder(order) {
  cy.get('.inventory_item_name').then($names => {
    const names = [...$names].map(name => name.innerText);
    const sortedNames = order === 'asc' ? [...names].sort() : [...names].sort().reverse();
    expect(names).to.deep.equal(sortedNames);
  });
}
// #endregion

// #region Métodos de Verificação de Lista
verifyProductListVisible() {
  cy.get('.inventory_list').should('be.visible');
}

verifyProductPresence(productName) {
  cy.get('.inventory_item_name').contains(productName).should('exist');
}

verifyProductCount(expectedCount) {
  cy.get('.inventory_item').should('have.length', expectedCount);
}

// #endregion

// #region Métodos de Verificação da Página
verifyPage() {
  cy.url().should('include', '/inventory.html');
}
// #endregion

// #region Ações
addItemToCart(productName) {
  cy.contains(productName).parents('.inventory_item').find('.btn_primary.btn_inventory')
  .should('have.text', 'ADD TO CART').click();
}

goToCart() {
  cy.get('a.shopping_cart_link.fa-layers.fa-fw').click()
  cy.url().should('include', '/cart.html')
}
// #endregion
}

export default new InventoryPage();