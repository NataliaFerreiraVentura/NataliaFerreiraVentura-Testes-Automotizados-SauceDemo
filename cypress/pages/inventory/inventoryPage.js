import InventoryElements from './InventoryElements'

class InventoryPage {
  verifyPage() {
    cy.url().should('include', '/inventory.html')
    cy.screenshot('acesso a pagina de inventário')
  }
  verifylistProductVisibility(){
    cy.get(InventoryElements.inventoryList).should('be.visible')
  }

  verifyProductVisibility(productName) {
    cy.get(InventoryElements.productName).contains(productName).should('be.visible')
  }

  verifyProductDescription(productName) {
    cy.get(InventoryElements.productName).contains(productName).parents('.inventory_item').within(() => {
      cy.get(InventoryElements.productDescription).should('be.visible')
    })
  }

  applyFilter(filterOption) {
    cy.get(InventoryElements.sortContainer).select(filterOption)
  }

  verifyProductPriceOrderAscending() {
    let previousPrice = 0
    cy.get(InventoryElements.productPrice).each(($el) => {
      const priceText = $el.text().replace('$', '')
      const price = parseFloat(priceText)
      expect(price).to.be.at.least(previousPrice)
      previousPrice = price
    })
  }

  verifyProductNameOrderDescending() {
    const productNames = []
    cy.get(InventoryElements.productName).each(($el) => {
      productNames.push($el.text())
    }).then(() => {
      const sortedProductNames = [...productNames].sort().reverse()
      expect(productNames).to.deep.equal(sortedProductNames)
    })
  }

  addToCart(productName) {
    cy.get(InventoryElements.productName).contains(productName).parents('.inventory_item').within(() => {
      cy.get(InventoryElements.addToCartButton).click()
    })
  }
}

export default new InventoryPage()
