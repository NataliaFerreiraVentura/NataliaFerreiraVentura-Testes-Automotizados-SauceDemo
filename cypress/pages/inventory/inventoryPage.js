import InventoryElements from './InventoryElements';

class InventoryPage {

  // #region Navegação
  /**
   * Verifica se a URL da página de inventário está correta.
   */
  verifyPage() {
    cy.url().should('include', '/inventory.html');
  }
  // #endregion

  // #region Verificação de Produtos
  /**
   * Confirma que a lista de produtos está visível.
   */
  verifyProductListVisible() {
    cy.get(InventoryElements.productList).should('be.visible');
  }

  /**
   * Verifica se um produto específico está presente na lista.
   * @param {string} productName - Nome do produto a ser verificado.
   */
  verifyProductPresence(productName) {
    cy.get(InventoryElements.productName)
      .contains(productName)
      .should('be.visible');
  }

  /**
   * Verifica se a descrição de um produto específico está visível.
   * @param {string} productName - Nome do produto cuja descrição será verificada.
   */
  verifyProductDescription(productName) {
    cy.get(InventoryElements.productName)
      .contains(productName)
      .parents('.inventory_item')
      .find(InventoryElements.productDescription)
      .should('be.visible');
  }
  // #endregion

  // #region Filtros e Ordenação
  /**
   * Aplica um filtro de ordenação à lista de produtos.
   * @param {string} sortOption - Opção de ordenação a ser aplicada.
   */
  applySortFilter(sortOption) {
    cy.get(InventoryElements.sortContainer).select(sortOption);
  }

  /**
   * Verifica se os produtos estão ordenados por preço de forma ascendente.
   */
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

  /**
   * Verifica se os produtos estão ordenados em ordem alfabética decrescente.
   */
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
  /**
   * Adiciona um item específico ao carrinho.
   * @param {string} productName - Nome do produto a ser adicionado.
   */
  addItemToCart(productName) {
    cy.contains(productName)
      .parents('.inventory_item')
      .find(InventoryElements.addToCartButton)
      .should('have.text', 'ADD TO CART')
      .click();
  }
  // #endregion

}

export default new InventoryPage();
