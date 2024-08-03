import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const produto = "Sauce Labs Backpack";

Given("o usuário está logado na aplicação", () => {
  cy.visit('https://www.saucedemo.com/v1/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
  // Verifica se o login foi bem-sucedido
  cy.url().should('include', '/inventory.html');
});

When("adiciona um produto específico ao carrinho", () => {
  cy.contains(produto)
    .parents('.inventory_item')
    .find('button')
    .should('have.text', 'ADD TO CART')
    .click();
});

When("navega para o carrinho", () => {
  cy.get("a.shopping_cart_link.fa-layers.fa-fw").click();
});

When("remove o produto específico do carrinho", () => {
  cy.contains(produto)
    .parents('.cart_item')
    .find('.btn_secondary')
    .contains('REMOVE')
    .click();
});

Then("o produto removido não deve estar mais no carrinho", () => {
  cy.contains(produto).should('not.exist'); // Verifica se o produto removido não está mais no carrinho
});


