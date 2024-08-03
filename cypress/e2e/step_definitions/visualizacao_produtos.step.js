import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// #region Configuração Inicial

// Acessa a página de login e faz o login com credenciais válidas
Given('o usuário está logado na aplicação', () => {
  cy.visit('https://www.saucedemo.com/v1/')
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()
})

// Navega para a página de inventário
When('o usuário navega para a página de inventário', () => {
  cy.url().should('include', '/inventory.html')
})

// #endregion

// #region Verificação de Produtos

// Verifica se a lista de produtos está visível
Then('o usuário deve ver a lista de produtos', () => {
  cy.get('.inventory_list').should('be.visible')
})

// Verifica a presença do produto específico
Then('o usuário deve ver o produto {string}', (productName) => {
  cy.get('.inventory_item_name').contains(productName).should('be.visible')
})

// Verifica a presença da descrição do produto
Then('o usuário deve ver a descrição do produto', () => {
  cy.get('.inventory_item_name').contains('Sauce Labs Backpack').parents('.inventory_item').within(() => {
    cy.get('.inventory_item_desc').should('be.visible')
  })
})

// #endregion

// #region Filtros e Ordenação

// Aplica o filtro baseado na opção fornecida
When('o usuário aplica o filtro {string}', (filterOption) => {
  cy.get('.product_sort_container').select(filterOption)
})

// Verifica se os produtos estão em ordem de preço crescente
Then('os produtos devem ser exibidos em ordem de preço crescente', () => {
  let previousPrice = 0
  cy.get('.inventory_item_price').each(($el) => {
    const priceText = $el.text().replace('$', '')
    const price = parseFloat(priceText)
    expect(price).to.be.at.least(previousPrice)
    previousPrice = price
  })
})

// Seleciona a opção de ordenação fornecida
When('o usuário seleciona a opção {string} no filtro de ordenação', (sortOption) => {
  cy.get('.product_sort_container').select(sortOption)
})

// Verifica se os produtos estão em ordem alfabética decrescente
Then('os produtos devem ser exibidos em ordem alfabética decrescente', () => {
  const productNames = []
  
  cy.get('.inventory_item_name').each(($el) => {
    productNames.push($el.text())
  }).then(() => {
    const sortedProductNames = [...productNames].sort().reverse()
    expect(productNames).to.deep.equal(sortedProductNames)
  })
})

// #endregion
