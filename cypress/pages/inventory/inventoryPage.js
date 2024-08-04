import InventoryElements from './InventoryElements';

class InventoryPage {

  // #region Navegação
  verifyPage() {
    cy.url().should('include', '/inventory.html');
  }
  // #endregion

  // #region Verificação de Produtos
  verifyProductListVisible() {
    cy.get(InventoryElements.productList).should('be.visible');
  }

  verifyProductPresence(productName) {
    cy.get(InventoryElements.productName)
      .contains(productName)
      .should('be.visible');
  }

  verifyProductDescription(productName) {
    cy.get(InventoryElements.productName)
      .contains(productName)
      .parents('.inventory_item')
      .find(InventoryElements.productDescription)
      .should('be.visible');
  }
  // #endregion

  // #region Filtros e Ordenação
  applySortFilter(sortOption) {
    cy.get(InventoryElements.sortContainer).select(sortOption);
  }

  verifyProductsInPriceOrder() {
    let previousPrice = 0;

    cy.get(InventoryElements.productPrice).then($prices => {
      cy.wrap($prices).each($el => {
        const priceText = $el.text().replace('$', '');
        const price = parseFloat(priceText);

        expect(price).to.be.at.least(previousPrice);
        previousPrice = price;
      });
    });
  }

  verifyProductsInAlphabeticalOrder() {
    const productNames = [];

    cy.get(InventoryElements.productName).then($elements => {
      $elements.each((index, element) => {
        productNames.push(element.innerText);
      });

      const sortedProductNames = [...productNames].sort().reverse();
      expect(productNames).to.deep.equal(sortedProductNames);
    });
  }
  // #endregion

  // #region Ações
  addItemToCart(productName) {
    cy.contains(productName)
      .parents('.inventory_item')
      .find(InventoryElements.addToCartButton)
      .should('have.text', 'ADD TO CART')
      .click()
  }
  // #endregion

  
}

export default new InventoryPage();
