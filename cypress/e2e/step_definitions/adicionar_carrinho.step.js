import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// #region Dados de Teste
const produto1 = "Sauce Labs Backpack";
const produto2 = "Sauce Labs Bike Light";
// #endregion

// #region Passos do Teste
Given("o usuário está logado na aplicação", () => {
  cy.visit('https://www.saucedemo.com/v1/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
  cy.url().should('include', '/inventory.html');
});

When("navega para a página de inventário", () => {
  cy.url().should('include', '/inventory.html');
});

When("adiciona um produto ao carrinho", () => {
  cy.contains(produto1).parents('.inventory_item').find('button').should('have.text', 'ADD TO CART').click();
});

When("adiciona dois produtos ao carrinho", () => {
  cy.contains(produto1).parents('.inventory_item').find('button').should('have.text', 'ADD TO CART').click(); 
cy.contains(produto2).parents('.inventory_item').find('button').should('have.text', 'ADD TO CART').click(); 
});

Then("o produto deve estar no carrinho", () => {
  cy.get(".shopping_cart_badge").should("contain", "1"); 
  cy.get("a.shopping_cart_link.fa-layers.fa-fw").click(); 
  cy.contains(produto1).should("be.visible"); 
  cy.contains(produto1).parents('.cart_item').find('.item_pricebar').should('be.visible');
});

Then("os produtos devem estar no carrinho", () => {
  cy.get(".shopping_cart_badge").should("contain", "2"); 
  cy.get("a.shopping_cart_link.fa-layers.fa-fw").click();
  cy.contains(produto1).should("be.visible"); 
  cy.contains(produto2).should("be.visible"); 
  cy.contains(produto1).parents('.cart_item').find('.item_pricebar').should('be.visible'); 
  cy.contains(produto2).parents('.cart_item').find('.item_pricebar').should('be.visible');
});
// #endregion
